"use client";
import { useCallback, useEffect, useRef, useState } from "react";

const getIsFirstLoad = () => {
  if (typeof window === "undefined") return true;
  return !sessionStorage.getItem("preloader-shown");
};

const setFirstLoadComplete = () => {
  if (typeof window !== "undefined") {
    sessionStorage.setItem("preloader-shown", "1");
  }
};

export function Preloader() {
  const [isVisible, setIsVisible] = useState(getIsFirstLoad);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  const hidePreloader = useCallback(() => {
    setIsExiting(true);

    animationRef.current = requestAnimationFrame(() => {
      setTimeout(() => {
        setIsVisible(false);
        setFirstLoadComplete();
        document.body.style.overflow = "";
      }, 300);
    });
  }, []);

  useEffect(() => {
    if (window.innerHeight < 850 || !getIsFirstLoad()) {
      setIsVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const video = videoRef.current;
    if (video) {
      video.load();
      const playPromise = video.play();

      if (playPromise) {
        playPromise.catch((error) => {
          console.warn("Video autoplay failed:", error);
          hidePreloader();
        });
      }
    }

    timeoutRef.current = setTimeout(hidePreloader, 2000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      document.body.style.overflow = "";
    };
  }, [hidePreloader]);

  if (!isVisible) return null;

  return (
    <>
      <style jsx global>{`
        .preloader-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          backdrop-filter: blur(8px);
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .preloader-exit {
          opacity: 0;
          transform: scale(0.95);
          pointer-events: none;
        }
        
        .preloader-video {
          height: min(80vh, 90vw);
          width: auto;
          max-width: 90vw;
          object-fit: contain;
          will-change: transform;
        }
        
        body.preloader-active #__next > *:not(.preloader-overlay) {
          display: none !important;
        }
      `}</style>

      <div
        className={`preloader-overlay ${isExiting ? "preloader-exit" : ""}`}
        style={{
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          className="preloader-video"
          preload="auto"
          onCanPlay={() => {
            if (videoRef.current) {
              videoRef.current.playbackRate = 1;
            }
          }}
          onError={() => {
            console.warn("Video failed to load, hiding preloader");
            hidePreloader();
          }}
          onEnded={hidePreloader}
        >
          <source src="/preloader.webm" type="video/webm" />
        </video>
      </div>
    </>
  );
}
