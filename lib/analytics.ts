// Google Analytics Event Tracking Utility
// Make sure to add your GA Measurement ID in the environment variable: NEXT_PUBLIC_GA_MEASUREMENT_ID

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

// Track page views
export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('config', GA_MEASUREMENT_ID, {
            page_path: url,
        });
    }
};

// Track custom events
export const trackEvent = ({
    action,
    category,
    label,
    value,
}: {
    action: string;
    category: string;
    label?: string;
    value?: number;
}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', action, {
            event_category: category,
            event_label: label,
            value: value,
        });
    }
};

// Pre-defined CTA tracking functions
export const trackCTA = {
    // Hero section CTA clicks
    heroClick: (label: string) => {
        trackEvent({
            action: 'click',
            category: 'CTA',
            label: `hero_${label}`,
        });
    },

    // Contact email click
    contactEmail: () => {
        trackEvent({
            action: 'click',
            category: 'CTA',
            label: 'contact_email',
        });
    },

    // Features exploration
    exploreFeatures: () => {
        trackEvent({
            action: 'click',
            category: 'CTA',
            label: 'explore_features',
        });
    },

    // Newsletter subscription
    newsletterSubscribe: () => {
        trackEvent({
            action: 'submit',
            category: 'Newsletter',
            label: 'footer_subscribe',
        });
    },

    // Navigation clicks
    navClick: (item: string) => {
        trackEvent({
            action: 'click',
            category: 'Navigation',
            label: item,
        });
    },

    // Social link clicks
    socialClick: (platform: string) => {
        trackEvent({
            action: 'click',
            category: 'Social',
            label: platform,
        });
    },

    // Carousel interactions
    carouselInteraction: (action: 'next' | 'prev' | 'dot', slideIndex: number) => {
        trackEvent({
            action: action,
            category: 'Carousel',
            label: `slide_${slideIndex}`,
        });
    },

    // Demo video play
    videoPlay: () => {
        trackEvent({
            action: 'play',
            category: 'Video',
            label: 'demo_video',
        });
    },
};
