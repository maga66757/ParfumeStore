export type AnalyticsEventName =
  | "brand_click"
  | "modal_open"
  | "order_from_modal"
  | "form_submit"
  | "form_submit_error";

export function trackEvent(
  name: AnalyticsEventName | string,
  params?: Record<string, unknown>,
) {
  if (typeof window === "undefined") return;

  try {
    // GTM style
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ event: name, ...params });

    // GA4 if available
    if ((window as any).gtag) {
      (window as any).gtag("event", name, params || {});
    }

    // Custom event for ad-hoc listeners
    window.dispatchEvent(new CustomEvent("analytics:event", { detail: { name, params } }));

    // Dev debug
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", name, params || {});
    }
  } catch {
    // ignore
  }
}


