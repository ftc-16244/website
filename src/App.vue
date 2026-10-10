<script setup>
import { onMounted, onUnmounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

onMounted(() => {
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

  onUnmounted(() => {
    observer.disconnect()
    routeObserver.disconnect()
  })
})
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<style>
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
