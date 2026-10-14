<template>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="nav-brand">
        <img src="/images/logo.png" alt="Trailblazers Logo" class="nav-logo" @error="e => e.target.style.display='none'" />
        <div class="brand-text">
          <span class="brand-name">Trailblazers</span>
          <span class="brand-number">FTC #16244</span>
        </div>
      </RouterLink>

      <button class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li><RouterLink to="/" @click="closeMenu">Home</RouterLink></li>
        <li><RouterLink to="/about" @click="closeMenu">About</RouterLink></li>
        <li><RouterLink to="/team" @click="closeMenu">Team</RouterLink></li>
        <li><RouterLink to="/robot-gallery" @click="closeMenu">Robot Gallery</RouterLink></li>
        <li><RouterLink to="/competitions" @click="closeMenu">Competitions</RouterLink></li>
        <li><RouterLink to="/outreach" @click="closeMenu">Outreach</RouterLink></li>
        <li><RouterLink to="/sponsors" @click="closeMenu">Sponsors</RouterLink></li>
        <li><RouterLink to="/contact" @click="closeMenu" class="nav-cta">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { menuOpen: false }
  },
  methods: {
    toggleMenu() { this.menuOpen = !this.menuOpen },
    closeMenu() { this.menuOpen = false }
  }
}
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: rgba(10, 35, 66, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--blue-primary);
  padding-top: env(safe-area-inset-top);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.nav-logo {
  width: 48px;
  height: 48px;
  object-fit: cover;
  border-radius: 50%;
  -webkit-mask-image: radial-gradient(circle, black 50%, transparent 78%);
  mask-image: radial-gradient(circle, black 50%, transparent 78%);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
}

.brand-number {
  font-size: 0.75rem;
  color: var(--blue-light);
  font-weight: 500;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.nav-links a {
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--gray);
  transition: all 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--white);
  background-color: rgba(66, 165, 245, 0.15);
}

.nav-cta {
  background-color: var(--blue-medium) !important;
  color: var(--white) !important;
  border-radius: 6px;
}

.nav-cta:hover {
  background-color: var(--blue-light) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

@media (max-width: 900px) {
  .hamburger { display: flex; }

  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: var(--blue-darkest);
    flex-direction: column;
    padding: 1rem 0;
    border-bottom: 1px solid var(--blue-primary);
    display: none;
    gap: 0;
  }

  .nav-links.open { display: flex; }

  .nav-links li { width: 100%; text-align: center; }

  .nav-links a {
    display: block;
    padding: 0.8rem 2rem;
    border-radius: 0;
  }
}
</style>
