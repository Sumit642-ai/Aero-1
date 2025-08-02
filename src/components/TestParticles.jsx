// TestParticles.jsx
import React, { useCallback } from "react";
import Particles from "@tsparticles/react-full";

const TestParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log("Particles engine loaded");
    // No need to call loadFull(); this version includes it
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        background: {
          color: "#000000"
        },
        particles: {
          number: { value: 80 },
          color: { value: "#ffffff" },
          shape: { type: "circle" },
          size: { value: 3 },
          move: { enable: true, speed: 1 }
        }
      }}
    />
  );
};

export default TestParticles;
