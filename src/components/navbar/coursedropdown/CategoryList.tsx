import React from "react";
import { DropdownCategory } from "./dropdown.types";

interface Props {
  categories: DropdownCategory[];
  activeCategory: DropdownCategory;
  onHover: (category: DropdownCategory) => void;
}

const CategoryList: React.FC<Props> = ({
  categories,
  activeCategory,
  onHover,
}) => {
  return (
    <div className="w-1/3 border-r overflow-y-auto max-h-96">
      {categories.map((category) => (
        <div
          key={category.categoryName}
          onMouseEnter={() => onHover(category)}
          className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
            activeCategory.categoryName === category.categoryName
              ? "bg-gray-100 font-semibold"
              : ""
          }`}
        >
          {category.categoryName}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;