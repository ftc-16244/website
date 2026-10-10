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
    observer.disconnect()
    routeObserver.disconnect()
  })
})
</script>

<template>
  <canvas id="particles-bg"></canvas>
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
