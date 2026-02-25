import React from "react";
import { Link } from "react-router-dom";
import { Course } from "../../types";

interface Props {
  courses: Course[];
}

const CourseList: React.FC<Props> = ({ courses }) => {
  return (
    <div className="w-1/3 p-4 overflow-y-auto max-h-96">
      {courses.map((course) => (
        <Link
          key={course.slug}
          to={course.slug}
          className="block px-2 py-2 hover:text-blue-600 hover:underline"
        >
          {course.name}
        </Link>
      ))}
    </div>
  );
};

export default CourseList;