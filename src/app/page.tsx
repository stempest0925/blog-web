import PostCard from "@/components/modular/Cards/PostCard";

export default function HomePage() {
  return (
    <div className="px-2 md:px-4 2xl:px-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <PostCard
            key={item}
            title="关于星露谷物语的设计理念"
            text="星露谷是一款农场游戏，其温馨的内容和画面表现，以及活灵活现的NPC获得了海内外玩家的一致好评。"
            datetime={Date.now()}
          />
        ))}
      </div>
    </div>
  );
}
