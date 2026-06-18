export const GA_TRACKING_ID = 'AW-18152084922';

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

export const trackGeneralConversion = () => {
  event({
    action: 'conversion',
    send_to: `${GA_TRACKING_ID}/rC7NCOf-1cEcELqry89D`,
    value: 1.0,
  });
};

export const trackPrimaryCTA = () => {
  event({
    action: 'conversion',
    send_to: `${GA_TRACKING_ID}/ElpkCOT-1cEcELqry89D`,
    value: 1.0,
  });
};

export const trackSecondaryCTA = () => {
  event({
    action: 'conversion',
    send_to: `${GA_TRACKING_ID}/809dCO3-1cEcELqry89D`,
    value: 1.0,
  });
};
