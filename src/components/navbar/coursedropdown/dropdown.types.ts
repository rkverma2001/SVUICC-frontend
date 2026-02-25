export interface DropdownCourse {
  name: string;
  slug: string;
}

export interface DropdownSubCategory {
  subCategoryName: string;
  courses: DropdownCourse[];
}

export interface DropdownCategory {
  categoryName: string;
  subCategories: DropdownSubCategory[];
}