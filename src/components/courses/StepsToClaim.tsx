import React from "react";

/* =========================
   Types
========================= */

interface StepsToClaimProps {
  heading: string;
  subHeading: string;
}

/* =========================
   Component
========================= */

const StepsToClaim: React.FC<StepsToClaimProps> = ({
  heading,
  subHeading,
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-50">
      {/* Dynamic Heading */}
      <h1 className="text-2xl font-semibold text-gray-800">
        {heading}
      </h1>

      <p className="text-gray-500 mt-2">
        {subHeading}
      </p>

      {/* Steps Container */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-6xl">
        
        {/* Step 1 */}
        <div className="flex flex-col items-center justify-center pb-20 p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 10h.01M12 10h.01M16 10h.01M9 16h6m-9 6h12a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            Step 1
          </h3>

          <p className="text-sm text-gray-500 text-center mt-2">
            Enroll and pass each course above
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 10l4.553 2.276a2 2 0 010 3.448L15 18m-6-8l-4.553 2.276a2 2 0 000 3.448L9 18m0-8v8m6-8v8"
              />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            Step 2
          </h3>

          <p className="text-sm text-gray-500 text-center mt-2">
            Claim your credentials below
          </p>

          <button
            type="button"
            className="mt-4 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-[#2d79c5] hover:text-white hover:shadow-lg transition-all duration-300"
          >
            Claim Credential
          </button>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center justify-center pb-20 p-6 bg-white rounded-lg shadow-md">
          <div className="w-12 h-12 flex items-center justify-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 10H7m10 4H7m6 4H7m-2 4H3m18-10h2m-2-4h2m-2 8h2m-2 4h2m-18-2h2m0-4h2m0-4h2"
              />
            </svg>
          </div>

          <h3 className="text-lg font-semibold text-gray-700">
            Step 3
          </h3>

          <p className="text-sm text-gray-500 text-center mt-2">
            Check your email!
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepsToClaim;