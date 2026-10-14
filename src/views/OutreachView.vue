<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Outreach</h1>
        <div class="divider"></div>
        <p>Spreading and sustaining FIRST in the Peoria community, one event at a time.</p>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-box">
            <span class="stat-num">50+</span>
            <span class="stat-label">Students at Caterpillar Demo</span>
          </div>
          <div class="stat-box">
            <span class="stat-num">30+</span>
            <span class="stat-label">Portfolio Workshop Attendees</span>
          </div>
          <div class="stat-box">
            <span class="stat-num">30+</span>
            <span class="stat-label">CAD/Onshape Students</span>
          </div>
          <div class="stat-box">
            <span class="stat-num">20+</span>
            <span class="stat-label">Sensor Workshop Students</span>
          </div>
        </div>
      </div>
    </section>

    <!-- 2025-26 Outreach -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">2025–26 Outreach Events</h2>
        <div class="divider"></div>
        <div class="outreach-list">
          <div class="outreach-item card" v-for="ev in outreach2526" :key="ev.name">
            <div class="outreach-left">
              <span class="outreach-icon">{{ ev.icon }}</span>
              <span class="outreach-date">{{ ev.date }}</span>
            </div>
            <div class="outreach-right">
              <h3>{{ ev.name }}</h3>
              <p>{{ ev.desc }}</p>
              <div style="margin-top:0.8rem" v-if="ev.tags">
                <span class="tag" v-for="t in ev.tags" :key="t">{{ t }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Workshops Deep Dive -->
    <section class="section" style="background-color: rgba(0,56,184,0.15)">
      <div class="container">
        <h2 class="section-title">Workshops</h2>
        <div class="divider"></div>
        <div class="grid-3">
          <div class="card" v-for="w in workshops" :key="w.name" style="text-align:center">
            <div style="font-size:2.5rem; margin-bottom:1rem">{{ w.icon }}</div>
            <h3>{{ w.name }}</h3>
            <p class="workshop-stat">{{ w.stat }}</p>
            <p style="color:var(--gray); font-size:0.9rem; margin-top:0.5rem; line-height:1.6">{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner With Us -->
    <section class="section">
      <div class="container" style="text-align:center">
        <h2 class="section-title">Partner With Us</h2>
        <div class="divider"></div>
        <p style="color:var(--gray); max-width:600px; margin:0 auto 2rem; line-height:1.8">
          We love hosting STEM workshops, demoing our robot, and partnering with schools and organizations
          in the Peoria area. If you'd like to invite us to your school or event, reach out below.
        </p>
        <RouterLink to="/contact" class="btn btn-primary">Contact Us</RouterLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      outreach2526: [
        {
          icon: '', name: 'FLL Connection', date: 'Pre-Season',
          desc: 'Reached out to multiple FLL teams interested in forming FTC teams. Provided guidance on the transition, helping grow our Peoria League and sustain FIRST locally.',
          tags: ['FLL', 'Recruitment', 'FIRST']
        },
        {
          icon: '', name: 'DECODE Kickoff: Advancement Scoring Presentation', date: 'September 2025',
          desc: 'At kickoff we presented a Q&A on the new DECODE advancement/scoring system, highlighting differences from past seasons with detailed examples and scenarios.',
          tags: ['Kickoff', 'Education', 'Strategy']
        },
        {
          icon: '', name: "Caterpillar's Engineering Day", date: 'February 2026',
          desc: "Ran our robot at Caterpillar's Engineering Day at the Peoria Riverfront Museum. Demonstrated the passion FIRST students have for robotics to 50+ elementary-aged students.",
          tags: ['Demo', '50+ Students', 'Elementary']
        },
        {
          icon: '', name: 'Portfolio & Judging Workshop', date: 'Season',
          desc: 'Co-hosted with HOW #14469, a portfolio & judging workshop for 30+ participants. Covered regionals, scoring, judging, booth, and portfolio details.',
          tags: ['Workshop', '30+ Attendees', 'Co-Hosted']
        },
        {
          icon: '', name: 'Sensor Integration Class at Peoria Ignite', date: 'August 2025',
          desc: 'Hosted 20 individuals at the Peoria Ignite event. Taught servo basics, advanced usage (color detection, lighting independence), and PID utilization in lift positioning.',
          tags: ['Sensors', 'Programming', '20 Students']
        },
        {
          icon: '', name: 'CAD (Onshape) Workshop', date: 'Season',
          desc: 'Advanced Onshape class for 30+ participants, covering publishing geometry, derived parts, advanced mates with limits, how to lighten parts, and Booleans with spur gears.',
          tags: ['CAD', 'Onshape', '30+ Students']
        },
      ],
      workshops: [
        { icon: '', name: 'Portfolio & Judging', stat: '30+ Attendees', desc: 'Co-hosted with HOW #14469. Gave teams a full overview of regionals, judging process, portfolio structure, and booth presentation.' },
        { icon: '', name: 'Sensor Integration', stat: '20 Students', desc: 'Covered servo basics, advanced color detection, lighting-independent sensing, and PID lift control.' },
        { icon: '', name: 'CAD Onshape', stat: '30+ Students', desc: 'Advanced CAD session covering derived parts, geometry constraints, part lightening, and spur gear Booleans.' },
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
.page-header h1 { font-size: clamp(1.8rem, 9vw, 3rem); overflow-wrap: anywhere; font-weight: 800; margin-bottom: 1rem; }
.page-header p { color: var(--blue-lightest); font-size: 1.1rem; }

.stats-section {
  background: linear-gradient(to right, var(--blue-primary), var(--blue-medium));
  padding: 3rem 0;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
}
.stat-box { display: flex; flex-direction: column; gap: 0.4rem; }
.stat-num { font-size: 2.5rem; font-weight: 800; color: var(--white); }
.stat-label { font-size: 0.85rem; color: var(--blue-lightest); opacity: 0.9; }

.outreach-list { display: flex; flex-direction: column; gap: 1.5rem; }
.outreach-item { display: flex; gap: 2rem; align-items: flex-start; }
.outreach-left { display: flex; flex-direction: column; align-items: center; gap: 0.3rem; min-width: 80px; }
.outreach-icon { font-size: 2.2rem; }
.outreach-date { color: var(--blue-light); font-size: 0.8rem; font-weight: 600; text-align: center; }
.outreach-right h3 { color: var(--white); margin-bottom: 0.4rem; }
.outreach-right p { color: var(--gray); font-size: 0.95rem; line-height: 1.7; }

.workshop-stat { color: var(--blue-light); font-weight: 700; font-size: 1.1rem; margin: 0.3rem 0; }

@media (max-width: 768px) {
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .outreach-item { flex-direction: column; gap: 1rem; }
}
</style>
