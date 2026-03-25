import React from "react";
import { MdEmail } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import Footer from "../components/footer/Footer";

const ContactUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen mt-28">
      <div className="flex grow items-center justify-center px-4 sm:px-8">
        <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 w-full max-w-6xl mx-auto border border-[#2d79c5] rounded-lg shadow-lg">
          <h1 className="text-2xl sm:text-4xl font-bold mb-16 text-center text-[#2d79c5]">
            Contact Us
          </h1>

          {/* Side-by-side layout */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Contact Info */}
            <div className="flex-1 flex flex-col justify-center items-center">
              {/* Email Section */}
              <div className="flex items-center text-base sm:text-lg mb-4">
                <MdEmail className="text-xl sm:text-2xl mr-2 text-[#2d79c5]" />
                <span className="font-medium">Email:</span>
              </div>

              <div className="flex flex-col gap-4 text-gray-700 text-base sm:text-lg font-medium mb-6 text-center">

  {/* Info Email */}
  <p>
    For any queries related to courses and certifications,
    <br />
    students can reach out to{" "}
    <a
      href="mailto:info@svuicc.com"
      className="text-[#2d79c5] hover:underline font-semibold"
    >
      info@svuicc.com
    </a>
  </p>

  {/* Support Email */}
  <p>
    For support after voucher redemption,
    <br />
    students can contact{" "}
    <a
      href="mailto:support@svuicc.com"
      className="text-[#2d79c5] hover:underline font-semibold"
    >
      support@svuicc.com
    </a>
  </p>

</div>

              {/* Address */}
              <div className="flex items-center text-base sm:text-lg mb-2">
                <FiMapPin className="text-xl sm:text-2xl mr-2 text-[#2d79c5]" />
                <span className="font-medium">Address:</span>
              </div>

              <p className="text-[#2d79c5] text-base sm:text-lg font-semibold mb-6 text-center max-w-sm">
                Innovation Incubation Centre, S.V. University, SVU Post, Tirupati, Andhra Pradesh
                517502
              </p>

              {/* Message */}
              <p className="text-center text-gray-700 text-sm sm:text-base max-w-md">
                We are here to assist you with any questions, concerns, or
                support inquiries. Please feel free to reach out to us, and we
                will get back to you as soon as possible.
              </p>
            </div>

            {/* Map */}
            <div className="flex-1">
              <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden shadow-md">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3877.4300984227966!2d79.39679337508804!3d13.63158128674787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDM3JzUzLjciTiA3OcKwMjMnNTcuNyJF!5e0!3m2!1sen!2sin!4v1774417996105!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  className="border-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactUs;
