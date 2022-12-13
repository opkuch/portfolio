import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import { useCallback } from 'react'
import { useSelector } from 'react-redux'

export function AppParticles() {
  const isDark = useSelector((state) => state.featureModule.isDark)

  const dayOptions = {
    "fpsLimit": 60,
    "particles": {
      "number": {
        "value": 0
      },
      "color": {
        "value": "#000"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "animation": {
          "enable": false,
          "speed": 1,
          "minimumValue": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": {
          "enable": true,
          "minimumValue": 10
        },
        "animation": {
          "enable": false,
          "speed": 40,
          "minimumValue": 0.1,
          "sync": false
        }
      },
      "links": {
        "enable": false
      },
      "life": {
        "duration": {
          "sync": true,
          "value": 5
        },
        "count": 1
      },
      "move": {
        "enable": true,
        "gravity": {
          "enable": true
        },
        "speed": 10,
        "direction": "none",
        "random": false,
        "straight": false,
        "outModes": {
          "default": "bounce",
          "bottom": "bounce",
          "left": "destroy",
          "right": "destroy",
          "top": "none"
        },
        "trail": {
          "enable": true,
          "fillColor": "#fffff",
          "length": 10
        }
      }
    },
    "interactivity": {
      "events": {
        "onHover": {
          "enable": false,
          "mode": "repulse",
          "parallax": {
            "enable": false,
            "force": 60,
            "smooth": 10
          }
        },
        "onClick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 0.8
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "detectRetina": true,
    "background": {
      "color": "#fffff"
    },
    "emitters": {
      "direction": "top",
      "life": {
        "count": 0,
        "duration": 5,
        "delay": 2
      },
      "rate": {
        "delay": 0.1,
        "quantity": 1
      },
      "size": {
        "width": 0,
        "height": 0
      },
      "particles": {
        "bounce": {
          "vertical": {
            "value": 0.8,
            "random": {
              "enable": true,
              "minimValue": 0.4
            }
          }
        },
        "color": {
          "value": [
            "#5bc0eb",
            "#fde74c",
            "#9bc53d",
            "#e55934",
            "#fa7921"
          ]
        },
        "links": {
          "enable": false
        },
        "size": {
          "value": 10,
          "random": {
            "enable": true,
            "minimumValue": 5
          }
        },
        "opacity": {
          "value": 0.5
        },
        "move": {
          "speed": 10,
          "random": true
        }
      }
    },
    fullScreen: {
      enable: true
    }
  }

  const darkOptions = {
    background: {
      color: {
        value: '#1d1d1d',
      },
    },
    fullScreen: {
      enable: false
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'repulse',
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
          distance: 100,
        },
        repulse: {
          distance: 300
        }
      },
    },
    particles: {
      color: {
        value: '#fff',
      },
      links: {
        color: '#fff',
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        directions: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: 0.3,
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
        value: 0.8,
        anim: {
          enable: true,
          speed: 1.2181158184520178,
          opacity_min: 0,
          sync: false
        }
      },
      shape: {
        type: 'edge',
      },
      size: {
        value: { min: 1, max: 3 },
      },
    },
    detectRetina: true,
  }
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine)
  }, [])

  return isDark ? (
    <Particles id="tsparticles" init={particlesInit} options={darkOptions} canvasClassName="example"/>
  ) : (
    <Particles id="tsparticles" init={particlesInit} options={dayOptions} canvasClassName="example"/>
  )
}
