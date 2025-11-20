"use client";

import createGlobe, { type COBEOptions } from "cobe";
import { useCallback, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
	width: 600,
	height: 600,
	devicePixelRatio: 2,
	phi: 0,
	theta: 0.2,
	dark: 0,
	diffuse: 0.4,
	mapSamples: 16000,
	mapBrightness: 1.2,
	baseColor: [1, 1, 1],
	markerColor: [251 / 255, 100 / 255, 21 / 255],
	glowColor: [1, 1, 1],
	markers: [
		{ location: [28.9784, 41.0082], size: 0.1 },
		{ location: [31.1342, 29.9792], size: 0.1 },
		{ location: [55.2962, 25.2769], size: 0.1 },
	],
	onRender: () => {},
};

export function Globe({
	className,
	config = GLOBE_CONFIG,
}: {
	className?: string;
	config?: COBEOptions;
}) {
	const { theme } = useTheme();
	const canvasRef = useRef<HTMLCanvasElement>(null);

	const isDragging = useRef(false);
	const startX = useRef(0);
	const phi = useRef(0);
	const velocity = useRef(0);
	const width = useRef(0);

	const updateCursor = (active: boolean) => {
		if (canvasRef.current) {
			canvasRef.current.style.cursor = active ? "grabbing" : "grab";
		}
	};

	const onPointerDown = (clientX: number) => {
		isDragging.current = true;
		startX.current = clientX;
		updateCursor(true);
	};

	const onPointerUp = () => {
		isDragging.current = false;
		updateCursor(false);
	};

	const onPointerMove = (clientX: number) => {
		if (!isDragging.current) return;
		const delta = clientX - startX.current;
		startX.current = clientX;
		velocity.current = delta * 0.01;
	};

	const onRender = useCallback((state: Record<string, any>) => {
		if (!isDragging.current) {
			phi.current += 0.005;
		} else {
			phi.current += velocity.current;
			velocity.current *= 0.95;
		}

		state.phi = phi.current;
		state.width = width.current * 2;
		state.height = width.current * 2;
	}, []);

	useEffect(() => {
		const resize = () => {
			if (canvasRef.current) {
				width.current = canvasRef.current.offsetWidth;
			}
		};

		resize();
		window.addEventListener("resize", resize);

		const globe = createGlobe(canvasRef.current!, {
			...config,
			dark: theme === "dark" ? 1 : 0,
			width: width.current * 2,
			height: width.current * 2,
			onRender,
		});

		setTimeout(() => {
			if (canvasRef.current) canvasRef.current.style.opacity = "1";
		});

		return () => {
			globe.destroy();
			window.removeEventListener("resize", resize);
		};
	}, [theme, config, onRender]);

	return (
		<div className={cn("absolute inset-0 mx-auto w-full", className)}>
			<canvas
				ref={canvasRef}
				className={cn(
					"size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
				)}
				onPointerDown={(e) => onPointerDown(e.clientX)}
				onPointerUp={onPointerUp}
				onPointerOut={onPointerUp}
				onMouseMove={(e) => onPointerMove(e.clientX)}
				onTouchMove={(e) =>
					e.touches.length > 0 && onPointerMove(e.touches[0].clientX)
				}
			/>
		</div>
	);
}
