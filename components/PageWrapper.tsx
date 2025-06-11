"use client";

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Handle page load animation
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* Loading bar */}
      {isLoading && <div className="page-loading" />}
      
      {/* Main page wrapper */}
      <div 
        id="page-wrapper" 
        className={`min-h-screen transition-all duration-300 ease-out ${
          isLoading ? 'opacity-0 translate-y-4 scale-98' : 'opacity-100 translate-y-0 scale-100'
        }`}
      >
        {children}
      </div>
    </>
  );
};

export default PageWrapper;