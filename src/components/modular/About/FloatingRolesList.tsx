"use client";
import Image from "next/image";
import { Variants } from "motion/react";
import * as motion from "motion/react-client";
import { ROLE_IMAGES } from "@/constants/resources";
import { useEffect, useState } from "react";
import useMouseLocation from "@/hooks/useMouseLocation";

const itemVariants = (index: number): Variants => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: index % 2 === 0 ? -30 : 30,
    opacity: 1,
    transition: { type: "spring", duration: 1.6 },
  },
  float: {
    y: [index % 2 === 0 ? -30 : 30, index % 2 === 0 ? 30 : -30],
    opacity: 1,
    transition: {
      duration: 6,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

// 需要增加悬停暂停子项动画功能
export default function FloatingRolesList() {
  // 动画列表状态
  const [animationsCompleted, setAnimationsCompleted] = useState<boolean[]>(
    Array(ROLE_IMAGES.length).fill(false)
  );

  const mouseXY = useMouseLocation();

  // 其实可以通过这个完成事件，来直接对我们的元素进行DOM的动画调用，避免状态更新的React DOM树变更造成的重绘。
  const handleAnimationComplete = (index: number) => {
    setAnimationsCompleted((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  return (
    <motion.ul
      transition={{ staggerChildren: 0.2 }}
      className="flex flex-row space-x-6 py-[60px]"
      style={{
        x: -(mouseXY.x * 15),
        y: -(mouseXY.y * 15),
        transitionDuration: "300ms",
        transitionTimingFunction: "linear",
      }}
    >
      {ROLE_IMAGES.map((item, index) => {
        return (
          <motion.li
            key={item}
            variants={itemVariants(index)}
            initial="initial"
            animate={animationsCompleted[index] ? "float" : "animate"}
            onAnimationComplete={() => handleAnimationComplete(index)}
            className={`w-[100px] aspect-[1/5] overflow-hidden rounded-4xl relative`}
          >
            <Image src={item} alt="read role" objectFit="cover" fill priority></Image>
          </motion.li>
        );
      })}
    </motion.ul>
  );
}
