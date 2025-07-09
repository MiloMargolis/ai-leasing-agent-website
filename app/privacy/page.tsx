import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-12">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Effective Date: July 8, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              HouseFly AI values your privacy. We collect and store personal information only to support communication between real estate agents and prospective renters or buyers.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">What We Collect</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Phone numbers</li>
              <li>Messages you send or receive</li>
              <li>Basic metadata (e.g., timestamps, message routing)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">How We Use It</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>To qualify leads and respond to real estate inquiries</li>
              <li>To schedule tours or share listing info</li>
              <li>To improve assistant functionality</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>You may opt out of communication at any time by replying STOP</li>
              <li>Your mobile information will not be sold or shared with third parties for promotional or marketing purposes</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <a href="mailto:houseflyoutreach@gmail.com" className="text-indigo-600 hover:text-indigo-800 underline">
                houseflyoutreach@gmail.com
              </a>
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