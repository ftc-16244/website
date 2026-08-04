<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

let animFrame = null

onMounted(() => {
  // --- Particle canvas ---
  const canvas = document.getElementById('particles-bg')
  const ctx = canvas.getContext('2d')
  let W = window.innerWidth
  let H = window.innerHeight
  canvas.width = W
  canvas.height = H

  const particles = Array.from({ length: 70 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.35,
    vy: (Math.random() - 0.5) * 0.35,
    r: Math.random() * 1.8 + 0.6,
  }))

  function draw() {
    ctx.clearRect(0, 0, W, H)
    for (const p of particles) {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(77,143,255,0.55)'
      ctx.fill()
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 130) {
          ctx.beginPath()
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.strokeStyle = `rgba(0,87,255,${0.18 * (1 - dist / 130)})`
          ctx.lineWidth = 0.6
          ctx.stroke()
        }
      }
    }
    animFrame = requestAnimationFrame(draw)
  }
  draw()

  // --- Gear cursor ---
  const gearEl = document.getElementById('cursor-gear')
  let mx = -100, my = -100
  let gx = -100, gy = -100
  let angle = 0, moveSpeed = 0

  const onMouseMove = (e) => {
    const dx = e.clientX - mx
    const dy = e.clientY - my
    moveSpeed = Math.min(Math.sqrt(dx * dx + dy * dy), 30)
    mx = e.clientX
    my = e.clientY
  }
  document.addEventListener('mousemove', onMouseMove)

  function animGear() {
    gx += (mx - gx) * 0.92
    gy += (my - gy) * 0.92
    angle += 1.8 + moveSpeed * 0.5
    moveSpeed *= 0.88
    gearEl.style.transform = `translate(${gx}px, ${gy}px) rotate(${angle}deg)`
    requestAnimationFrame(animGear)
  }
  animGear()

  // --- Scroll reveal ---
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
    })
  }, { threshold: 0.1 })

  const revealAll = () => document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
  revealAll()
  const routeObserver = new MutationObserver(revealAll)
  routeObserver.observe(document.getElementById('app'), { childList: true, subtree: true })

  const onResize = () => {
    W = window.innerWidth; H = window.innerHeight
    canvas.width = W; canvas.height = H
  }
  window.addEventListener('resize', onResize)

  onUnmounted(() => {
    if (animFrame) cancelAnimationFrame(animFrame)
    window.removeEventListener('resize', onResize)
    document.removeEventListener('mousemove', onMouseMove)
    observer.disconnect()
    routeObserver.disconnect()
  })
})
</script>

<template>
  <canvas id="particles-bg"></canvas>
  <div id="cursor-gear" aria-hidden="true">
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.24 11.78 L26.84 11.97 L26.84 16.03 L23.24 16.22 L22.10 18.96 L24.52 21.64 L21.64 24.52 L18.96 22.10 L16.22 23.24 L16.03 26.84 L11.97 26.84 L11.78 23.24 L9.04 22.10 L6.36 24.52 L3.48 21.64 L5.90 18.96 L4.76 16.22 L1.16 16.03 L1.16 11.97 L4.76 11.78 L5.90 9.04 L3.48 6.36 L6.36 3.48 L9.04 5.90 L11.78 4.76 L11.97 1.16 L16.03 1.16 L16.22 4.76 L18.96 5.90 L21.64 3.48 L24.52 6.36 L22.10 9.04 Z" fill="rgba(0,56,184,0.92)" stroke="#4d8fff" stroke-width="0.8" stroke-linejoin="round"/>
      <circle cx="14" cy="14" r="4.2" fill="#050d1a" stroke="#4d8fff" stroke-width="0.8"/>
      <circle cx="14" cy="14" r="1.5" fill="#4d8fff"/>
    </svg>
  </div>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style>
#particles-bg {
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

#cursor-gear {
  position: fixed;
  top: -14px;
  left: -14px;
  width: 28px;
  height: 28px;
  pointer-events: none;
  z-index: 9999;
  filter: drop-shadow(0 0 5px rgba(0,87,255,0.9)) drop-shadow(0 0 10px rgba(77,143,255,0.5));
  will-change: transform;
}

nav, main, footer {
  position: relative;
  z-index: 1;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
