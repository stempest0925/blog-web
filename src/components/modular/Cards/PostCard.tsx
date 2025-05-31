"use client";

import Image from "next/image";
import { formatMonth, formatDay } from "@/helpers/date";

type IProps = {
  title: string;
  text: string;
  datetime: Date | number;
};

export default function PostCard({ title, text, datetime }: IProps) {
  // 时间处理
  const date = datetime instanceof Date ? datetime : new Date(datetime);
  const monthAbbr = formatMonth(date.getMonth() + 1);
  const day = formatDay(date.getDate());

  return (
    <div className="bg-surface rounded-lg p-2 shadow-xs">
      <div className="relative aspect-[5/3] w-full overflow-hidden rounded-lg bg-gray-300">
        <Image src="/post-cover.jpg" alt="" fill priority objectFit="cover" />
        <time className="absolute top-2 right-2 flex w-10 flex-col items-center justify-center rounded-md bg-black/80 py-1.5">
          <span className="text-xs text-white/60">{monthAbbr}</span>
          <h4 className="text-base leading-4 font-black text-white">{day}</h4>
        </time>
      </div>
      <div className="px-2 py-3">
        <h3 className="mb-1 text-lg font-bold">{title}</h3>
        <p className="text-text-secondary line-clamp-2 text-sm">{text}</p>
      </div>
    </div>
  );
}
