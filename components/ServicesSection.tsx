import React from "react";

interface ServicesSectionProps {
  servicesRef: React.RefObject<HTMLElement | null>;
  servicesInView: boolean;
  services: any[];
  openService: number | null;
  setOpenService: (i: number | null) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ servicesRef, servicesInView, services, openService, setOpenService }) => (
  <section
    ref={servicesRef}
    id="services"
    className={`bg-gradient-to-br from-gray-50 via-white to-gray-100 py-24 px-6 md:px-16 relative transition-all duration-700 ease-out ${servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
  >
    <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-100 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-100 to-transparent"></div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-left mb-20">
        <h2 className="text-5xl font-bold text-gray-900 mb-6 font-heading">
          Convert more with less
        </h2>
        <p className="text-xl text-gray-600 max-w-xl">
          AI-powered tools that handle the heavy lifting, so your team can focus on what matters most.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <div
            key={i}
            className={`group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 cursor-pointer hover:shadow-2xl hover:scale-105`}
            onClick={() => setOpenService(i)}
            tabIndex={0}
            role="button"
            aria-label={`Read more about ${service.title}`}
            onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setOpenService(i); }}
          >
            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`}></div>
            <div className="flex items-center mb-6">
              <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mr-4`}>
                {service.cardIcon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 font-heading">{service.title}</h3>
            </div>
            <h4 className="text-2xl font-bold text-gray-800 mb-4 font-heading">{service.subtitle}</h4>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
            <div className="mt-6 flex items-center text-purple-600 font-semibold">
              <span>{service.features[0]}</span>
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection; 