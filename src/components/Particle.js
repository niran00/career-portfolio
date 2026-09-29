import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          shape: {
            type: "triangle", // Use triangles
          },
          size: {
            value: 5,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: true,
            straight: false,
          },
          opacity: {
            value: 0.6,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#c770f0",
            opacity: 0.4,
            width: 1,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            grab: {
              distance: 200,
              line_linked: {
                opacity: 0.5,
              },
            },
            push: {
              particles_nb: 10,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
