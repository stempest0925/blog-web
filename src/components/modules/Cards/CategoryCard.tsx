export default function CategoryCard() {
  return (
    <div className="bg-surface flex flex-col space-y-2 rounded-lg p-4">
      <div className="aspect-square w-12 rounded-xl bg-gray-300"></div>
      <h3 className="text-xl font-bold">编程</h3>
      <p className="text-sm">包含了计算机的相关的技术，从计算机原理到数据库、网页、APP等</p>
      {/* 图标暂时用文字替代 */}
      <div className="self-end">→</div>
    </div>
  );
}
