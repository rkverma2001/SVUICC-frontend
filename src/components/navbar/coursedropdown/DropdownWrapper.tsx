import React, { useState } from "react";
import courseData from "./data";
import CategoryList from "./CategoryList";
import SubCategoryList from "./SubCategoryList";
import CourseList from "./CourseList";
import { DropdownCategory, DropdownSubCategory } from "./dropdown.types";



const DropdownWrapper: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<DropdownCategory>(courseData[0]);

  const [activeSubCategory, setActiveSubCategory] =
    useState<DropdownSubCategory>(courseData[0].subCategories[0]);

  const handleCategoryHover = (category: DropdownCategory) => {
    setActiveCategory(category);
    setActiveSubCategory(category.subCategories[0]);
  };

  return (
    <div className="absolute left-0 right-0 ml-[-600px] top-full w-[900px] bg-white shadow-lg rounded-md border border-gray-200 flex z-50">
      
      {/* Column 1 */}
      <CategoryList
        categories={courseData}
        activeCategory={activeCategory}
        onHover={handleCategoryHover}
      />

      {/* Column 2 */}
      <SubCategoryList
        subCategories={activeCategory.subCategories}
        activeSubCategory={activeSubCategory}
        onHover={setActiveSubCategory}
      />

      {/* Column 3 */}
      <CourseList courses={activeSubCategory.courses} />
    </div>
  );
};

export default DropdownWrapper;