import { useEffect, useRef } from 'react'
import { imageUrl } from '../assets/img/profilePicData'
export default function ImageParticles() {
  const canvasRef = useRef()
  const imageRef = useRef()
  let canvas
  let ctx
  let image
  let animationId
  useEffect(() => {
    canvas = canvasRef.current
    image = imageRef.current
    image.onload = function(){
        if (!canvas) return
        ctx = canvas.getContext('2d')
        if (!ctx || !image) return
        canvas.width = image.offsetHeight - 300
        canvas.height = image.offsetWidth - 300
        const effect = new Effect(canvas.width, canvas.height)
        effect.init(ctx)
        const animate = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          effect.draw(ctx)
          effect.update()
          animationId = requestAnimationFrame(animate)
        }
        animate()
    }
    return () => {
        cancelAnimationFrame(animationId)
        window.removeEventListener('mousemove', event => {
        })
    }
  }, [])


  class Particle {
    constructor(effect, x, y, color) {
      this.effect = effect
      this.x = x
      this.y = y
      this.size = this.effect.gap
      this.vx = Math.random() * 2 - 1
      this.vy = Math.random() * 2 - 1
      this.originX = Math.floor(x)
      this.originY = Math.floor(y)
      this.color = color
      this.ease = 0.2
      this.dx = 0
      this.dy = 0
      this.force = 0
      this.distance = 0
      this.angle = 0
      this.friction = 0.8
    }

    draw(context) {
      context.fillStyle = this.color
      context.fillRect(this.x, this.y, this.size, this.size)
    }

    update() {
      this.dx = this.effect.mouse.x - this.x
      this.dy = this.effect.mouse.y - this.y
      this.distance = this.dx * this.dx + this.dy * this.dy
      this.force = -this.effect.mouse.radius / this.distance

      if (this.distance < this.effect.mouse.radius) {
        this.angle = Math.atan2(this.dy, this.dx)
        this.vx += this.force * Math.cos(this.angle)
        this.vy += this.force * Math.sin(this.angle)
      }

      this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease
      this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease
    }
  }

  class Effect {
    constructor(width, height) {
      this.width = width
      this.height = height
      this.particleArray = []
      this.image = image
      this.centerX = this.width * 0.5
      this.centerY = this.height * 0.5
      this.x = this.centerX - this.image.width * 0.5
      this.y = this.centerY - this.image.height * 0.5
      this.gap = 3
      this.mouse = {
        radius: 2500,
        x: undefined,
        y: undefined,
      }
      canvas.addEventListener('mousemove', (event) => {
        this.mouse.x = event.offsetX
        this.mouse.y = event.offsetY
      })
    }
    init(context) {
      context.drawImage(this.image, this.x, this.y)
      const pixels = context.getImageData(0, 0, this.width, this.height).data
      for (let y = 0; y < this.height; y += this.gap) {
        for (let x = 0; x < this.width; x += this.gap) {
          const index = (y * this.width + x) * 4
          const red = pixels[index]
          const green = pixels[index + 1]
          const blue = pixels[index + 2]
          const alpha = pixels[index + 3]
          const color = 'rgb(' + red + ',' + green + ',' + blue + ')'

          if (alpha > 0) {
            this.particleArray.push(new Particle(this, x, y, color))
          }
        }
      }
    }

    draw(context) {
      this.particleArray.forEach((particle) => particle.draw(context))
    }

    update() {
      this.particleArray.forEach((particle) => particle.update())
    }
  }
  return (
    <div>
      <canvas className="my-canvas" ref={canvasRef}></canvas>
      <img className="canvas-image" ref={imageRef} src={imageUrl} alt="" />
    </div>
  )
}
