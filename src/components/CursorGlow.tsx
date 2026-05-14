import { useEffect, useState } from "react";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 hidden md:block"
      style={{
        left: pos.x,
        top: pos.y,
        opacity: visible ? 1 : 0,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 60%)",
        mixBlendMode: "screen",
      }}
    />
  );
}
