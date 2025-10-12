// SlideInText.jsx (relevant stuk gepatcht)
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import "../Styles/SlideInText.css";

export default function SlideInText({
  lines = "Hello GSAP 👋",
  direction = "left",
  distance = 80,              // kan ook "offscreen" (string) zijn
  start = "top 75%",
  once = false,
  duration = 0.8,
  delay = 0,
  stagger = 0,
  ease = "power3.out",
  scrub = false,
  triggerSelector = null,
  className = "",
  respectReducedMotion = true,
  markers = false,
}) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduce =
        respectReducedMotion &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const triggerEl = triggerSelector
        ? document.querySelector(triggerSelector)
        : rootRef.current;

      const startValue =
        typeof start === "number" ? () => `+=${start}` : start;

      const items = rootRef.current
        ? rootRef.current.querySelectorAll(".slide-item")
        : [];

      if (!items || items.length === 0 || !triggerEl) return;

      // 1) Bereken dynamische afstand als "offscreen"
      const isOffscreen = distance === "offscreen";
      const axisDistance = (() => {
        if (!isOffscreen) return distance;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        return (direction === "left" || direction === "right") ? vw : vh;
      })();

      // 2) Bepaal 'from' state o.b.v. richting + dynamische afstand
      const from = { opacity: 0 }; // autoAlpha is ook oké
      if (direction === "left") from.x = -axisDistance;
      if (direction === "right") from.x = axisDistance;
      if (direction === "up") from.y = -axisDistance;
      if (direction === "down") from.y = axisDistance;

      // 3) Plaats items direct in startpose (voorkomt FOUC/flash)
      gsap.set(items, from);

      // 4) Animatie naar in-beeld
      gsap.to(items, {
        opacity: 1,
        x: 0,
        y: 0,
        duration: reduce ? 0.6 : duration,
        delay,
        ease,
        stagger,
        immediateRender: false,
        scrollTrigger: {
          trigger: triggerEl,
          start: startValue,
          toggleActions: once ? "play none none none" : "play none none reverse",
          scrub,
          markers,
          once,
        },
      });
    }, rootRef);

    return () => ctx.revert();
  }, [
    direction,
    distance,
    start,
    once,
    duration,
    delay,
    stagger,
    ease,
    scrub,
    triggerSelector,
    markers,
    respectReducedMotion,
  ]);

  const items = Array.isArray(lines) ? lines : [lines];

  return (
    <div ref={rootRef} className={className}>
      {items.map((t, i) => (
        <span
          key={i}
          className="slide-item"
          style={{ display: "block", willChange: "transform, opacity" }}
        >
          {t}
        </span>
      ))}
    </div>
  );
}