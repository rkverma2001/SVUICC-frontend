import React from "react";
import Footer from "../components/footer/Footer";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow flex items-start justify-center px-4 sm:px-8 mt-28 mb-16">
        <div className="w-full max-w-6xl bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6 sm:p-10">
          
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800">
            Privacy Policy
          </h1>

          <p className="text-center text-gray-600 mb-10">
            Effective Date: 01/02/2026
          </p>

          {/* Introduction */}
          <section className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Sri Venkateswara University – Industry Certification Centre
              (Start-Up Innovation & Incubation Centre – RUSA Phase II),
              operated in collaboration with Etrain Education Pvt Ltd
              (EtrainIndia), is committed to protecting your privacy and
              safeguarding your personal information.
            </p>

            <p>
              This Privacy Policy explains how we collect, use, store, and
              protect your information when you enroll in certification
              programs, access our services, or interact with our website.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              1. Information We Collect
            </h2>

            <p className="mb-4 text-gray-700">
              We may collect the following information:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile Number</li>
              <li>Course / Certification Selected</li>
              <li>University or Institutional Details</li>
              <li>Payment or Enrollment Information (if applicable)</li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              2. How We Use Your Information
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>To process certification registrations and enrollments</li>
              <li>
                To register candidates with authorized global certification
                bodies (e.g., Certiport, Microsoft, Adobe, Cisco, IBM, etc.)
              </li>
              <li>To communicate important updates and exam information</li>
              <li>To provide student support and technical assistance</li>
              <li>
                To improve academic-industry collaboration and reporting under
                RUSA Phase II initiatives
              </li>
            </ul>
          </section>

          {/* Sharing */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              3. Sharing of Information
            </h2>

            <p className="text-gray-700 mb-4">
              Your information may be shared with:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Authorized Certification Bodies (Microsoft, Adobe, Cisco,
                Apple, IBM, PMI, Meta, Autodesk, Tally, etc.)
              </li>
              <li>Certiport (as part of Authorized Testing Centre operations)</li>
              <li>
                Secure third-party service providers for hosting and data
                management
              </li>
            </ul>

            <p className="mt-6 text-gray-700">
              We do not sell or rent your personal data to third parties.
            </p>
          </section>

          {/* Data Security */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              4. Data Security
            </h2>

            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to
              protect your data against unauthorized access, alteration,
              disclosure, or destruction. Access to personal information is
              restricted to authorized personnel only.
            </p>
          </section>

          {/* Rights */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              5. Your Rights
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion (subject to legal requirements)</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </section>

          {/* Updates */}
          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
              6. Updates to This Policy
            </h2>

            <p className="text-gray-700">
              This Privacy Policy may be updated periodically to reflect
              operational or regulatory changes. Updates will be posted on this
              page with a revised effective date.
            </p>
          </section>

          {/* Contact */}
          <section className="mt-12 border-t pt-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              Contact Us
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 text-gray-700">
              <div>
                <span className="font-medium">Email:</span>{" "}
                <a
                  href="mailto:info@svuicc.com"
                  className="text-[#2d79c5] hover:underline"
                >
                  info@svuicc.com
                </a>
              </div>
                  ||
              <div>
                <a
                  href="mailto:support@svuicc.com"
                  className="text-[#2d79c5] hover:underline"
                >
                  support@svuicc.com
                </a>
              </div>
            </div>
          </section>

          <p className="mt-10 text-center text-lg font-semibold text-[#008641]">
            Empowering Skills. Enabling Careers. Elevating Futures.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;