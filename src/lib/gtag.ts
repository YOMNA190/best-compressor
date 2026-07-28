export const GA_TRACKING_ID = 'AW-18152107352';

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value, send_to }: { 
  action: string, 
  category?: string, 
  label?: string, 
  value?: number,
  send_to?: string 
}) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
      send_to: send_to,
    });
  }
};

// Conversion for "انقر للاتصال" (Click to Call)
export const trackClickToCall = () => {
  event({
    action: 'conversion',
    send_to: `${GA_TRACKING_ID}/GjmoCKuWgtAcENjazM9D`,
    value: 1.0,
  });
};

// Conversion for "جهة اتصال (1)" (Contact 1)
export const trackContactOne = () => {
  event({
    action: 'conversion',
    send_to: `${GA_TRACKING_ID}/xhMuCK6WgtAcENjazM9D`,
    value: 1.0,
  });
};

// Conversion for "انقر للاتصال (1)" (Click to Call 1)
export const trackClickToCallOne = () => {
  event({
    action: 'conversion',
    send_to: `${GA_TRACKING_ID}/wXyQCKyXgtAcENjazM9D`,
    value: 1.0,
  });
};

// Map existing functions to the most appropriate new ones to maintain compatibility
export const trackGeneralConversion = trackContactOne;
export const trackPrimaryCTA = trackClickToCall;
export const trackSecondaryCTA = trackClickToCallOne;
