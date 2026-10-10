<template>
  <main>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-content">
<h1>We Are The <span class="highlight">Trailblazers</span></h1>
        <p class="hero-sub">
          We're a FIRST Tech Challenge team from Dunlap, Illinois, in our seventh year in the
          Peoria League. This season we built three robots and made it to State.
        </p>
        <p class="hero-motto">"Do not go where the path may lead, go instead where there is no path and leave a trail."</p>
        <div class="hero-buttons">
          <RouterLink to="/team" class="btn btn-primary">Meet Our Team</RouterLink>
          <RouterLink to="/competitions" class="btn btn-outline">Our Seasons</RouterLink>
        </div>
      </div>
      <div class="hero-visual">
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

    <!-- Robot -->
    <section class="robot-feature">
      <img src="/images/ftc_photos/IMG_9867.jpg" alt="The Trailblazers robot on the build table" class="robot-feature-img" />
      <p class="robot-feature-caption">The robot on the build table. It started as a single design and ended up as three.</p>
    </section>

    <!-- About Snippet -->
    <section class="section">
      <div class="container about-snippet">
        <div class="about-text">
          <h2 class="section-title" style="text-align:left">Who We Are</h2>
          <div class="divider" style="margin-left:0"></div>
          <p>
            There are 8 of us, from a bunch of different schools around Dunlap, and we compete in the
            Peoria League. Most of what we know about building robots we learned by building them badly first.
          </p>
          <p style="margin-top:1rem;">
            We're still looking for mentors, still looking for new members, and still having fun with it.
          </p>
          <RouterLink to="/about" class="btn btn-primary" style="margin-top:1.5rem; display:inline-block">Learn More</RouterLink>
        </div>
        <div class="about-img">
          <img src="/images/team/team_photo.jpg" alt="Trailblazers Team Photo" class="team-photo" />
        </div>
      </div>
    </section>

    <!-- This Season -->
    <section class="section season-section">
      <div class="container">
        <h2 class="section-title" style="text-align:left">This Season: DECODE</h2>
        <div class="divider" style="margin-left:0"></div>
        <div class="story" v-for="st in stories" :key="st.title">
          <h3>{{ st.title }}</h3>
          <p>{{ st.text }}</p>
        </div>
        <RouterLink to="/competitions" class="btn btn-outline" style="margin-top:2rem">See the whole season</RouterLink>
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

<script>
export default {
  data() {
    return {
      stories: [
        { title: 'We rebuilt the robot after talking to an FRC mentor', text: "After Meet 1 we talked to Ben Martin from FRC Team 2481, and Manar led a full redesign. By Meet 3 we had a mecanum intake, an open waterslide transfer, and a turret that turns 240 degrees." },
        { title: 'AIMBOT', text: "We wanted the robot to aim itself without a Limelight, so we wrote it to use odometry. It took a while, but it's a lot more accurate than aiming by hand." },
        { title: 'Engineering Day at the Riverfront Museum', text: "In February we took the robot to Caterpillar's Engineering Day in Peoria and ran it for more than 50 elementary students. Seeing them react to it was one of the best parts of the year." },
      ]
    }
  }
}
</script>

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

.highlight { color: var(--accent); }

.robot-feature { background: var(--white); text-align: center; padding: 2rem 0 1rem; }
.robot-feature-img { width: 100%; max-height: 640px; object-fit: contain; display: block; }
.robot-feature-caption { color: var(--blue-darkest); font-size: 0.95rem; padding: 0.8rem 2rem 1rem; }

.season-section { background: var(--blue-primary); }
.story { display: grid; grid-template-columns: 1fr 2fr; gap: 2rem; padding: 1.5rem 0; border-top: 1px solid rgba(255,255,255,0.25); }
.story h3 { font-size: 1.3rem; }
.story p { color: var(--blue-lightest); line-height: 1.7; }
@media (max-width: 700px) { .story { grid-template-columns: 1fr; gap: 0.5rem; } }

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
