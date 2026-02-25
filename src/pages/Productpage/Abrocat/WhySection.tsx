import React from "react";

interface WhySectionProps {
  activeTab: string;
}

const WhySection: React.FC<WhySectionProps> = ({ activeTab }) => {
  return (
    <div className="px-4 sm:px-8 lg:px-20">

      {/* CERTIFICATION */}
      {activeTab === "Certification" && (
        <div className="flex flex-col lg:flex-row justify-between mt-16 lg:mt-20 gap-12">

          {/* LEFT TITLE */}
          <div className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-[#17345b] leading-tight lg:leading-[80px] text-center lg:text-left">
            Why <br /> This <br /> Certification
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-10 max-w-xl mx-auto lg:mx-0">

            <div className="flex items-start gap-5">
              <img src="/Icon/boost_Badge.svg" className="w-10 h-10" />
              <p className="text-lg sm:text-xl lg:text-2xl">
                Boost Career Prospects
              </p>
            </div>

            <div className="flex items-start gap-5">
              <img src="/Icon/recognized_badge.svg" className="w-8 h-8" />
              <p className="text-lg sm:text-xl lg:text-2xl">
                Recognized by Top Employers & Companies
              </p>
            </div>

            <div className="flex items-start gap-5">
              <img src="/Icon/verified_badge.svg" className="w-10 h-10" />
              <p className="text-lg sm:text-xl lg:text-2xl">
                Validates Your Skills Officially
              </p>
            </div>

          </div>
        </div>
      )}

      {/* E-LEARNING */}
      {activeTab === "E-Learning Course" && (
        <div className="flex flex-col lg:flex-row justify-between mt-16 lg:mt-20 gap-12">

          {/* LEFT TITLE */}
          <div className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-[#17345b] leading-tight lg:leading-[80px] text-center lg:text-left">
            Why <br /> Choose <br /> LearnKey
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-10 max-w-xl mx-auto lg:mx-0">

            <div className="flex items-start gap-5">
              <img src="/Icon/lk1.svg" className="w-10 h-10" />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  24/7 Online Access
                </p>
                <p className="font-light text-sm sm:text-base">
                  Learn Anytime, Anywhere with On-demand Training Videos
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <img src="/Icon/lk2.svg" className="w-10 h-10" />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Hands On Projects
                </p>
                <p className="font-light text-sm sm:text-base">
                  Apply Your Skills Through Real-World Exercises
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <img src="/Icon/lk3.svg" className="w-10 h-10" />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Seamless Experience
                </p>
                <p className="font-light text-sm sm:text-base">
                  Delivered on the GMetrix Platform Ensuring Smooth Access
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <img src="/Icon/recognized_badge.svg" className="w-10 h-10" />
              <div>
                <p className="text-lg sm:text-xl lg:text-2xl">
                  Industry Recognition
                </p>
                <p className="font-light text-sm sm:text-base">
                  Industry Approved Courseware
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default WhySection;