import { useRef, useEffect } from 'react';

const vertexShader = `
  attribute vec2 position;
  varying vec2 vTexCoord;
  void main() {
    vTexCoord = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform float uScrollSpeed;
  uniform float uTunnelIntensity;
  varying vec2 vTexCoord;

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec2 mod289(vec2 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec3 permute(vec3 x) {
    return mod289(((x * 34.0) + 1.0) * x);
  }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
    m = m * m;
    m = m * m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  vec2 tunnelShape(vec2 uv, float t) {
    vec2 deform = uv;
    deform += vec2(snoise(vec2(uv.y * 2.5, t * 0.15)), snoise(vec2(uv.x * 2.5, t * 0.13 + 50.0))) * 0.18;
    deform += vec2(snoise(vec2(uv.y * 5.0, t * 0.25 + 100.0)), snoise(vec2(uv.x * 5.0, t * 0.22 + 150.0))) * 0.06;
    return deform;
  }

  vec3 getRayDirection(vec2 uv) {
    float fov = radians(75.0);
    vec3 dir = vec3(uv.x, uv.y, -1.0 / tan(fov * 0.5));
    return normalize(dir);
  }

  void main() {
    vec2 uv = (vTexCoord - 0.5) * uResolution / uResolution.y;
    float t = uTime;
    vec2 deformedUV = tunnelShape(uv, t);
    vec3 rd = getRayDirection(deformedUV);
    float marchSpeed = 0.15;
    float loopDistance = 3.0;
    int numSamples = 64;
    float totalDist = 0.0;
    vec3 col = vec3(0.0);
    for (int i = 0; i < 64; i++) {
      if (i >= numSamples) break;
      float fi = float(i);
      float dist = totalDist + fi * marchSpeed;
      float loopedDist = mod(dist, loopDistance);
      float fade = smoothstep(0.0, 0.3, loopedDist) * smoothstep(loopDistance, loopDistance - 0.5, loopedDist);
      vec3 pos = rd * dist;
      float tubeRadius = length(pos.xy) + 0.01;
      float n1 = snoise(vec2(atan(pos.y, pos.x) * 2.0, dist * 0.8 - t * 0.3));
      float n2 = snoise(vec2(atan(pos.y, pos.x) * 4.0 + 100.0, dist * 1.5 - t * 0.5));
      float pattern = n1 * 0.5 + n2 * 0.5;
      float line = smoothstep(0.3, 0.35, pattern) * smoothstep(0.5, 0.45, pattern);
      float line2 = smoothstep(0.1, 0.12, pattern) * smoothstep(0.25, 0.22, pattern);
      vec3 lineColor = mix(vec3(0.0, 0.33, 1.0), vec3(0.0, 0.9, 1.0), line2);
      float scrollStretch = 1.0 + abs(uScrollSpeed) * 3.0;
      float brightness = (line + line2 * 0.5) * fade / (tubeRadius * tubeRadius) * 0.015;
      brightness *= smoothstep(6.0, 0.0, dist);
      brightness *= scrollStretch;
      col += lineColor * brightness;
    }
    col *= smoothstep(1.0, 0.2, length(uv));
    col *= uTunnelIntensity;
    gl_FragColor = vec4(col, 1.0);
  }
`;

interface FluidTunnelProps {
  scrollSpeed?: number;
}

export default function FluidTunnel({ scrollSpeed = 0 }: FluidTunnelProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glRef = useRef<WebGLRenderingContext | null>(null);
  const programRef = useRef<WebGLProgram | null>(null);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef(Date.now());
  const scrollSpeedRef = useRef(scrollSpeed);

  useEffect(() => {
    scrollSpeedRef.current = scrollSpeed;
  }, [scrollSpeed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: false, antialias: false });
    if (!gl) return;
    glRef.current = gl;

    function compileShader(src: string, type: number) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error('Shader error:', gl!.getShaderInfoLog(shader));
      }
      return shader;
    }

    const vs = compileShader(vertexShader, gl.VERTEX_SHADER);
    const fs = compileShader(fragmentShader, gl.FRAGMENT_SHADER);
    const program = gl.createProgram()!;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    gl.useProgram(program);
    programRef.current = program;

    const posLoc = gl.getAttribLocation(program, 'position');
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, 'uTime');
    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uScrollSpeed = gl.getUniformLocation(program, 'uScrollSpeed');
    const uTunnelIntensity = gl.getUniformLocation(program, 'uTunnelIntensity');

    gl.uniform1f(uTunnelIntensity, 1.2);

    function resize() {
      const dpr = Math.min(window.devicePixelRatio, 1.5);
      canvas!.width = canvas!.clientWidth * dpr;
      canvas!.height = canvas!.clientHeight * dpr;
      gl!.viewport(0, 0, canvas!.width, canvas!.height);
      gl!.uniform2f(uResolution, canvas!.width, canvas!.height);
    }

    resize();
    window.addEventListener('resize', resize);

    function render() {
      const elapsed = (Date.now() - startTimeRef.current) * 0.001;
      gl!.uniform1f(uTime, elapsed);
      gl!.uniform1f(uScrollSpeed, scrollSpeedRef.current);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
      rafRef.current = requestAnimationFrame(render);
    }

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('resize', resize);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(buf);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
}
