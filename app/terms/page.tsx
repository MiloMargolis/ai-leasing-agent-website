import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              By messaging HouseFly AI, you consent to receive SMS messages related to your real estate inquiry.
            </p>

            <p className="text-gray-700 mb-6">
              Message frequency may vary. Standard message and data rates may apply.
            </p>

            <p className="text-gray-700 mb-6">
              Consent is not a condition of any purchase or service. You can opt out anytime by replying STOP.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                For questions, reply HELP or email{" "}
                <a href="mailto:houseflyoutreach@gmail.com" className="text-indigo-600 hover:text-indigo-800 underline">
                  houseflyoutreach@gmail.com
                </a>.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-medium"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 