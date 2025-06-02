"use client";
import React from 'react';
import atikLogo from '../../../public/atik-logo.json';
import Lottie from "lottie-react";

type PreloaderProps= {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  return (
    <div className="fixed w-full bg-white h-screen z-50 inset-0 flex items-center justify-center">
          <Lottie animationData={atikLogo} loop={false} onComplete={onComplete} className='w-full h-full object-cover' />
    </div>
  );
};

export default Preloader;