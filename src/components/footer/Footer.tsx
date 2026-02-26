import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate("/contactus");
  };

  const handlePrivacyPolicy = () => {
    navigate("/privacy-policy");
  };

  const handleTermsandConditions = () => {
    navigate("/terms-conditions");
  };

  const handleRefund = () => {
    navigate("/refund-policy");
  };

  const handleAboutUs = () => {
    navigate("/about-us");
  };

  return (
    <footer className="bg-gray-900 text-slate-100 mt-16 py-6">
      <div className="container mx-auto">
        {/* Privacy Policy and Terms & Conditions */}
        <div className="mt-3 text-center space-x-4">
          <button
            className="text-white hover:backdrop cursor-pointer"
            onClick={handleContactUs}
          >
            Contact Us
          </button>
          <button
            className="text-white hover:backdrop cursor-pointer"
            onClick={handlePrivacyPolicy}
          >
            Privacy Policy
          </button>
          <button
            className="text-white hover:backdrop cursor-pointer"
            onClick={handleTermsandConditions}
          >
            Terms & Conditions
          </button>
          <button
            className="text-white hover:backdrop cursor-pointer"
            onClick={handleRefund}
          >
            Refund Policy
          </button>
          <button
            className="text-white hover:backdrop cursor-pointer"
            onClick={handleAboutUs}
          >
            About Us
          </button>
        </div>

        {/* Line Separator */}
        <div className="my-6 border-t border-gray-800"></div>

        {/* Copyright Section */}
        <div className="text-center text-white flex items-center justify-center">
          <AiOutlineCopyrightCircle className="mr-2" size={16} />
          <span>Copyright 2026, All rights reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
