import { useEffect, useRef, useState } from "react";

// 需要做节流，参数为节流参数
export default function useMouseLocation() {
  //   const mouseXY = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const [mouseXY, setMouseXY] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousedown", handleMouseMove);
    };
  }, []);

  const handleMouseMove = (event: MouseEvent) => {
    // 钳制这一块，可以封装工具类
    const clampedX = -1 + (event.clientX / window.innerWidth) * 2;
    const clampedY = -1 + (event.clientY / window.innerHeight) * 2;

    // 这里也可以用乘法+四色五入+触发保留小数
    const roundX = Number(clampedX.toFixed(2));
    const roundY = Number(clampedY.toFixed(2));

    setMouseXY({
      x: roundX,
      y: roundY,
    });
    // mouseXY.current = {
    //   x: roundX,
    //   y: roundY,
    // };
  };

  return mouseXY;
}
