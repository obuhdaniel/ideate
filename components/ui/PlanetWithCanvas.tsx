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
  width = "180px",
  height = "180px",
  className = "",
  customPosition,
}: PlanetWithCanvasProps) {
  const getPositionClasses = () => {
    if (position === "custom" && customPosition) {
      return "";
    }
    return position === "left"
      ? "top-[30%] left-[8%]"
      : "bottom-[15%] right-[8%]";
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
        width,
        height,
        ...getCustomStyles(),
      }}
    >
      <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
        <WireframePlanet glowIntensity={glowIntensity} />
      </Canvas>
    </div>
  );
}
