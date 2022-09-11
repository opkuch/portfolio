import React from 'react'
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export function AppParticles() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

  return (
    <Particles
    id="tsparticles"
    init={particlesInit}
    options={{
        background: {
            color: {
                value: "#FFFFFF",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 85,
                    duration: 0.8,
                },
            },
        },
        particles: {
            color: {
                value: "#000",
            },
            links: {
                color: "#000",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 200,
            },
            opacity: {
                value: 0.1,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
/>
)
}
