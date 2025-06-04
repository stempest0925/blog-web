import Title from "@/components/base/Title";
import CategoryCard from "@/components/modules/Cards/CategoryCard";

export default function CategoriesPage() {
  return (
    <div className="px-2 md:px-4 2xl:px-8">
      <Title text="类别" />
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 10 }).map((item, index) => (
          <CategoryCard key={index}></CategoryCard>
        ))}
      </div>
    </div>
  );
}
