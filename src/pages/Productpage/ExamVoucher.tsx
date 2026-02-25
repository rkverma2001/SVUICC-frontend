import { useEffect, useRef, useState } from "react";
import Faqs from "./Faqs";

type ExamVoucherProps = {
  highlights: string[];
  videoSrc: string;
};

const ExamVoucher = ({ highlights, videoSrc }: ExamVoucherProps) => {
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
              <h2 className="text-[#002726] text-4xl md:text-4xl font-medium mb-2">
                Skills Covered in the Exam
                <img
                  src="/Icon/line.svg"
                  alt="line"
                  className=" w-56 mt-[-5px]"
                />
              </h2>
              {highlights.map((item, index) => (
                <div key={index} className="flex mt-6">
                  <div className="flex flex-col w-8 h-8 relative justify-between">
                    <img src="/Icon/Tick_icon.svg" alt="tick icon" />
                  </div>
                  <p className="text-xl ml-2">{item}</p>
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
                  question="I have redeemed the code. What's next?"
                  answer="You'll receive an email within 24 hours from our support team asking for your preferred exam date and time. Just reply with your choice, and your exam will be scheduled accordingly."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon2.svg"
                  question="How will my exam be conducted?"
                  answer="Your exam will be conducted online. You can take it from your home, office, college, or school — all you need is a computer with the required software and a stable internet connection."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon3.svg"
                  question="What are the available slots and days for the exam?"
                  answer="Exam slots are available from Monday to Saturday, between 11:00 AM and 5:00 PM. You can choose a time that best fits your schedule while booking."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon4.svg"
                  question="What are the passing marks for the exam?"
                  answer="You need to score 700 out of 1000 to pass the exam and receive your certificate."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon5.svg"
                  question="When will I receive my certificate?"
                  answer="Once you pass the exam, your certificate will be generated instantly. You can download it by logging into your account and going to the My Transcript section."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon6.svg"
                  question="Can I take the exam if I fail?"
                  answer="The exam voucher includes only one attempt. If you don't pass, you'll need to purchase a new voucher to retake the exam."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon7.svg"
                  question="What is the validity period of the exam voucher?"
                  answer="You must schedule and take the exam within 3 months from the date of purchase."
                />
              </div>
              <div className="ml-[-13px] mt-[-10px]">
                <Faqs
                  icon="/Icon/faqicon8.svg"
                  question="Can I reschedule or cancel my exam once booked?"
                  answer="Yes, you can — but you must inform us at least 24 hours in advance."
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

export default ExamVoucher;
