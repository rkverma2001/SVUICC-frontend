import React from "react";
import Footer from "../components/footer/Footer";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <div className="flex grow items-start mt-24 justify-center px-4 py-10">
        <div className="max-w-4xl bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Terms and Conditions
          </h1>

          <p className="text-gray-600 text-sm text-center mb-8">
            Effective Date: 01/02/2026
          </p>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms and Conditions govern your enrollment and participation 
              in certification programs offered by Sri Venkateswara University – 
              Industry Certification Centre (Start-Up Innovation & Incubation Centre, 
              RUSA Phase II), operated in collaboration with Etrain Education Pvt Ltd.
              By registering for any certification program, you agree to comply with 
              these Terms.
            </p>
          </section>

          {/* Eligibility */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">1. Eligibility</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>You must provide accurate personal and academic information during registration.</li>
              <li>You must meet eligibility criteria specified for each certification program.</li>
              <li>Providing false or misleading information may result in cancellation of enrollment.</li>
            </ul>
          </section>

          {/* Certification Enrollment */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">2. Certification Enrollment</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enrollment is subject to verification and availability of exam slots.</li>
              <li>Certification programs are conducted in collaboration with authorized global bodies (Microsoft, Adobe, Cisco, IBM, Apple, PMI, Meta, Autodesk, Tally, etc.).</li>
              <li>The university reserves the right to modify schedules, batches, or delivery format when necessary.</li>
            </ul>
          </section>

          {/* Payments */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">3. Payments & Fees</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>All fees must be paid in full before certification processing.</li>
              <li>Fees once paid are generally non-refundable unless explicitly stated.</li>
              <li>In case a certification exam is cancelled by the organizing body, rescheduling or refund policies will apply as per official guidelines.</li>
            </ul>
          </section>

          {/* Authorized Testing */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">4. Authorized Testing Centre</h2>
            <p className="text-gray-700 leading-relaxed">
              Sri Venkateswara University operates as a Certiport Authorized 
              Testing Centre. All examinations are conducted in compliance with 
              the rules and regulations of the respective certification authority.
              Candidates must follow examination protocols strictly.
            </p>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">5. User Responsibilities</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Maintain confidentiality of login credentials.</li>
              <li>Adhere to academic integrity and examination policies.</li>
              <li>Use certification materials only for personal academic purposes.</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">6. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All certification content, training materials, and exam resources 
              are the intellectual property of their respective global certification 
              providers. Unauthorized reproduction, distribution, or misuse is strictly prohibited.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              The Industry Certification Centre shall not be liable for any indirect, 
              incidental, or consequential damages arising from participation in 
              certification programs or technical issues beyond reasonable control.
            </p>
          </section>

          {/* Changes */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">8. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              The Centre reserves the right to update or modify these Terms 
              at any time. Continued participation in programs constitutes 
              acceptance of the updated Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-3">9. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by the laws of India. Any disputes 
              shall fall under the jurisdiction of appropriate courts in Andhra Pradesh, India.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
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

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;