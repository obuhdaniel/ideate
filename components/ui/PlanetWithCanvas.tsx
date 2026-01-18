// @ts-nocheck
"use client";

import { Canvas } from "@react-three/fiber";
import WireframePlanet from "./Planet3D";

interface PlanetWithCanvasProps {
  position?: "left" | "right" | "custom";
  glowIntensity?: number;
  width?: string;
  height?: string;
  className?: string;
  customPosition?: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export default function PlanetWithCanvas({
  position = "left",
  glowIntensity = 1,
  width = "w-[20px]  md:w-[180px]",
  height = "h-[20px] md:h-[180px]",
  className = "",
  customPosition,
}: PlanetWithCanvasProps) {
  const getPositionClasses = () => {
    if (position === "custom" && customPosition) {
      return "";
    }
    return position === "left"
      ? "md:top-[30%] top-[42%] left-[-20%] md:left-[8%]"
      : "bottom-[20%] md:bottom-[15%] right-[-20%] md:right-[8%]";
  };

  const getCustomStyles = () => {
    if (position === "custom" && customPosition) {
      return customPosition;
    }
    return {};
  };

  return (
    <div
      className={`absolute z-[5] pointer-events-none ${getPositionClasses()} ${className}`}
      style={{
        width: width,
        height: height,
        ...getCustomStyles(),
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        frameloop="always"
        dpr={[1, 2]}
      >
        <WireframePlanet glowIntensity={glowIntensity} />
      </Canvas>
    </div>
  );
}
