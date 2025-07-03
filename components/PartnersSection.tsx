import React from "react";

interface PartnersSectionProps {
  partnersRef: React.RefObject<HTMLElement | null>;
  partnersInView: boolean;
}

const PartnersSection: React.FC<PartnersSectionProps> = ({ partnersRef, partnersInView }) => (
  <section
    ref={partnersRef}
    id="partners"
    className={`w-full bg-gradient-to-b from-gray-50 via-white to-gray-100 py-20 px-6 md:px-12 relative overflow-hidden transition-all duration-700 ease-out ${partnersInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-50/30 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
    <div className="relative z-10">
      <h2 className="text-center text-4xl font-semibold text-gray-800 mb-12 font-heading">
        Trusted by Boston Leasing Teams
      </h2>
      <div className="logo-container">
        <div className="logo-scroll">
          <div className="logo-scroll__wrapper">
            <div className="logo-item">
              <img src="/Cornerstone.svg" alt="Cornerstone Real Estate" className="h-20 w-auto inline-block" />
            </div>
            <div className="logo-item">
              <img src="/Fisher.svg" alt="Fisher Realty LLC" className="h-20 w-auto inline-block" />
            </div>
            <div className="logo-item">
              <img src="/Encore.svg" alt="Encore Realty" className="h-20 w-auto scale-65 inline-block" />
            </div>
            <div className="logo-item">
              <img src="/Roos.svg" alt="Mark Roos Realty" className="h-20 w-auto inline-block" />
            </div>
            <div className="logo-item">
              <img src="/nextgen.svg" alt="Nextgen Realty" className="h-24 w-auto scale-75 inline-block" />
            </div>
          </div>
          <div className="logo-scroll__wrapper">
            <div className="logo-item">
              <img src="/Cornerstone.svg" alt="Cornerstone Real Estate" className="h-20 w-auto inline-block" />
            </div>
            <div className="logo-item">
              <img src="/Fisher.svg" alt="Fisher Realty LLC" className="h-20 w-auto inline-block" />
            </div>
            <div className="logo-item">
              <img src="/Encore.svg" alt="Encore Realty" className="h-20 w-auto scale-65 inline-block" />
            </div>
            <div className="logo-item">
              <img src="/Roos.svg" alt="Mark Roos Realty" className="h-20 w-auto inline-block" />
            </div>
            <div className="logo-item">
              <img src="/nextgen.svg" alt="Nextgen Realty" className="h-20 w-auto inline-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PartnersSection; 