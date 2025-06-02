"use client";
import Title from "@/components/atomic/Title";
import PostCard from "@/components/modular/Cards/PostCard";
import * as motion from "motion/react-client";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Variants } from "motion/react";

const pageSize = 10;

/**
 * 想要无线滚动加载且子项延迟渐入。
 * 动画方案
 * 1. 使用staggerChildren + whileInView，但动画配合存在问题，延迟与视口动画原则冲突。
 * 2. 使用staggerChildren + 分批渲染，虽然可以达到新加载项延迟渐入，但存在区块衔接不自然的问题。
 * 3. 使用 lazy计算 + 新元素渲染判断，可以完美解决无线滚动以及子项延迟渐入。
 */
const generateItemVariants = (index: number): Variants => ({
  initial: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: (index % pageSize) * 0.2,
    },
  },
});

export default function HomePage() {
  const { ref: bottomRef, inView: isBottomVisible } = useInView({ threshold: 0.2 });
  const [data, setData] = useState<number[]>([]);

  useEffect(() => {
    if (isBottomVisible) {
      loadMore();
    }
  }, [isBottomVisible]);

  const loadMore = () => {
    setTimeout(() => {
      setData((prev): any => {
        if (prev.length > 0) {
          return [...prev, ...Array.from({ length: pageSize }).fill(1)];
        }
        return Array.from({ length: pageSize }).fill(1);
      });
    }, 300);
  };

  const lastLoadedIndex = data.length - pageSize;

  return (
    <div className="px-2 md:px-4 2xl:px-8">
      <Title text="发现更多" />
      <div className="grid min-h-12 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {data.map((item, index) => {
          const isNew = index + 1 > lastLoadedIndex;
          return (
            <motion.div
              key={index}
              variants={generateItemVariants(index)}
              initial="initial"
              animate={isNew ? "visible" : false}
            >
              <PostCard
                title="关于星露谷物语的设计理念"
                text="星露谷是一款农场游戏，其温馨的内容和画面表现，以及活灵活现的NPC获得了海内外玩家的一致好评。"
                datetime={Date.now()}
              />
            </motion.div>
          );
        })}
      </div>

      <div ref={bottomRef} className="h-2" />
    </div>
  );
}
