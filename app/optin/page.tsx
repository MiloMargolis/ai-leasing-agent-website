import React from "react";

export default function OptInSuccess() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">SMS Consent Confirmation</h1>
          </div>

          <div className="prose prose-lg max-w-none text-left">
            <p className="text-gray-700 mb-6">
              Thanks for starting a conversation with HouseFly AI!
            </p>

            <p className="text-gray-700 mb-6">
              By messaging our number, you agree to receive SMS updates about property details, showing times, and rental coordination.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800 text-sm">
                <strong>Message frequency may vary.</strong> Standard message and data rates may apply.
              </p>
            </div>

            <p className="text-gray-700 mb-6">
              Reply STOP to unsubscribe at any time. Reply HELP for assistance.
            </p>

            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">
                We do not sell or share your phone number for marketing purposes.
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