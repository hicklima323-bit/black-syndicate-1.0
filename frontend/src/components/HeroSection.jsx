import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

export default function HeroParticles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim().then(() => setInit(true));
  }, []);

  if (!init) return null;

  return (
    <Particles
      options={{
        background: { color: "#050505" },
        particles: {
          number: { value: 60 },
          color: { value: "#7f00ff" },
          links: {
            enable: true,
            color: "#7f00ff",
            opacity: 0.4,
          },
          move: {
            enable: true,
            speed: 0.6,
          },
        },
      }}
    />
  );
}
