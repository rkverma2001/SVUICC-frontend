import { useEffect, useState } from "react";
import Footer from "@/components/footer/Footer";
import ExamVoucher from "./ExamVoucher";
import Courseware from "./Courseware";
import SneekPeek from "./Abrocat/SneekPeek.tsx";
import CertificateSection from "./Abrocat/CertificateSection";
import WhySection from "./Abrocat/WhySection";
import WhatsIncluded from "./Abrocat/WhatsIncluded";
import ProductTab from "./Abrocat/ProductTab";
import axios from "@/services/api";
import { useParams } from "react-router-dom";

type TabName = "Certification" | "E-Learning Course";

type TabItem = {
  title: string;
  subtitle: string;
  image: string;
  price: number;
};

type CurriculumItem = {
  question: string;
  answers: string[];
};

type Certificate = {
  certifier: string;
  certifierColor: string;
  certificateImg: string;
  bannerImg: string;
};

type Course = {
  courseCode: string;
  courseName: string;
  tabData: Record<string, TabItem>;
  curriculum: CurriculumItem[];
  banner: { videoUrl: string };
  video: { videoUrl: string };
  highlights: string[];
  certificate: Certificate;
  syllabus: string;
  practiceTestLink: string;
  coursewareLink: string;
};

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [activeTab, setActiveTab] = useState<TabName>("Certification");

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`/course/${courseId}`);
        setCourse(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load course data.");
      } finally {
        setLoading(false);
      }
    };

    if (courseId) {
      fetchCourse();
    }
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [courseId]);

  const tabs = ["Certification", "E-Learning Course"];

  if (loading) return <p className="text-center mt-20">Loading course...</p>;
  if (error) return <p className="text-center text-red-500 mt-20">{error}</p>;
  if (!course) return <p className="text-center mt-20">No course found.</p>;

  return (
    <div className="">
      <div className="w-full border-b border-gray-200 mt-30 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto flex justify-center">
          <div className="flex w-full sm:w-auto justify-between sm:justify-center gap-6 sm:gap-16">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as TabName)}
                className={`relative flex-1 sm:flex-none text-xl text-center text-base cursor-pointer sm:text-lg pb-3 transition-all duration-200 ${
                  activeTab === tab
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-blue-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ProductTab tabData={course.tabData} activeTab={activeTab} />
      <WhatsIncluded activeTab={activeTab} />
      <div className="w-full relative mb-[-25px] mt-[10px]">
        <img
          src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67177e886c499c85bf94cc36_top%20curv.svg"
          alt="Curved Top Border"
          className="w-full h-auto block"
        />
      </div>
      <WhySection activeTab={activeTab} />
      <div className="w-full relative mt-[80px]">
        <img
          src="https://cdn.prod.website-files.com/62e8d2ea218fb7676b6892a6/67177e883ea6a4d457e262f3_bottom%20curve.svg"
          alt="Curved Top Border"
          className="w-full h-auto block"
        />
      </div>
      {activeTab === "Certification" && (
        <ExamVoucher
          highlights={course.highlights}
          videoSrc={course.video.videoUrl}
        />
      )}
      {activeTab === "E-Learning Course" && (
        <Courseware curriculumData={course.curriculum} />
      )}

      {activeTab === "Certification" && (
        <CertificateSection
          certifier={course.certificate.certifier}
          certifierColor={course.certificate.certifierColor}
          certificateImg={course.certificate.certificateImg}
          bannerImg={course.certificate.bannerImg}
        />
      )}

      {activeTab === "E-Learning Course" && (
        <SneekPeek videoUrl={course.banner.videoUrl} />
      )}

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default CoursePage;
