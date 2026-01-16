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

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.2;

      const time = state.clock.getElapsedTime();
      const pulse = Math.sin(time * 1.5) + Math.sin(time * 4) * 0.3;
      const flickeringOpacity = 0.4 + ((pulse + 1.3) / 2.6) * 0.6;

      groupRef.current.children.forEach((child: any) => {
        if (child.material) {
          const baseMultiplier = child.userData.isMeridian ? 0.5 : 1;
          child.material.opacity =
            flickeringOpacity * glowIntensity * baseMultiplier;
        }
      });
    }
  });

  const { rings, meridians } = useMemo(() => {
    const radius = 1.4;
    const segments = 64;

    const ringData = [];
    const numRings = 16;

    for (let i = 0; i < numRings; i++) {
      const t = i / (numRings - 1);
      const yPos = -radius + t * radius * 2;
      const ringRadius = Math.sqrt(Math.max(0, radius * radius - yPos * yPos));

      if (ringRadius < 0.05) continue;

      const points: [number, number, number][] = [];
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
        index: i,
        key: `lat-${i}`,
        color: i % 2 === 0 ? "#c27070" : "#4a5568",
      });
    }

    const meridianData = [];
    const numMeridians = 12;

    for (let i = 0; i < numMeridians; i++) {
      const points: [number, number, number][] = [];
      const meridianAngle = (i / numMeridians) * Math.PI * 2;

      for (let j = 0; j <= segments; j++) {
        const theta = (j / segments) * Math.PI * 2;
        const xBase = Math.cos(theta) * radius;
        const yBase = Math.sin(theta) * radius;

        const x = xBase * Math.cos(meridianAngle);
        const z = xBase * Math.sin(meridianAngle);
        const y = yBase;

        points.push([x, y, z]);
      }

      meridianData.push({
        points,
        index: i,
        key: `long-${i}`,
        color: "#4a5568",
      });
    }

    return { rings: ringData, meridians: meridianData };
  }, []);

  return (
    <group rotation={[0.4, 0.2, -0.5]}>
      <group ref={groupRef}>
        {rings.map((ring) => (
          <Line
            key={ring.key}
            points={ring.points}
            color={ring.color}
            lineWidth={2}
            transparent
            opacity={glowIntensity}
            userData={{ isMeridian: false }}
          />
        ))}

        {meridians.map((meridian) => (
          <Line
            key={meridian.key}
            points={meridian.points}
            color={meridian.color}
            lineWidth={1}
            transparent
            opacity={glowIntensity * 0.5}
            userData={{ isMeridian: true }}
          />
        ))}
      </group>
    </group>
  );
}
