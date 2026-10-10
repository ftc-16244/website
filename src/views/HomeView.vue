<template>
  <main>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
<h1>We Are The <span class="highlight">Trailblazers</span></h1>
        <p class="hero-sub">
          A 7-year FTC team from Dunlap, Illinois competing in the Peoria League.
          We blaze new paths in engineering, programming, and community impact.
        </p>
        <p class="hero-motto">"Do not go where the path may lead, go instead where there is no path and leave a trail."</p>
        <div class="hero-buttons">
          <RouterLink to="/team" class="btn btn-primary">Meet Our Team</RouterLink>
          <RouterLink to="/competitions" class="btn btn-outline">Our Seasons</RouterLink>
          <RouterLink :to="{ path: '/contact', query: { subject: 'Join the Team' } }" class="btn btn-primary">Apply to Join the Team</RouterLink>
        </div>
      </div>
      <div class="hero-visual">
        <div class="hero-glow-orb"></div>
        <img src="/images/logo_circle.png" alt="The Trailblazers FTC #16244" class="hero-logo-img" />
      </div>
    </section>

    <!-- Stats Bar -->
    <section class="stats-bar">
      <div class="container">
        <div class="stats-grid">
          <div class="stat">
            <span class="stat-num">7</span>
            <span class="stat-label">Years Competing</span>
          </div>
          <div class="stat">
            <span class="stat-num">#16244</span>
            <span class="stat-label">Team Number</span>
          </div>
          <div class="stat">
            <span class="stat-num">8</span>
            <span class="stat-label">Team Members</span>
          </div>
          <div class="stat">
            <span class="stat-num">State</span>
            <span class="stat-label">2025–26 Reached</span>
          </div>
        </div>
      </div>
    </section>

    <!-- About Snippet -->
    <section class="section">
      <div class="container about-snippet">
        <div class="about-text">
          <h2 class="section-title" style="text-align:left">Who We Are</h2>
          <div class="divider" style="margin-left:0"></div>
          <p>
            The Trailblazers (FTC #16244) are a diverse group of 8 members from many different schools
            in the Dunlap, Illinois area, competing in the Peoria League. For 7 seasons we've built
            competitive robots, grown as engineers, and given back to our community through STEM outreach.
          </p>
          <p style="margin-top:1rem;">
            Our goal: seek new mentors, expand our team, connect with our community, and continue
            making competitive robots, while having fun along the way.
          </p>
          <RouterLink to="/about" class="btn btn-primary" style="margin-top:1.5rem; display:inline-block">Learn More</RouterLink>
        </div>
        <div class="about-img">
          <img src="/images/team/team_photo.jpg" alt="Trailblazers Team Photo" class="team-photo" />
        </div>
      </div>
    </section>

    <!-- Current Season -->
    <section class="section" style="background-color: rgba(0,56,184,0.15);">
      <div class="container">
        <h2 class="section-title">Current Season</h2>
        <p class="section-subtitle">2026–2027 | BIOBUZZ</p>
        <div class="divider"></div>
        <div class="grid-3">
          <div class="card" style="text-align:center">
            <h3>Pollination</h3>
            <p style="color: var(--gray); margin-top: 0.5rem">Two-team alliances compete on a 12-foot square field, moving Pollen and Nectar around in a match that is all about pollination.</p>
          </div>
          <div class="card" style="text-align:center">
            <h3>Hives and Flowers</h3>
            <p style="color: var(--gray); margin-top: 0.5rem">Launch enough Pollen and Nectar into a Hive and it tips to present the other cell. Four Flowers around the field take Pollen and Nectar, and alliances fight over them as the match ends.</p>
          </div>
          <div class="card" style="text-align:center">
            <h3>Match Format</h3>
            <p style="color: var(--gray); margin-top: 0.5rem">A 30-second autonomous period followed by two minutes of driver control. Last season, DECODE, took us to State.</p>
          </div>
        </div>
        <div style="text-align:center; margin-top: 2rem">
          <RouterLink to="/competitions" class="btn btn-outline">View Full Season →</RouterLink>
        </div>
      </div>
    </section>

    <!-- Sponsors Preview -->
    <section class="section">
      <div class="container" style="text-align:center">
        <h2 class="section-title">Support Us</h2>
        <div class="divider"></div>
        <p class="section-subtitle">We operate on a $12,000 budget funded by sponsors and team fees. Your support makes it possible.</p>
        <RouterLink to="/sponsors" class="btn btn-primary">Become a Sponsor</RouterLink>
      </div>
    </section>
  </main>
</template>

<style scoped>
.hero {
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content { flex: 1; }

.hero-badge {
  display: inline-block;
  background-color: rgba(0, 87, 255, 0.15);
  color: var(--blue-light);
  border: 1px solid var(--blue-light);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.05em;
}

.hero h1 {
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  line-height: 1.1;
}

.highlight {
  background: linear-gradient(135deg, var(--blue-medium), var(--blue-light));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-sub {
  color: var(--gray);
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  max-width: 550px;
}

.hero-motto {
  color: var(--blue-lightest);
  font-style: italic;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  max-width: 520px;
  opacity: 0.75;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-visual { flex: 1; display: flex; justify-content: center; align-items: center; position: relative; }

.hero-glow-orb {
  position: absolute;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,87,255,0.25) 0%, rgba(0,87,255,0.08) 50%, transparent 70%);
  animation: pulse-orb 4s ease-in-out infinite;
  pointer-events: none;
}

@keyframes pulse-orb {
  0%, 100% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.12); opacity: 1; }
}

.hero-logo-img {
  width: 360px;
  height: 360px;
  object-fit: contain;
}

.stats-bar {
  background-color: var(--blue-medium);
  padding: 2.5rem 0;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}

.stat { display: flex; flex-direction: column; gap: 0.3rem; }
.stat-num { font-size: 1.8rem; font-weight: 700; color: var(--white); }
.stat-label { font-size: 0.85rem; color: var(--blue-lightest); opacity: 0.85; }

.about-snippet {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-text p { color: var(--gray); line-height: 1.8; }

.team-photo {
  width: 100%;
  border-radius: 12px;
  border: 2px solid var(--blue-primary);
  box-shadow: 0 8px 30px rgba(0,87,255,0.2);
}

@media (max-width: 900px) {
  .hero { flex-direction: column; text-align: center; }
  .hero h1 { font-size: 2.8rem; }
  .hero-buttons { justify-content: center; }
  .hero-sub, .hero-motto { margin-left: auto; margin-right: auto; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .about-snippet { grid-template-columns: 1fr; }
}
</style>
