import React from 'react';
import { services } from '@/constants';

const OurServices = () => {
  

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-12 h-12 border-2 border-gray-300 rounded-full flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-gray-600" strokeWidth={1.5} />
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                {service.title}
              </h3>
              
              {/* Services List */}
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2.5 mr-3 flex-shrink-0"></span>
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;