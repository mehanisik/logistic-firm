"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring as useFramerSpring } from "framer-motion";
import { useTheme } from "next-themes";

type Props = {
  baseColor?: COBEOptions["baseColor"];
  markerColor?: COBEOptions["markerColor"];
  glowColor?: COBEOptions["glowColor"];
  markers?: COBEOptions["markers"];
};

const defaultMarkers: Required<Pick<Props, "markers">>["markers"] = [
	{ location: [41.0082,28.9784,], size: 0.10 },  
	{ location: [52.237049, 21.017532], size: 0.10 },  
	{ location: [35.7694,51.3890], size: 0.10 },  
];

const defaultOptions: Required<
  Pick<Props, "baseColor" | "markerColor" | "glowColor" | "markers">
> = {
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [0.8, 0.8, 0.8],
  markers: defaultMarkers,
};

export function Cobe({
  baseColor = defaultOptions.baseColor,
  markerColor = defaultOptions.markerColor,
  glowColor = defaultOptions.glowColor,
  markers = defaultOptions.markers,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef<number>(0);

  const rMotionValue = useMotionValue(0);

  const rSpring = useFramerSpring(rMotionValue, {
    mass: 1,
    stiffness: 280,
    damping: 40,
  });

  const { theme } = useTheme();

  useEffect(() => {
    let phi = 0;
    let width = 0;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener("resize", onResize);
    onResize();

    if (!canvasRef.current) {
      return;
    }

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.56,
      dark:  theme === "dark" ? 1 : 0,
      diffuse: 2,
      mapSamples: 25000,
      mapBrightness: 1.8,
      mapBaseBrightness: 0.05,
      baseColor,
      markerColor,
      glowColor,
      markers,
      opacity: 0.7,
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.00125;
        }
        // 3. Read the spring-animated value
        state.phi = phi + rSpring.get();
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 100); 

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize); 
    };

  }, [markers, baseColor, markerColor, glowColor ,theme]);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 500,
        aspectRatio: 1,
        margin: "auto",
        position: "relative",
      }}
    >
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grabbing";
          }
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          if (canvasRef.current) {
            canvasRef.current.style.cursor = "grab";
          }
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            rMotionValue.set(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            rMotionValue.set(delta / 100);
          }
        }}
        style={{
          width: "100%",
          height: "100%",
          aspectRatio: 1,
          cursor: "grab",
          contain: "layout paint size",
          opacity: 0,
          transition: "opacity 1s ease",
        }}
      />
    </div>
  );
}