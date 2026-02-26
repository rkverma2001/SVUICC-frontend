import React from "react";
import Footer from "../components/footer/Footer";

const RefundPolicy: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">

      <div className="flex grow items-start mt-28 justify-center px-4 py-10">
        <div className="max-w-4xl w-full bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200">
          
          <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
            Cancellation and Refund Policy
          </h1>

          <p className="text-center text-gray-600 mb-8">
            Effective Date: 01/02/2026
          </p>

          {/* General Policy */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              1. General Policy
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              All certification programs offered by Sri Venkateswara University – 
              Industry Certification Centre (Start-Up Innovation & Incubation Centre, 
              RUSA Phase II) are governed by academic and examination regulations 
              of the respective global certification bodies.
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                Once the certification fee is paid, it is generally non-refundable.
              </li>
              <li>
                Enrollment confirms allocation of resources including exam 
                slots, certification processing, and administrative handling.
              </li>
              <li>
                Refunds will not be granted for non-participation, absence, or 
                voluntary withdrawal after registration.
              </li>
            </ul>
          </section>

          {/* Exceptional Circumstances */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              2. Exceptional Circumstances
            </h2>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                If a certification exam is cancelled by the organizing body, 
                candidates may be offered rescheduling or a refund as per official policy.
              </li>
              <li>
                Technical payment failures resulting in duplicate transactions 
                will be reviewed and processed after verification.
              </li>
            </ul>
          </section>

          {/* Payment Confirmation */}
          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              3. Payment Confirmation
            </h2>

            <p className="text-gray-700 mb-4 leading-relaxed">
              Upon successful payment:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Enrollment confirmation will be shared via registered email.</li>
              <li>Access to course materials (if applicable) will be provided.</li>
              <li>Exam scheduling information will be communicated separately.</li>
            </ul>

            <p className="mt-4 text-gray-700">
              Candidates are advised to review program details, eligibility 
              criteria, and examination guidelines carefully before making payment.
            </p>
          </section>

          {/* Contact */}
          <section className="border-t pt-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              4. Support & Contact
            </h2>

            <p className="text-gray-700 mb-4">
              For payment-related queries or technical assistance, please contact:
            </p>

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

export default RefundPolicy;