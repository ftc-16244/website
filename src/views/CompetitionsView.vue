<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Competitions</h1>
        <div class="divider"></div>
        <p>Our journey through every FIRST Tech Challenge season.</p>
      </div>
    </section>

    <!-- Current Season: BIOBUZZ -->
    <section class="section">
      <div class="container">
        <div class="season-badge">Current Season</div>
        <h2 class="section-title">2026–2027: BIOBUZZ</h2>
        <div class="divider"></div>

        <p class="biobuzz-intro">
          BIOBUZZ, presented by RTX, is the 2026–27 FIRST Tech Challenge game and part of the FIRST CANOPY
          biodiversity season. Two-team alliances, red and blue, compete on a 12-foot square field in a
          match that is all about pollination. The game manual also leans on the "spirit of the rule,"
          which gives referees more room for good-faith calls.
        </p>

        <div class="biobuzz-grid">
          <div class="awards-box">
            <h4>How a Match Works</h4>
            <ul>
              <li>30-second autonomous period</li>
              <li>2 minutes of driver control</li>
              <li>Pollen: roughly 3-inch yellow balls that both alliances can use</li>
              <li>Nectar: larger balls in alliance colors (8 red, 8 blue). A robot can only handle its own color.</li>
            </ul>
          </div>
          <div class="awards-box">
            <h4>Field Elements</h4>
            <ul>
              <li><strong>Hives:</strong> two cells on a pivot at the center of the field. Launch enough Pollen and Nectar into the upward cell and it tips to present the other one. AprilTags are mounted on the cells.</li>
              <li><strong>Flowers:</strong> four around the field. They take Pollen and Nectar, and alliances contest ownership as the match ends.</li>
            </ul>
          </div>
        </div>

        <h3 style="margin-top:3rem; color:var(--blue-light); font-size:1.4rem; margin-bottom:1.5rem; text-align:center">Season Timeline</h3>
        <div class="timeline">
          <div class="timeline-item done">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">September 12, 2026</span>
              <h4>BIOBUZZ Kickoff</h4>
              <p>FIRST revealed the 2026–27 game.</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">April 28 – May 1, 2027</span>
              <h4>FIRST Championship</h4>
              <p>Houston, Texas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Last Season -->
    <section class="section" style="background-color: rgba(0,56,184,0.15)">
      <div class="container">
        <div class="season-badge">Last Season</div>
        <h2 class="section-title">2025–2026: DECODE</h2>
        <div class="divider"></div>

        <div class="season-overview">
          <div>
            <p style="color:var(--gray); line-height:1.8">
              DECODE challenged teams to collect and score artifacts (game pieces) using a turret shooter
              into a classifier. Ranking points were earned by clearing the autonomous line and scoring
              purple artifacts in endgame. Our strategy prioritized high-volume artifact scoring over
              motif/pattern play, which proved highly effective.
            </p>
            <div class="awards-box" style="margin-top:1.5rem">
              <h4> Season Highlights</h4>
              <ul>
                <li> Qualified for State Championship</li>
                <li> Competed at Regionals (Peoria League)</li>
                <li> 3 full robot redesigns across the season</li>
                <li> AIMBOT auto-aim system debuted at Meet 1</li>
                <li> Co-hosted Engineering Portfolio workshop</li>
              </ul>
            </div>
          </div>
          <img src="/images/robots/State_Front.png" alt="State Robot" class="season-robot-img" />
        </div>

        <!-- Season Timeline -->
        <h3 style="margin-top:3rem; color:var(--blue-light); font-size:1.4rem; margin-bottom:1.5rem; text-align:center">Season Timeline</h3>
        <div class="timeline">
          <div class="timeline-item" v-for="ev in timeline" :key="ev.name" :class="{ done: ev.done }">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <span class="timeline-date">{{ ev.date }}</span>
              <h4>{{ ev.name }}</h4>
              <p>{{ ev.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Past Seasons -->
    <section class="section" style="background-color: rgba(0,56,184,0.15)">
      <div class="container">
        <h2 class="section-title">Past Seasons</h2>
        <div class="divider"></div>
        <div class="seasons-list">
          <div class="card season-card" v-for="s in pastSeasons" :key="s.year">
            <div class="season-year">{{ s.year }}</div>
            <div class="season-content">
              <h3>{{ s.name }}</h3>
              <p class="season-summary">{{ s.summary }}</p>
              <div style="margin-top:0.8rem">
                <span class="tag" v-for="a in s.awards" :key="a">{{ a }}</span>
              </div>
            </div>
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
      timeline: [
        { date: 'August 2025', name: 'Peoria Ignite', desc: 'Pre-season event; presented on the new DECODE advancement scoring system.', done: true },
        { date: 'August 2025', name: 'Robot Rumble', desc: 'Off-season scrimmage to test early robot concepts and intake designs.', done: true },
        { date: 'November 2025', name: 'Meet 1', desc: 'First official meet. Debuted our fixed-shooter "Chum Bucket" robot with AIMBOT auto-aim.', done: true },
        { date: 'December 2025', name: 'Meet 2', desc: 'Improved enclosed waterslide design. SWOT analysis revealed compression issues.', done: true },
        { date: 'January 2026', name: 'Meet 3', desc: 'Full robot redesign: mecanum intake, open waterslide, 240° turret with dual motors.', done: true },
        { date: 'February 2026', name: "Engineer's Day", desc: "Demonstrated robot at Caterpillar's Engineering Day at the Peoria Riverfront Museum for 50+ elementary students.", done: true },
        { date: 'February 2026', name: 'Regionals', desc: 'Competed at the Peoria League Regional tournament and qualified for State.', done: true },
        { date: 'March 2026', name: 'State Championship', desc: 'Competed at the Illinois State FTC Championship.', done: true },
      ],
      pastSeasons: [
        {
          year: '2024–2025',
          name: 'Into the Deep',
          summary: '2nd place at Regionals as Finalist Alliance Captain. Won 1st place Innovate Award. Advanced to Illinois State for the third consecutive year, placing 4th in qualifying and earning the Cooper Division Finalist Alliance Captain award.',
          awards: ['1st Place Innovate Award', 'Finalist Alliance Captain – Regionals', 'Cooper Division Finalist – State']
        },
        {
          year: '2023–2024',
          name: 'Center Stage',
          summary: 'Maintained a top-3 ranking through Regionals and finished as Finalist Alliance Captain. Advanced to State for the second year in a row. Placed 9th in qualifying at the Illinois State Championship, then were selected by the 1st place team, and the alliance went on to win the Illinois State Championship.',
          awards: ['Illinois State Champions', '3rd Place Inspire Award', '2nd Place Think Award', 'Finalist Alliance Captain – Regionals']
        },
        {
          year: '2022–2023',
          name: 'Power Play',
          summary: 'Earned a 2nd place Inspire Award and a Think Award, advancing to the Illinois State Championship via the Inspire Award. This was the team\'s first in-person State experience. Finished in the middle of the pack and gained valuable experience competing at the highest level.',
          awards: ['2nd Place Inspire Award', 'Think Award', 'State Qualifier']
        },
        {
          year: '2021–2022',
          name: 'Freight Frenzy',
          summary: 'A welcome return to in-person competition after Covid. Added OpenCV vision processing, odometry, and state machines to the programming toolkit. Finished 4th at Regionals and served as alliance captain of the finalist alliance. State qualification was limited that year due to Covid restrictions on team count.',
          awards: ['4th Place – Regionals', 'Finalist Alliance Captain']
        },
        {
          year: '2020–2021',
          name: 'Ultimate Goal',
          summary: 'A challenging virtual season due to Covid, with meetings and competitions held remotely. Despite the obstacles, the team finished 2nd at the Regional Tournament and advanced to the Illinois State Competition, finishing 8th overall.',
          awards: ['Collins Aerospace Design Award', '2nd Place – Regionals', '8th Place – State']
        },
        {
          year: '2019–2020',
          name: 'Skystone',
          summary: 'The Trailblazers\' first ever FTC season after transitioning from FLL. Built a straightforward robot and learned the fundamentals of FTC competition. Finished with a solid performance for a rookie team and laid the foundation for years to come.',
          awards: ['Rookie Season']
        },
      ]
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
.page-header h1 { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; }
.page-header p { color: var(--blue-lightest); font-size: 1.1rem; }

.season-badge {
  display: table;
  margin: 0 auto;
  background-color: var(--blue-medium);
  color: var(--white);
  padding: 0.4rem 1.2rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
}

.season-overview {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.season-robot-img {
  width: 100%;
  border-radius: 12px;
  border: 2px solid var(--blue-primary);
  background-color: rgba(0,56,184,0.1);
  object-fit: contain;
  height: 300px;
}

.awards-box {
  background-color: rgba(0,56,184,0.3);
  border-radius: 8px;
  padding: 1.2rem 1.5rem;
}
.awards-box h4 { color: var(--blue-light); margin-bottom: 0.8rem; }
.awards-box ul { list-style: none; }
.awards-box li { color: var(--gray); padding: 0.4rem 0; border-bottom: 1px solid rgba(0,87,255,0.1); }

.biobuzz-intro { color: var(--gray); line-height: 1.8; max-width: 800px; margin: 0 auto 2rem; text-align: center; }
.biobuzz-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; align-items: stretch; }
@media (max-width: 768px) { .biobuzz-grid { grid-template-columns: 1fr; } }

/* Timeline */
.timeline { position: relative; padding-left: 2rem; max-width: 720px; margin: 0 auto; }
.timeline::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(to bottom, var(--blue-medium), var(--blue-primary));
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
  opacity: 0.5;
}
.timeline-item.done { opacity: 1; }

.timeline-dot {
  position: absolute;
  left: -2rem;
  top: 0.3rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--blue-dark);
  border: 2px solid var(--blue-primary);
  transition: background 0.2s;
}
.timeline-item.done .timeline-dot {
  background-color: var(--blue-medium);
  border-color: var(--blue-light);
}

.timeline-content { padding-left: 0.5rem; }
.timeline-date { color: var(--blue-light); font-size: 0.85rem; font-weight: 600; }
.timeline-content h4 { color: var(--white); font-size: 1.1rem; margin: 0.2rem 0; }
.timeline-content p { color: var(--gray); font-size: 0.9rem; line-height: 1.6; }

.seasons-list { display: flex; flex-direction: column; gap: 1.2rem; }
.season-card { display: flex; gap: 2rem; align-items: flex-start; }
.season-year {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--blue-light);
  min-width: 130px;
  flex-shrink: 0;
}
.season-summary { color: var(--gray); margin-top: 0.3rem; font-size: 0.95rem; line-height: 1.6; }

@media (max-width: 768px) {
  .season-overview { grid-template-columns: 1fr; }
  .season-card { flex-direction: column; gap: 0.3rem; }
}
</style>
