'use client';
import React, { useState, useEffect, useRef } from 'react';

const ProcessSteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      number: 1,
      title: 'Unlocking the opportunity',
      subtitle: 'Business strategy',
      description: 'Our projects always begin by gaining a deep understanding of your business goals, customer needs, applicable technologies, the surrounding space, and team structure. We meet in person with key stakeholders—executives, engineers, data scientists, product and design teams—to immerse ourselves in your business.',
      bullets: [
        'Personas for current and future users',
        'Data-driven hypothesis on where to focus',
        'Recommendation on how to best leverage emerging technology (and address technology constraints) for desired outcome',
        'KPIs and success metrics'
      ]
    },
    {
      number: 2,
      title: 'Deciding what to build',
      subtitle: 'Product definition',
      description: 'We draw upon our 15+ years designing products to develop a product design thesis. The thesis gains fidelity with user journey mapping and diagrams of core workflows that ensure we\'re set up to anticipate and meet users\' needs. Once aligned on a minimum viable product (MVP)',
      bullets: [
        'User journey mapping and core workflows',
        'Product design thesis and validation',
        'Minimum viable product (MVP) definition',
        'Technical architecture and feasibility assessment'
      ]
    },
    {
      number: 3,
      title: 'From start to end',
      subtitle: 'Implementation',
      description: 'We take your product from concept to launch with a comprehensive approach that covers every aspect of development. Our team works closely with yours to ensure seamless integration and knowledge transfer throughout the process.',
      bullets: [
        'Full-stack development and deployment',
        'Quality assurance and testing protocols',
        'Knowledge transfer and team training',
        'Post-launch support and optimization'
      ]
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (containerRect.top < viewportHeight && containerRect.bottom > 0) {
        const totalScrollableHeight = container.offsetHeight - viewportHeight;
        const currentScrollProgress = Math.max(0, Math.min(1, Math.abs(containerRect.top) / totalScrollableHeight));
        setScrollProgress(currentScrollProgress);
        
        const currentStep = Math.min(Math.floor(currentScrollProgress * steps.length) + 1, steps.length);
        setActiveStep(currentStep);
      }
    };

    const throttledScroll = throttle(handleScroll, 16);
    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [steps.length]);

  function throttle(func: Function, limit: number) {
    let inThrottle: boolean;
    return function(this: any, ...args: any[]) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    }
  }

  const getStepState = (stepNumber: number) => {
    if (stepNumber < activeStep) return 'completed';
    if (stepNumber === activeStep) return 'active';
    return 'upcoming';
  };



  return (
    <div className="bg-white">
     
      {/* Main process section */}
      <section className="relative bg-white" ref={containerRef}>
        <div className="flex">
          {/* Sticky Numbers Sidebar */}
          <div className="w-2/5 sticky top-0 h-screen overflow-hidden bg-white">
            {steps.map((step, index) => {
              const state = getStepState(step.number);
              const isActive = state === 'active';
              const isCompleted = state === 'completed';
              
              return (
                <div
                  key={step.number}
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
                    isCompleted ? 'transform -translate-y-full opacity-0' : 
                    isActive ? 'transform translate-y-0 opacity-100' : 
                    'transform translate-y-full opacity-30'
                  }`}
                  style={{
                    zIndex: isActive ? 10 : isCompleted ? 5 : 1
                  }}
                >
                  <div className="text-center relative">
                    {/* Animated number */}
                    <div className="relative">
                      <span 
                        className={`text-[16rem] font-black select-none leading-none transition-all duration-700 ease-out transform ${
                          isActive 
                            ? 'text-black scale-100 opacity-100' 
                            : 'text-transparent scale-90 opacity-60'
                        }`}
                        style={{
                          fontSize: '16rem',
                          lineHeight: '1',
                          ...(!isActive ? {
                            WebkitTextStroke: '3px #ddd ',
                            WebkitTextFillColor: 'transparent',
                            strokeDasharray: '15 10',
                            strokeDashoffset: '0'
                          } : {})
                        }}
                      >
                        {step.number.toString().padStart(2, '0')}
                      </span>
                    </div>
                        
                    {/* Progress indicator
                    {isActive && (
                      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                        <div className="w-16 h-1 bg-gray-300 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-black transition-all duration-300 ease-out"
                            style={{ 
                              width: `${((scrollProgress * steps.length) % 1) * 100}%` 
                            }}
                          />
                        </div>
                      </div>
                    )} */}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scrolling Content */}
          <div className="w-3/5 bg-white relative overflow-hidden">
            {steps.map((step, index) => {
              const isActive = activeStep === step.number;
              
              return (
                <div
                  key={step.number}
                  data-step={step.number}
                  className={`min-h-screen flex items-center px-16 py-20 transition-all duration-700 ease-out ${
                    isActive ? 'opacity-100 transform translate-x-0' : 'opacity-70 transform translate-x-4'
                  }`}
                >
                  <div className="max-w-2xl">
                    {/* Animated line */}
                    <div 
                      className={`h-0.5 bg-black mb-8 transition-all duration-1000 ease-out ${
                        isActive ? 'w-full' : 'w-8'
                      }`}
                    />
                    
                    {/* Title with stagger animation */}
                    <h2 className={`text-5xl font-bold text-black mb-4 leading-tight transition-all duration-500 ease-out ${
                      isActive ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-70'
                    }`}>
                      {step.title}
                    </h2>
                    
                    {/* Subtitle */}
                    <p className={`text-lg text-gray-600 mb-8 font-medium transition-all duration-700 delay-100 ease-out ${
                      isActive ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-70'
                    }`}>
                      {step.subtitle}
                    </p>

                    {/* Description */}
                    <p className={`text-lg text-gray-700 leading-relaxed mb-8 transition-all duration-700 delay-200 ease-out ${
                      isActive ? 'transform translate-y-0 opacity-100' : 'transform translate-y-4 opacity-70'
                    }`}>
                      {step.description}
                    </p>

                    {/* Bullet points with stagger */}
                    <ul className="space-y-3">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <li 
                          key={bulletIndex}
                          className={`flex items-start gap-3 text-gray-700 transition-all duration-500 ease-out ${
                            isActive ? 'transform translate-x-0 opacity-100' : 'transform translate-x-8 opacity-60'
                          }`}
                          style={{
                            transitionDelay: `${300 + bulletIndex * 100}ms`
                          }}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0 transition-all duration-300 ${
                            isActive ? 'bg-black scale-100' : 'bg-gray-400 scale-75'
                          }`} />
                          <span className="text-base leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProcessSteps;