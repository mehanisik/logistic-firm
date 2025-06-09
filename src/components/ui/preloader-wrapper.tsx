'use client';

import { type ReactNode, useState, useEffect } from 'react';
import { Preloader } from './preloader';

const PRELOADER_COOKIE_NAME = "preloader_shown";
const PRELOADER_COOKIE_EXPIRY_HOURS = 2; // Set to 2 hours

type AppLoaderProps = {
  children: ReactNode;
}

export const PreloaderWrapper = ({ children }: AppLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const hasSeenPreloader = sessionStorage.getItem('preloader-shown');
    
    if (hasSeenPreloader) {
      setIsLoading(false);
      setShowContent(true);
    }
  }, []);

  const handleAnimationComplete = () => {
    // Set cookie with 2-hour expiry
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + (PRELOADER_COOKIE_EXPIRY_HOURS * 60 * 60 * 1000));
    sessionStorage.setItem('preloader-shown', 'true');
    document.cookie = `${PRELOADER_COOKIE_NAME}=true; expires=${expiryDate.toUTCString()}; path=/`;
    
    setIsLoading(false);
    
    requestAnimationFrame(() => {
      setShowContent(true);
    });
  };

  if (isLoading) {
    return (
      <Preloader onComplete={handleAnimationComplete} />
    );
  }

  return (
    <div 
      className={`transition-opacity duration-500 ${
        showContent ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ willChange: 'opacity' }}
    >
      {children}
    </div>
  );
};