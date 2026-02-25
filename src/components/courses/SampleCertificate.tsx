import React from "react";
import { CheckCircle2 } from "lucide-react";

const SampleCertificate: React.FC = () => {
  const features = [
    "Add them to your LinkedIn profile, resume, or CV to boost credibility.",
    "Earn globally recognized certifications from Adobe.",
    "Receive official digital badges from Credly to showcase your skills online.",
    "Enhance your career prospects during interviews, internships, or performance evaluations.",
  ];

  return (
    <div className="flex flex-col md:flex-row w-full h-auto md:h-[500px]">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className=" p-6 w-full max-w-lg h-fit">
          <h2 className="text-4xl ml-1 font-semibold text-gray-800 mb-12">
            Get Industry-Recognized Certifications & Digital Badge
          </h2>
          <ul className="space-y-4 text-gray-700 text-base">
            {features.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-6 h-6  rounded-full flex items-center justify-center mt-1 shrink-0">
                  <CheckCircle2 className="text-green-600 w-4 h-4" />
                </div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Section - Certificate Image */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6">
        <img
          src="\CoursesCategories\ACProCertificate.jpg"
          alt="ACPro Certificate"
          className="h-full object-contain max-h-[500px] rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default SampleCertificate;
