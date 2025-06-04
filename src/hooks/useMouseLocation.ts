import { useEffect, useState } from "react";
import { normalize } from "@/helpers/math";
import { throttle } from "@/helpers/optimize";

// 需要做节流，参数为节流参数
export default function useMouseLocation() {
  const [mouseXY, setMouseXY] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = throttle((event: MouseEvent) => {
      const clampedX = normalize(event.clientX / window.innerWidth, { decimal: 1 });
      const clampedY = normalize(event.clientY / window.innerHeight, { decimal: 1 });

      // 节流机制，只有在计算值有变动的情况下才会触发更新渲染。
      setMouseXY((prev) => {
        if (prev.x === clampedX && prev.y === clampedY) {
          return prev;
        }
        return { x: clampedX, y: clampedY };
      });
    }, 300);

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mouseXY;
}
