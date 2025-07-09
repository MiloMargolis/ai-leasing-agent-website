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
              HouseFly AI ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information when you interact with our services, including through SMS, our website (https://www.houseflyai.com), and other communication channels.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Contact Information:</strong> Such as your name, phone number, and email address.</li>
              <li><strong>Message Content:</strong> When you communicate with HouseFly AI via SMS or other means.</li>
              <li><strong>Usage Information:</strong> Log data and usage patterns related to our messaging services.</li>
              <li><strong>Device Information:</strong> Basic metadata such as IP address or device type.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use your information to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Provide real estate-related information and services on behalf of agents.</li>
              <li>Respond to your questions or messages.</li>
              <li>Improve and analyze our services.</li>
              <li>Ensure compliance with legal and carrier regulations.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Sharing of Information</h2>
            <p className="text-gray-700 mb-4">We do not sell your personal information. We may share information with:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Real estate agents we are assisting to help qualify or follow up with leads.</li>
              <li>Service providers who support our technology infrastructure (e.g., SMS platforms).</li>
              <li>Law enforcement or regulators when required by law.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Choices</h2>
            <p className="text-gray-700 mb-6">
              You can opt out of SMS communications at any time by replying "STOP". If you have questions about your data, contact us at{" "}
              <a href="mailto:houseflyoutreach@gmail.com" className="text-indigo-600 hover:text-indigo-800 underline">
                houseflyoutreach@gmail.com
              </a>.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We take reasonable precautions to protect your data, including secure storage and limited access.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Changes to This Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. Changes will be posted on this page with a new effective date.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy, you can contact us at:</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 font-semibold">HouseFly AI</p>
              <p className="text-gray-700">
                Email:{" "}
                <a href="mailto:houseflyoutreach@gmail.com" className="text-indigo-600 hover:text-indigo-800 underline">
                  houseflyoutreach@gmail.com
                </a>
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