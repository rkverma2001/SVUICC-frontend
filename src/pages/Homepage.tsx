import Certifications from "@/components/courses/Certification";
import Footer from "@/components/footer/Footer";
import HeroSection from "@/components/hero/HeroSection";
import LogoSlider from "@/components/hero/LogoSlider";

const Homepage = () => {

  return (
    <div>
      <div className="mt-10">
        <HeroSection />
        <div className="mt-10 mb-15">
          <LogoSlider />
        </div>
        <div className="mt-10 mb-15">
          <div className="flex items-center justify-center mb-10 mt-10">
            <h1
              className="mx-4 text-2xl  font-light text-[#0a033c] text-center"
              style={{ fontFamily: '"Source Sans 3", sans-serif' }}
            >
              Popular Courses & Certifications
            </h1>

          </div>
        </div>
        <div className="ml-10 mr-10 mb-10">
          <Certifications />
        </div>

        <div className="mt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
