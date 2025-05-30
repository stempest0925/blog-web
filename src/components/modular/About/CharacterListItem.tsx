"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, Variants } from "motion/react";

// ListItem 动画变量
const variants = (index: number): Variants => ({
  initial: { y: 0, opacity: 0 },
  animate: {
    y: index % 2 === 0 ? -30 : 30,
    opacity: 1,
    transition: { type: "spring", duration: 1.6, delay: index * 0.2 }, // 使用动态计算delay替代需要严格父子动画状态映射的staggerChildren
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

// ListItem Props
type CharacterListItemProps = { resource: string; index: number };

// 需要增加悬停暂停子项动画功能
export default function CharacterListItem({ resource, index }: CharacterListItemProps) {
  const [animationCompleted, setAnimationCompleted] = useState<boolean>(false);

  const handleAnimationComplete = () => {
    setAnimationCompleted(true);
  };

  return (
    <motion.li
      variants={variants(index)}
      initial="initial"
      animate={animationCompleted ? "float" : "animate"}
      onAnimationComplete={handleAnimationComplete}
      className={`w-[100px] aspect-[1/5] overflow-hidden rounded-4xl relative`}
    >
      <Image src={resource} alt="roles" objectFit="cover" fill priority></Image>
    </motion.li>
  );
}
