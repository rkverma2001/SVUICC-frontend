import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DropdownCategory } from "./dropdown.types";
import courseData from "./data";

const MobileCourseDropdown: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [activeSubCategory, setActiveSubCategory] = useState<number | null>(null);

  return (
    <div className="p-4 space-y-3">

      {courseData.map((category: DropdownCategory, catIndex: number) => (
        <div key={catIndex} className="border rounded-md">

          {/* Category */}
          <button
            onClick={() =>
              setActiveCategory(activeCategory === catIndex ? null : catIndex)
            }
            className="w-full text-left px-4 py-3 font-semibold bg-gray-100"
          >
            {category.categoryName}
          </button>

          {/* Sub Categories */}
          {activeCategory === catIndex && (
            <div className="pl-4 py-2 space-y-2">

              {category.subCategories.map((sub, subIndex) => (
                <div key={subIndex}>

                  <button
                    onClick={() =>
                      setActiveSubCategory(
                        activeSubCategory === subIndex ? null : subIndex
                      )
                    }
                    className="w-full text-left font-medium text-gray-700"
                  >
                    {sub.subCategoryName}
                  </button>

                  {/* Courses */}
                  {activeSubCategory === subIndex && (
                    <div className="pl-4 mt-2 space-y-1">
                      {sub.courses.map((course, courseIndex) => (
                        <Link
                          key={courseIndex}
                          to={course.slug}
                          className="block text-sm text-gray-600 hover:text-[#008641]"
                        >
                          {course.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
          )}
        </div>
      ))}

    </div>
  );
};

export default MobileCourseDropdown;