import React from "react";

export default function OptInPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-sm rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            SMS Consent Confirmation
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-xl">
              Thanks for starting a conversation with HouseFly AI!
            </p>
            
            <p>
              To opt in, text <strong>HOUSEFLY</strong> to <strong>+1-617-994-5449</strong>. By texting us, you agree to receive recurring SMS messages from HouseFly AI with updates about property details, showing times, and rental coordination. Message frequency varies. Standard message and data rates may apply.
            </p>
            
            <p>
              Reply <strong>STOP</strong> to unsubscribe at any time. Reply <strong>HELP</strong> for assistance.
            </p>
            
            <p>
              We do not share your mobile number with third parties for marketing purposes. For details, please review our:
            </p>
            
            <div className="space-y-2">
              <div>
                <a 
                  href="/privacy" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Privacy Policy
                </a>
              </div>
              <div>
                <a 
                  href="/terms" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 