"use client";
import { useEffect, useMemo } from "react";
import { motion, useSpring } from "motion/react";

import { ROLE_IMAGES } from "@/constants/resources";
import useMouseLocation from "@/hooks/useMouseLocation";
import CharacterListItem from "./CharacterListItem";

export default function CharacterList() {
  // 获取鼠标坐标系数
  const mouseXY = useMouseLocation();

  // 使用动画属性平滑过渡
  const springX = useSpring(0, { stiffness: 300, damping: 30 });
  const springY = useSpring(0, { stiffness: 300, damping: 30 });

  // 添加disable next line，解决eslint静态分析过度保守的警告，关于常量没有添加到依赖数组。
  useEffect(() => {
    springX.set(-(mouseXY.x * 15));
    springY.set(-(mouseXY.y * 15));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseXY]);

  // 缓存子组件渲染，让其不随父组件的更新导致重渲染。
  const renderListItem = useMemo(() => {
    return ROLE_IMAGES.map((item, index) => <CharacterListItem key={item} resource={item} index={index} />);
  }, []);

  return (
    <motion.ul className="flex flex-row space-x-6 py-[60px]" style={{ x: springX, y: springY }}>
      {renderListItem}
    </motion.ul>
  );
}
