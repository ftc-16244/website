<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>About Us</h1>
        <div class="divider"></div>
        <p>A 7-year FTC team from Dunlap, Illinois, built on innovation, community, and gracious professionalism.</p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section">
      <div class="container story-grid">
        <div>
          <h2 class="section-title" style="text-align:left">Our Story</h2>
          <div class="divider" style="margin-left:0"></div>
          <p>
            The Trailblazers (#16244) are a 7-year FIRST Tech Challenge team based in Dunlap, Illinois,
            competing in the Peoria League. We are a diverse group of 8 members drawn from many different
            schools, united by a passion for robotics and engineering.
          </p>
          <p style="margin-top: 1rem;">
            Season after season we've grown by iterating on our robot designs, sharpening our programming,
            and deepening our community outreach. The 2025–26 DECODE season saw us reach State, backed
            by some of our most ambitious engineering yet.
          </p>
          <div style="margin-top:1.5rem">
            <span class="tag">Dunlap, IL</span>
            <span class="tag">Peoria League</span>
            <span class="tag">7 Seasons</span>
            <span class="tag">8 Members</span>
            <span class="tag">2 Coaches</span>
          </div>
        </div>
        <img src="/images/team/team_photo.jpg" alt="Trailblazers at Regionals" class="story-img" />
      </div>
    </section>

    <!-- Motto -->
    <section class="motto-section">
      <div class="container" style="text-align:center">
        <p class="motto-text">"Do not go where the path may lead, go instead where there is no path and leave a trail."</p>
        <p class="motto-attr">Ralph Waldo Emerson</p>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Mission & Values</h2>
        <div class="divider"></div>
        <div class="grid-3">
          <div class="card" style="text-align:center">
                        <h3>Innovation</h3>
            <p style="color:var(--gray); margin-top:0.5rem">We iterate rapidly: three full robot redesigns in one season, driven by data, SWOT analysis, and expert feedback.</p>
          </div>
          <div class="card" style="text-align:center">
                        <h3>Gracious Professionalism</h3>
            <p style="color:var(--gray); margin-top:0.5rem">We compete hard and treat every team, judge, and referee with respect, on and off the field.</p>
          </div>
          <div class="card" style="text-align:center">
                        <h3>Community</h3>
            <p style="color:var(--gray); margin-top:0.5rem">From FLL outreach to engineering workshops, we spread a love of STEM throughout the Peoria region.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What is FIRST -->
    <section class="section" style="background-color: rgba(0,56,184,0.15)">
      <div class="container first-section">
        <div>
          <h2 class="section-title" style="text-align:left">What is FIRST Tech Challenge?</h2>
          <div class="divider" style="margin-left:0"></div>
          <p>
            FIRST Tech Challenge (FTC) is a robotics program for students in grades 7–12. Teams design,
            build, program, and operate robots to compete in alliance-format matches, with a new game
            challenge each season.
          </p>
          <p style="margin-top:1rem;">
            Beyond competition, FTC develops real-world skills in mechanical engineering, programming,
            business planning, and leadership, preparing students for STEM careers.
          </p>
          <div style="margin-top:1.5rem; display:flex; gap:1rem; flex-wrap:wrap">
            <span class="tag">Engineering</span>
            <span class="tag">Programming</span>
            <span class="tag">Business Plan</span>
            <span class="tag">Outreach</span>
            <span class="tag">Teamwork</span>
          </div>
        </div>

        <!-- Revolving Photo Album -->
        <div class="slideshow">
          <div class="slide-track">
            <img
              v-for="(photo, i) in ftcPhotos"
              :key="photo"
              :src="photo"
              :alt="'FTC Photo ' + (i + 1)"
              class="slide-img"
              :class="{ active: i === activeSlide, prev: i === prevSlide }"
            />
          </div>
          <div class="slide-dots">
            <button
              v-for="(photo, i) in ftcPhotos"
              :key="i"
              class="dot"
              :class="{ active: i === activeSlide }"
              @click="goTo(i)"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Season Goals -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">2025–26 Season Goals</h2>
        <div class="divider"></div>
        <div class="grid-2">
          <div class="card goal-card" v-for="goal in goals" :key="goal.text">
                        <p>{{ goal.text }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      goals: [
        { text: 'Seek new mentors to guide us with advanced design, programming, and presentations.' },
        { text: 'Add new members to expand and sustain the team for future seasons.' },
        { text: 'Extend our community connections and increase our outreach impact.' },
        { text: 'Compete with a $12,000 budget from sponsors and team fees.' },
        { text: 'Continue building competitive robots while having fun.' },
        { text: 'Create a lasting impact in the community through STEM outreach.' },
      ],
      ftcPhotos: [
        '/images/team/TeamPhotoatRegionals.jpg',
        '/images/ftc_photos/Team_Photo_Robot_Rumble.jpg',
        '/images/ftc_photos/Team_Dinner_Robot_Rumble.jpg',
        '/images/ftc_photos/trailblazers_16x9.png',
        '/images/ftc_photos/portfolioclass.jpg',
        '/images/ftc_photos/IMG_9865.jpg',
        '/images/ftc_photos/IMG_9619.jpg',
        '/images/ftc_photos/IMG_9867.jpg',
        '/images/ftc_photos/IMG_9869.jpg',
        '/images/ftc_photos/IMG_7079.jpg',
        '/images/ftc_photos/IMG_7163.jpg',
        '/images/ftc_photos/IMG_7172.jpg',
        '/images/ftc_photos/IMG_7174.jpg',
        '/images/ftc_photos/IMG_7175.jpg',
      ],
      activeSlide: 0,
      prevSlide: null,
      slideTimer: null,
    }
  },
  mounted() {
    this.startSlideshow()
  },
  beforeUnmount() {
    clearInterval(this.slideTimer)
  },
  methods: {
    startSlideshow() {
      this.slideTimer = setInterval(() => {
        this.prevSlide = this.activeSlide
        this.activeSlide = (this.activeSlide + 1) % this.ftcPhotos.length
      }, 3500)
    },
    goTo(i) {
      this.prevSlide = this.activeSlide
      this.activeSlide = i
      clearInterval(this.slideTimer)
      this.startSlideshow()
    }
  }
}
</script>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--blue-dark), var(--blue-primary));
  padding: 5rem 0;
  text-align: center;
}
.page-header h1 { font-size: clamp(1.8rem, 9vw, 3rem); overflow-wrap: anywhere; font-weight: 800; margin-bottom: 1rem; }
.page-header p { color: var(--blue-lightest); font-size: 1.1rem; opacity: 0.9; max-width: 600px; margin: 0 auto; }

.story-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.story-grid p { color: var(--gray); line-height: 1.8; }
.story-img {
  width: 100%;
  border-radius: 12px;
  border: 2px solid var(--blue-primary);
  box-shadow: 0 8px 30px rgba(0,87,255,0.2);
}

.motto-section {
  background: linear-gradient(135deg, var(--blue-medium), var(--blue-primary));
  padding: 4rem 2rem;
}
.motto-text {
  font-size: 1.5rem;
  font-style: italic;
  font-weight: 500;
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.6;
}
.motto-attr { color: var(--blue-lightest); font-size: 0.95rem; }

.first-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}
.first-section p { color: var(--gray); line-height: 1.8; }

/* Slideshow */
.slideshow {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid var(--blue-primary);
  box-shadow: 0 8px 30px rgba(0,87,255,0.25);
  background-color: #000;
}

.slide-track {
  position: relative;
  width: 100%;
  height: 320px;
}

.slide-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.7s ease;
}
.slide-img.active { opacity: 1; z-index: 2; }
.slide-img.prev { opacity: 0; z-index: 1; }

.slide-dots {
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.7rem;
  background-color: rgba(0,0,0,0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 3;
}
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background-color: rgba(255,255,255,0.4);
  cursor: pointer;
  transition: background-color 0.2s, transform 0.2s;
  padding: 0;
}
.dot.active { background-color: var(--white); transform: scale(1.3); }

.goal-card {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  padding: 1.2rem 1.5rem;
}
.goal-icon { font-size: 1.5rem; flex-shrink: 0; }
.goal-card p { color: var(--gray); line-height: 1.6; }

@media (max-width: 768px) {
  .story-grid, .first-section { grid-template-columns: 1fr; }
  .page-header h1 { font-size: 2rem; }
  .motto-text { font-size: 1.2rem; }
}
</style>
