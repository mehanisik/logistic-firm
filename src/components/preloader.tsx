"use client";

import { useEffect, useRef, useState } from "react";

let isFirstLoad = true;
const LOADING_TIME = 2300;

export function Preloader() {
  const [isLoading, setIsLoading] = useState(isFirstLoad);
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (window.innerHeight < 850) return;

    if (!isFirstLoad) {
      setIsLoading(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsFading(true);
      setTimeout(() => {
        setIsLoading(false);
        isFirstLoad = false;
      }, 800);
    }, LOADING_TIME);

    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <>
      <style jsx global>{`
				body {
					overflow: hidden;
				}
				#__next > *:not(:first-child) {
					display: none !important;
				}
				@keyframes fadeOut {
					from {
						opacity: 1;
						transform: scale(1);
					}
					to {
						opacity: 0;
						transform: scale(0.98);
					}
				}
				.preloader-fade {
					animation: fadeOut 800ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
				}
			`}</style>
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white backdrop-blur-sm transition-all duration-500 ${
          isFading ? "preloader-fade" : ""
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="h-[80vh] w-auto max-w-[90vw] object-contain"
            style={{ maxHeight: "90vh" }}
            onError={(e) => console.error("Video error:", e)}
          >
            <source src="/preloader.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </>
  );
}
