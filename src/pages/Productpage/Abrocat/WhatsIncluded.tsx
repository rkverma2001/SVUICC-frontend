import React from "react";
import { Card } from "@/components/ui/card";

interface WhatsIncludedProps {
    activeTab: string;
}

const WhatsIncluded: React.FC<WhatsIncludedProps> = ({ activeTab }) => {
    return (
        <div className="flex flex-col items-center justify-center mt-[-45px]">
        <div className="text-3xl mt-[25px] font-semibold text-[#17345b]">
          What's Included
          <img
            src="/Icon/line.svg"
            alt="line"
            className="pl-[100px] w-56 mt-[-5px]"
          />
        </div>
        <div className="flex items-center justify-center mt-10">
          {activeTab === "Certification" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 place-items-center">
              <Card className="w-full max-w-xl p-5 transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
                <div className="flex items-center gap-6 w-full">
                  <div className="w-1/5">
                    <img
                      src="/Icon/Certification_Card_Icon_Green.svg"
                      alt="Learning Icon"
                      className="w-full h-20 pt-[15px] object-contain"
                    />
                  </div>
                  <div className="w-4/5 flex flex-col items-start">
                    <h2 className="text-lg text-gray-800">
                      Official Certification
                    </h2>
                  </div>
                </div>
              </Card>
              <Card className="w-full max-w-xl p-[30px] transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
                <div className="flex items-center gap-6 w-full">
                  <div className="w-1/5">
                    <img
                      src="/Icon/proctor.svg"
                      alt="Learning Icon"
                      className="w-full h-15 object-contain"
                    />
                  </div>
                  <div className="w-4/5 flex flex-col items-start">
                    <h2 className="text-lg text-gray-800">Remote Proctoring</h2>
                  </div>
                </div>
              </Card>
            </div>
          )}
          {activeTab === "E-Learning Course" && (
            <div>
              <Card className="w-full max-w-xl p-5 transition-all duration-300 ease-in-out hover:scale-105 shadow-[0_0_10px_rgba(0,0,0,0.2)] items-center">
                <div className="flex items-center gap-2 w-full">
                  <div className="w-1/5">
                    <img
                      src="/Icon/Learning_Course_Card_Icon_green.svg"
                      alt="Learning Icon"
                      className="w-full h-14 object-contain"
                    />
                  </div>
                  <div className="w-4/5 flex flex-col items-start">
                    <h2 className="text-lg text-gray-800">
                      Self-Paced E-Learning Course
                    </h2>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    );
};

export default WhatsIncluded;
