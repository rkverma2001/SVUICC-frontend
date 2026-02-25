import React from "react";

interface CertificateSectionProps {
  certifier?: string; // e.g., "Adobe"
  certifierColor?: string; // e.g., "#ed2224"
  certificateImg?: string; // e.g., "/AfterEffectsCertificate.svg"
  bannerImg?: string; // e.g., "/Flaunt.svg"
}

const CertificateSection: React.FC<CertificateSectionProps> = ({
  certifier,
  certifierColor = "#ed2224",
  certificateImg,
  bannerImg,
}) => {
  // Show component only if all data is provided
  if (!certifier || !certificateImg || !bannerImg) return null;

  return (
    <div className="flex items-center justify-between mt-[80px]">
      {/* Left Side: Text + Certificate */}
      <div>
        <h1 className="text-2xl ml-[130px] mt-[80px] font-light">
          You will be officially certified by{" "}
          <span className="font-bold" style={{ color: certifierColor }}>
            {certifier}
          </span>
        </h1>

        <img
          src={certificateImg}
          alt={`${certifier} Certificate`}
          className="w-[600px] mt-10 ml-[120px]"
        />
      </div>

      {/* Right Side: Image */}
      <div className="relative h-88 mt-[-10px] mr-[140px]">
        <img src={bannerImg} alt="Certification Banner" />
      </div>
    </div>
  );
};

export default CertificateSection;
