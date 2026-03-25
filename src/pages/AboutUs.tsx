import React from "react";
import Footer from "../components/footer/Footer";

const AboutUs: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      {/* Main Content */}
      <div className="flex-grow flex items-start justify-center px-3 sm:px-6 md:px-10 lg:px-16 mt-24 sm:mt-28 lg:mt-32 mb-12 sm:mb-16">
        
        <div className="w-full max-w-7xl bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-5 sm:p-8 md:p-10 lg:p-12">

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 text-gray-800 leading-snug">
            Sri Venkateswara University – Industry Certification Centre
          </h1>

          <p className="text-center text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Start-Up Innovation & Incubation Centre (RUSA Phase II)
          </p>

          {/* Intro Section */}
          <section className="space-y-5 sm:space-y-6 text-gray-700 leading-relaxed text-sm sm:text-base">
            <p>
              Sri Venkateswara University, in collaboration with Etrain
              Education Pvt Ltd (EtrainIndia), has established the Industry
              Certification Centre under the Start-Up Innovation & Incubation
              Centre – RUSA Phase II to empower students with the most current,
              industry-relevant skills.
            </p>

            <p>
              Our mission is to bridge the gap between academic education and
              global industry standards by providing internationally recognized
              certifications directly on campus. Through this initiative,
              students of SV University can now upskill, get certified by
              leading global organizations, and enhance their employability and
              career readiness.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mt-10 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
              What We Offer
            </h2>

            <p className="mb-5 sm:mb-6 text-gray-700 text-sm sm:text-base">
              The Industry Certification Centre delivers structured learning and
              globally recognized certification programs, including:
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-2 gap-x-8 list-disc list-inside text-gray-700 text-sm sm:text-base">
              <li>Microsoft Office Specialist (MOS)</li>
              <li>Microsoft Certified Educator (MCE)</li>
              <li>Microsoft Certified Fundamentals (MCF)</li>
              <li>Adobe Certified Professional (ACP)</li>
              <li>Autodesk Certified User (ACU)</li>
              <li>Apple Inc. – Swift Certification</li>
              <li>Project Management Institute – PMI Project Management Ready Certification</li>
              <li>Cisco – Cisco Certified Support Technician (CCST)</li>
              <li>Meta Platforms – Meta Certified Digital Marketing Associate</li>
              <li>IC3 – Digital Literacy Certification</li>
              <li>Intuit QuickBooks Certification</li>
              <li>Tally Solutions – Tally Certification</li>
              <li>IBM Education Programs</li>
            </ul>

            <p className="mt-5 sm:mt-6 text-gray-700 text-sm sm:text-base">
              These programs are carefully curated to align with current market
              needs across technology, business, finance, design, digital
              marketing, project management, and entrepreneurship.
            </p>
          </section>

          {/* Authorized Testing Centre */}
          <section className="mt-10 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
              Authorized Testing Centre
            </h2>

            <p className="text-gray-700 mb-5 sm:mb-6 text-sm sm:text-base">
              Sri Venkateswara University is now a Certiport Authorized Testing
              Centre, officially authorized to promote and conduct these global
              certification examinations on campus.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>
                Appear for international certification exams within the
                university premises
              </li>
              <li>Receive globally valued credentials</li>
              <li>
                Gain a competitive edge in higher education and employment
                opportunities
              </li>
            </ul>
          </section>

          {/* Commitment Section */}
          <section className="mt-10 sm:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">
              Our Commitment
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm sm:text-base">
              <li>
                Enhancing employability through globally benchmarked
                certifications
              </li>
              <li>
                Supporting innovation and entrepreneurial growth under RUSA
                Phase II
              </li>
              <li>Strengthening academia-industry partnerships</li>
              <li>
                Preparing students to excel in a competitive global workforce
              </li>
            </ul>

            <p className="mt-5 sm:mt-6 text-gray-700 font-medium text-sm sm:text-base">
              We believe in transforming students into skilled professionals,
              confident innovators, and future-ready leaders.
            </p>

            <p className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-[#008641]">
              Empowering Skills. Enabling Careers. Elevating Futures.
            </p>
          </section>

          {/* Contact Section */}
          <section className="mt-10 sm:mt-12 border-t pt-6 sm:pt-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
              Contact Us
            </h2>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-6 text-gray-700 text-sm sm:text-base">

  {/* Info Email */}
  <div className="max-w-sm">
    <p className="font-medium">
      For any queries related to courses and certifications:
    </p>
    <a
      href="mailto:info@svuicc.com"
      className="text-[#2d79c5] hover:underline"
    >
      info@svuicc.com
    </a>
  </div>

  {/* Support Email */}
  <div className="max-w-sm">
    <p className="font-medium">
      For support after voucher redemption:
    </p>
    <a
      href="mailto:support@svuicc.com"
      className="text-[#2d79c5] hover:underline"
    >
      support@svuicc.com
    </a>
  </div>

</div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;