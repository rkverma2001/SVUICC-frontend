import { useEffect, useRef, useState } from "react";
import Faqs from "./Faqs";

type PracticeVoucherProps = {
  videoSrc: string;
};

const PracticeVoucher = ({ videoSrc }: PracticeVoucherProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
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
                Get Exam-Ready with Confidence
                <img
                  src="/Icon/line.svg"
                  alt="line"
                  className=" w-56 ml-[64px] mt-[-5px]"
                />
              </h2>
              <p className="text-xl font-light text-justify">
                Before you take your official
                <span className="font-medium">
                  {" "}
                  Adobe Certified Professional{" "}
                </span>
                exam, prepare yourself with the{" "}
                <span className="font-medium">
                  CertPREP Practice Tests powered by GMetrix
                </span>{" "}
                — the same platform trusted worldwide for certification
                readiness.
              </p>
              <h2 className="mt-10 text-3xl font-medium">
                Two Ways to Practice
              </h2>
              <p className="mt-2 text-xl font-light">
                CertPREP offers{" "}
                <span className="font-medium">two powerful modes </span>so you
                can prepare your way:
              </p>
              <h3 className="text-2xl font-medium mt-10">Testing Mode</h3>
              <img
                src="/Icon/circle.svg"
                alt=""
                className="mt-[-40px] w-50 ml-[-30px]"
              />
              <div className="flex mt-2">
                <div className="flex flex-col w-6 h-6 relative justify-between mt-[3px]">
                  <img src="/Icon/Tick_icon.svg" alt="" />
                </div>
                <p className="text-xl font-light ml-2">
                  Simulates the real certification exam
                </p>
              </div>
              <div className="flex mt-3">
                <div className="flex flex-col w-6 h-6 relative justify-between mt-[3px]">
                  <img src="/Icon/Tick_icon.svg" alt="" />
                </div>
                <p className="text-xl ml-2 font-light">
                  Timed questions with real-world scenarios
                </p>
              </div>
              <div className="flex mt-3">
                <div className="flex flex-col w-6 h-6 relative justify-between mt-[3px]">
                  <img src="/Icon/Tick_icon.svg" alt="" />
                </div>
                <p className="text-xl ml-2 font-light">
                  Perfect for evaluating your readiness
                </p>
              </div>
              <h3 className="text-2xl font-medium mt-10">Training Mode</h3>
              <img
                src="/Icon/circle.svg"
                alt=""
                className="mt-[-40px] w-50 ml-[-30px]"
              />
              <div className="flex mt-2">
                <div className="flex flex-col w-6 h-6 relative justify-between mt-[3px]">
                  <img src="/Icon/Tick_icon.svg" alt="" />
                </div>
                <p className="text-xl ml-2 font-light">
                  Learn at your own pace
                </p>
              </div>
              <div className="flex mt-3">
                <div className="flex flex-col w-6 h-6 relative justify-between mt-[3px]">
                  <img src="/Icon/Tick_icon.svg" alt="" />
                </div>
                <p className="text-xl ml-2 font-light">
                  Step-by-step guidance and instant feedback
                </p>
              </div>
              <div className="flex mt-3">
                <div className="flex flex-col w-6 h-6 relative justify-between mt-[3px]">
                  <img src="/Icon/Tick_icon.svg" alt="" />
                </div>
                <p className="text-xl ml-2 font-light">
                  Great for building skills while preparing
                </p>
              </div>
              <div className="flex mt-18 text-4xl font-medium">
                Why buy from us?
              </div>
              <div className="mt-12 flex flex-wrap gap-7 items-center space-y-4">
                <div
                  ref={counterRef}
                  className="border-1 rounded-2xl p-2 pl-5 pt-5 h-[165px] w-[320px] bg-[#faf5ed]"
                >
                  <h1
                    className={`text-5xl font-semibold ${
                      isComplete ? "text-[#0b8642]" : "text-black"
                    }`}
                  >
                    {count.toLocaleString()}+
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Certified Learners <br /> and Growing Strong
                  </p>
                </div>
                <div className="border-1 rounded-2xl p-2 pl-5 h-[165px] w-[320px] bg-[#faf5ed] cursor-pointer">
                  <img
                    src="/Certiportblacklogo.svg"
                    alt="Exam Voucher"
                    className="pl-6 ml-1 pt-2 w-[240px] mb-4 transition duration-300 ease-in-out"
                  />

                  <p className="text-xl mt-[-6px] ml-[28px] font-light">
                    Authorized Resellers for
                    <br /> India
                  </p>
                </div>
                <div className="border-1 rounded-2xl p-2 pl-5 pt-5 h-[165px] w-[320px] bg-[#faf5ed] mt-[-19px]">
                  <h1 className="text-4xl font-semibold text-[#0b8642]">
                    Instant Delivery
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Quick Voucher Access,
                    <br /> Flexible Exams
                  </p>
                </div>
                <div className="border-1 rounded-2xl p-2 pl-5 pt-5 h-[165px] w-[320px] bg-[#faf5ed] mt-[-35px]">
                  <h1 className="text-4xl font-semibold text-[#0b8642]">
                    Expert Support
                  </h1>
                  <p className="text-xl mt-2 font-light">
                    Help at Every Step,
                    <br /> Start to Finish
                  </p>
                  <img
                    src="/Icon/support.svg"
                    alt="Support Icon"
                    className="h-20 ml-[241px] mt-[-41px]"
                  />
                </div>
              </div>
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
                  question="I have purchased the practice test voucher. What's next?"
                  answer="You'll receive an email within 24 hours from our support team with your practice test voucher details and instructions on how to access the test."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon2.svg"
                  question="Are the questions the same as the real exam?"
                  answer="While not identical, they closely match the format, style, and difficulty of the actual certification exam."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon3.svg"
                  question="How many attempts are there in the practice test?"
                  answer="There are upto 5 attempts in the practice test."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon7.svg"
                  question="What is the validity period of the practice test voucher?"
                  answer="You must redeem your practice test voucher within 3 months from the date of purchase."
                />
              </div>
            </div>

            {/* Right Section (Video) */}
            <div className="w-full lg:w-2/5 relative md:block">
              <div className="lg:sticky lg:top-30">
                <div className="bg-white overflow-hidden shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-3xl card">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    loop
                    className="w-full max-w-[500px] rounded-xl"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeVoucher;
