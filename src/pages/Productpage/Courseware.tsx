import React, { useEffect, useRef, useState } from "react";
import Faqs from "./Faqs";
import Curriculum from "./Curriculum";

interface CurriculumItem {
  question: string;
  answers: string[];
}

interface CoursewareProps {
  curriculumData: CurriculumItem[];
}

const Courseware: React.FC<CoursewareProps> = ({curriculumData}) => {
  const counterRef = useRef<HTMLDivElement>(null);

  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [startCounting, setStartCounting] = useState(false);
  const end = 700000;
  const duration = 10000; // total animation time in ms
  const frameRate = 1000 / 60; // 60 FPS
  const totalFrames = Math.round(duration / frameRate);
  const frame = useRef(0);


  useEffect(() => {
    if (!startCounting) return;
    const counter = setInterval(() => {
      frame.current += 1;
      const progress = frame.current / totalFrames;
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (frame.current >= totalFrames) {
        clearInterval(counter);
        setCount(end);
        setIsComplete(true);
      }
    }, frameRate);

    return () => clearInterval(counter);
  }, [startCounting]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCounting(true);
          observer.disconnect(); // Run only once
        }
      },
      { threshold: 0.3 } // Start when 30% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) observer.unobserve(counterRef.current);
    };
  }, []);

  return (
    <div className="mt-[100px]">
      <section className="w-full bg-white py-16">
        <div className="w-[90%] md:w-[80%] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Section */}

            <div className="w-full lg:w-3/5">
              <h2 className="text-[#002726] text-4xl md:text-4xl font-medium mb-8">
                Course Curriculum
                <img
                  src="/Icon/line.svg"
                  alt="line"
                  className=" w-45 mt-[-5px] ml-[125px]"
                />
              </h2>
              {curriculumData.map((module, index) => (
                <div key={index} className="ml-[-13px] mt-[-10px]">
                  <Curriculum
                    question={module.question}
                    answers={module.answers}
                  />
                </div>
              ))}
              <h2 className="text-[#002726] text-4xl md:text-4xl font-medium mb-8 mt-18">
                Looking for some answers ?
                <img
                  src="/Icon/line.svg"
                  alt="line"
                  className=" w-56 mt-[-5px] ml-[190px]"
                />
              </h2>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon1.svg"
                  question="I have redeemed the courseware. What's next?"
                  answer="You'll receive an email within 24 hours from our support team with your courseware voucher details and instructions on how to access it."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon2.svg"
                  question="How long will I have access to the course?"
                  answer="The voucher and the course will expire within 3 months from the date of purchase."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon2.svg"
                  question="Are these courses self-paced or live?"
                  answer="They are self-paced e-learning courses, so you can start anytime and learn at your own speed. Some packages may include live sessions if specified."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon3.svg"
                  question="Will I get a certificate after completing the course?"
                  answer={`Yes, You'll receive a course completion certificate from the provider. <br/>
Note: This is not the official Adobe certification. To earn that, you must separately pass the official exam.`}
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon7.svg"
                  question="Can I share my voucher with someone else?"
                  answer="No. Vouchers and logins are for single use only. Sharing may lead to course deactivation."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon7.svg"
                  question="How are these courses different from free tutorials online?"
                  answer="They are structured, exam-focused, and created by certified experts, with step-by-step learning and practice resources—unlike unstructured free tutorials."
                />
              </div>
            </div>

            {/* Right Section (Video) */}
            <div className="w-full lg:w-2/5 relative md:block">
              <div className="lg:sticky lg:top-30">
                <div className="bg-white p-4 overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl card">
                  <img
                    src="/Icon/lkcertificate.svg"
                    className="w-full max-w-[500px] rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courseware;
