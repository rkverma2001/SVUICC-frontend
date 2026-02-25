import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Card from "../../components/courses/Card";
import StepsToClaim from "../../components/courses/StepsToClaim";
import Syllabus from "./Syllabus";
import courseDetailsData from "../../data/allPagesData.json";

/* =========================
   Types
========================= */

interface CourseData {
  name: string;
  mainName: string;
  price: number;
  banner: string;
  mainImg: string;
  syllabus: any; // Replace with proper syllabus type if available
}

/* =========================
   Component
========================= */

const MinorDegree: React.FC = () => {

 const { courseId } = useParams<{ courseId: string }>();

const courseDetailsDataTyped: Record<string, CourseData> =
  courseDetailsData;

const courseData = courseId
  ? courseDetailsDataTyped[courseId]
  : undefined;

  const subHeading: string =
    "To be claimed upon the completion of all content";


  const tallyCertificateCourses = [
  "tallyessentialslevel1",
  "tallyessentialslevel2",
  "tallyessentialslevel3",
  "tallyessentialscomprehensive",
  "gstusingtallyprime",
  "tallyprofessional"
];

const certificateImage = tallyCertificateCourses.includes(courseId || "")
  ? "https://www.etrainindia.com/wp-content/uploads/2023/08/tallyEL1.jpg"
  : "https://etrain.blr1.cdn.digitaloceanspaces.com/dstibm/IBMsample.png";

const isTallyCourse = tallyCertificateCourses.includes(courseId || "");

  /* =========================
     Fallback UI
  ========================= */


  if (!courseData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold text-gray-700">
          Course not found. Please check the URL.
        </p>
      </div>
    );
  }

  /* =========================
     Main UI
  ========================= */

  return (
    <div className="">
        {/* 🎯 HERO SECTION */}
        <section
          className="relative bg-cover bg-center text-white w-full h-96"
          style={{
            backgroundImage: `url(${courseData.banner})`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative max-w-6xl mx-auto px-6 py-20 text-center items-center justify-center mt-15 gap-2">
            <h1 className="text-5xl font-semibold mb-2 mt-17">
              {courseData.name}
            </h1>
          </div>
        </section>

        {/* Course Description */}
        <div className="flex flex-col lg:flex-row items-start justify-between mt-11 p-6 lg:p-12">
          {/* Left Section */}
          <div className="lg:w-[57.5%]">
            <Syllabus syllabus={courseData.syllabus} />
          </div>

          {/* Right Section */}
          <div className="mt-8 lg:mt-0 lg:w-1/3 lg:sticky top-20 self-start">
            <Card
              title={courseData.mainName}
              imageSrc={courseData.mainImg}
            />
          </div>
        </div>

        {/* Sample Certificate */}

        <div className="max-w-3xl mx-auto my-10 p-6">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
            Sample Certificate
          </h2>

          <img
            src={certificateImage}
            alt="Sample Certificate"
            loading="lazy"
            className="w-full h-auto mt-20 rounded-lg border border-gray-300"
          />
        </div>

        {/* Steps To Claim */}
        {!isTallyCourse && (
  <div className="mt-28">
    <StepsToClaim
      heading={`${courseData.name} Certificate`}
      subHeading={subHeading}
    />
  </div>
)}
        <Footer />
      </div>

  );
};

export default MinorDegree;