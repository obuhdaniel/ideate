"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

interface WireframePlanetProps {
  glowIntensity?: number;
}

export default function WireframePlanet({
  glowIntensity = 1,
}: WireframePlanetProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Slow rotation animation
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;
    }
  });

  // Create latitude rings (horizontal circles at different heights)
  const rings = useMemo(() => {
    const ringData = [];
    const numRings = 16; // More rings for denser look
    const radius = 1.4;

    for (let i = 0; i < numRings; i++) {
      // Calculate Y position from -radius to +radius
      const t = i / (numRings - 1);
      const yPos = -radius + t * radius * 2;

      // Calculate ring radius at this height (circular cross-section)
      const ringRadius = Math.sqrt(Math.max(0, radius * radius - yPos * yPos));

      // Include even small rings at top/bottom
      if (ringRadius < 0.05) continue;

      // Create circular ring points
      const points: [number, number, number][] = [];
      const segments = 64;
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        points.push([
          Math.cos(angle) * ringRadius,
          yPos,
          Math.sin(angle) * ringRadius,
        ]);
      }

      ringData.push({
        points,
        yPos,
        index: i,
        key: `ring-${i}`,
      });
    }

    return ringData;
  }, []);

  // Alternating colors: pink/coral and purple/blue-gray
  const getColor = (index: number): string => {
    const isEven = index % 2 === 0;
    if (isEven) {
      // Pink/coral/salmon color
      return "#c27070";
    } else {
      // Purple/blue-gray color (darker, more muted)
      return "#4a5568";
    }
  };

  return (
    // Tilt the entire planet for the slanted look (matching reference)
    <group rotation={[0.4, 0.2, -0.5]}>
      <group ref={groupRef}>
        {rings.map((ring) => (
          <Line
            key={ring.key}
            points={ring.points}
            color={getColor(ring.index)}
            lineWidth={2}
            transparent
            opacity={glowIntensity}
          />
        ))}
      </group>
    </group>
  );
}
