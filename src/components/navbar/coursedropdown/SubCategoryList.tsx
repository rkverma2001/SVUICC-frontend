import React from "react";
import { DropdownSubCategory } from "./dropdown.types";

interface Props {
  subCategories: DropdownSubCategory[];
  activeSubCategory: DropdownSubCategory;
  onHover: (sub: DropdownSubCategory) => void;
}

const SubCategoryList: React.FC<Props> = ({
  subCategories,
  activeSubCategory,
  onHover,
}) => {
  return (
    <div className="w-1/3 border-r overflow-y-auto max-h-96">
      {subCategories.map((sub) => (
        <div
          key={sub.subCategoryName}
          onMouseEnter={() => onHover(sub)}
          className={`px-4 py-3 cursor-pointer hover:bg-gray-100 ${
            activeSubCategory.subCategoryName === sub.subCategoryName
              ? "bg-gray-100 font-semibold"
              : ""
          }`}
        >
          {sub.subCategoryName}
        </div>
      ))}
    </div>
  );
};

export default SubCategoryList;