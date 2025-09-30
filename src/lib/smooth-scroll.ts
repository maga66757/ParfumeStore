// Lightweight smooth wheel scrolling for desktop devices
// - Reduces wheel sensitivity
// - Animates with easing
// - Respects prefers-reduced-motion

export function initSmoothWheelScroll(): () => void {
  if (typeof window === "undefined") return () => {};

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
  if (prefersReduced || isTouch) {
    return () => {};
  }

  let targetY = window.scrollY;
  let isAnimating = false;

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

  const animate = () => {
    if (!isAnimating) return;
    const current = window.scrollY;
    const distance = targetY - current;
    const step = current + distance * 0.15; // smoothing factor
    window.scrollTo(0, step);

    if (Math.abs(distance) < 0.5) {
      isAnimating = false;
      window.scrollTo(0, targetY);
      return;
    }
    requestAnimationFrame(animate);
  };

  const onWheel = (e: WheelEvent) => {
    // Allow horizontal scroll gestures untouched
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

    e.preventDefault();

    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    // Reduce sensitivity and clamp
    const factor = 0.35; // smaller -> slower
    targetY = Math.min(maxScroll, Math.max(0, targetY + e.deltaY * factor));

    if (!isAnimating) {
      isAnimating = true;
      requestAnimationFrame(animate);
    }
  };

  window.addEventListener("wheel", onWheel, { passive: false });

  // Keep target in sync with any programmatic or keyboard scrolls
  const onScroll = () => {
    if (!isAnimating) {
      targetY = window.scrollY;
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // Cancel animation on user interactions (click, keys, touch)
  const cancelAnim = () => {
    isAnimating = false;
    targetY = window.scrollY;
  };
  window.addEventListener("mousedown", cancelAnim, { passive: true });
  window.addEventListener("keydown", cancelAnim, { passive: true });
  window.addEventListener("touchstart", cancelAnim, { passive: true });

  return () => {
    window.removeEventListener("wheel", onWheel as any);
    window.removeEventListener("scroll", onScroll as any);
    window.removeEventListener("mousedown", cancelAnim as any);
    window.removeEventListener("keydown", cancelAnim as any);
    window.removeEventListener("touchstart", cancelAnim as any);
  };
}


