import React, { useEffect } from 'react'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

export function AppParticles() {
  const isDark = useSelector((state) => state.featureModule.isDark)

  const dayOptions = {
    background: {
      color: {
        value: '#FFFFFF',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        bubble: {
          size: 15,
          distance: 200,
          color: '#9631b5',
        },
      },
    },
    particles: {
      color: {
        value: '#000',
      },
      links: {
        color: '#000',
        distance: 150,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      move: {
        directions: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
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
        value: 150,
      },
      opacity: {
        value: 0.2,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  const darkOptions = {
    background: {
      color: {
        value: '#191616e2',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'bubble',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 1,
        },
        bubble: {
          size: 15,
          distance: 200,
          color: '#9631b5',
        },
      },
    },
    particles: {
      color: {
        value: '#fff',
      },
      links: {
        color: '#fff',
        distance: 150,
        enable: true,
        opacity: 0.35,
        width: 1,
      },
      move: {
        directions: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
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
        value: 150,
      },
      opacity: {
        value: 0.45,
      },
      shape: {
        type: 'square',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }
  useEffect(() => {})

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return isDark ? (
    <Particles id="tsparticles" init={particlesInit} options={darkOptions} />
  ) : (
    <Particles id="tsparticles" init={particlesInit} options={dayOptions} />
  )
}
