import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";

export function MouseFollower() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springX = useSpring(trailX, { stiffness: 80, damping: 20 });
  const springY = useSpring(trailY, { stiffness: 80, damping: 20 });

  const isHovering = useRef(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
      trailX.set(e.clientX - 16);
      trailY.set(e.clientY - 16);
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      isHovering.current = !!target.closest("a, button, [role='button']");
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", onMouseOver);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onMouseOver);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{ x: cursorX, y: cursorY }}
      >
        <div
          style={{
            width: 12,
            height: 12,
            borderRadius: "50%",
            background: "oklch(0.85 0.18 215)",
            boxShadow:
              "0 0 10px oklch(0.85 0.18 215 / 0.8), 0 0 20px oklch(0.85 0.18 215 / 0.4)",
          }}
        />
      </motion.div>
      {/* Trail ring */}
      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none"
        style={{ x: springX, y: springY }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            border: "1px solid oklch(0.62 0.26 300 / 0.6)",
            boxShadow: "0 0 15px oklch(0.62 0.26 300 / 0.3)",
          }}
        />
      </motion.div>
    </>
  );
}
