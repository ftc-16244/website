<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Robot Gallery</h1>
        <div class="divider"></div>
        <p>DECODE 2025–26: three robots, one season.</p>
      </div>
    </section>

    <!-- State / Final Robot -->
    <section class="section">
      <div class="container">
        <div class="season-badge">State Robot · 2025–26 DECODE</div>
        <h2 class="section-title" style="margin-top:0.5rem">Final Robot</h2>
        <div class="divider"></div>
        <div class="current-robot">
          <div class="robot-photos">
            <img :src="activePhoto" alt="State Robot" class="main-photo" />
            <div class="thumb-row">
              <img v-for="p in statePhotos" :key="p.src" :src="p.src" :alt="p.label"
                class="thumb" :class="{ active: activePhoto === p.src }"
                @click="activePhoto = p.src" />
            </div>
          </div>
          <div class="robot-info">
            <h3 class="robot-name">State Robot</h3>
            <p class="robot-desc">
              A short-body mecanum drivetrain with black polycarbonate plates and blue accents.
              Features a vectored mecanum intake with custom Manar wheels, an open waterslide
              transfer with belt/pulley system, and a 240° turret shooter with dual motors and
              Gobilda flywheel weights for faster spin-up and recovery.
            </p>
            <div class="specs">
              <h4>Specs & Features</h4>
              <ul>
                <li><span class="spec-label">Drive Train:</span> Mecanum (short body, close wheel spacing)</li>
                <li><span class="spec-label">Intake:</span> Mecanum vectoring + custom Manar wheels + silicone tubing</li>
                <li><span class="spec-label">Transfer:</span> Open waterslide with belts & pulleys, 2 servos</li>
                <li><span class="spec-label">Shooter:</span> Custom 3D-printed turret, 240° rotation, dual motors + flywheels</li>
                <li><span class="spec-label">Autonomous:</span> AIMBOT via odometry, fully automatic aiming</li>
                <li><span class="spec-label">Programming:</span> Java (FTC SDK)</li>
              </ul>
            </div>
            <div style="margin-top:1rem">
              <span class="tag">DECODE</span>
              <span class="tag">2025–2026</span>
              <span class="tag">State Qualifier</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet Evolution -->
    <section class="section" style="background-color: rgba(0,56,184,0.15)">
      <div class="container">
        <h2 class="section-title">Robot Evolution</h2>
        <p class="section-subtitle">How our robot changed across the 2025–26 DECODE season</p>
        <div class="divider"></div>
        <div class="grid-3">
          <div class="card evolution-card" v-for="r in evolution" :key="r.meet">
            <img v-if="r.img" :src="r.img" :alt="r.meet" class="evo-img" />
                        <div class="evo-badge">{{ r.meet }}</div>
            <h3>{{ r.title }}</h3>
            <ul class="evo-list">
              <li v-for="pt in r.points" :key="pt">{{ pt }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Design Philosophy -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">Design Philosophy</h2>
        <div class="divider"></div>
        <div class="grid-2">
          <div class="card" v-for="p in philosophy" :key="p.title" style="padding: 1.5rem">
                        <h3 style="margin-top:0.7rem; color:var(--blue-light)">{{ p.title }}</h3>
            <p style="color:var(--gray); margin-top:0.5rem; font-size:0.95rem; line-height:1.7">{{ p.desc }}</p>
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
      activePhoto: '/images/robots/State_ISO.png',
      statePhotos: [
        { src: '/images/robots/State_ISO.png', label: 'Isometric View' },
        { src: '/images/robots/State_Front.png', label: 'Front View' },
        { src: '/images/robots/State_LH_View.png', label: 'Left/Right View' },
        { src: '/images/robots/State_Section_View.png', label: 'Section View' },
      ],
      evolution: [
        {
          meet: 'Meet 1',
          title: 'Shooter V1: "Chum Bucket"',
          img: null,
          points: [
            'Fixed 40° launch angle shooter',
            'Single 6000 RPM motor, 4 wheels for inertia',
            'Ramp + kicker servo into "chum bucket" feeder',
            '180° turret rotation',
            '~1 sec/artifact throughput',
          ]
        },
        {
          meet: 'Meet 2–3',
          title: 'Redesign: Enclosed Waterslide',
          img: '/images/robots/M3_Top.png',
          points: [
            'Enclosed waterslide transfer (later opened up)',
            'Slimmer active intake without vectoring',
            'Caused compression issues on artifacts',
            '180° turret still in place',
            'SWOT analysis revealed intake weaknesses',
          ]
        },
        {
          meet: 'State Robot',
          title: 'Full Rebuild: AIMBOT',
          img: '/images/robots/State_LH_View.png',
          points: [
            'Mecanum vectored intake, Manar wheels',
            'Open waterslide with 240° turret',
            'Dual motors + Gobilda flywheel weights',
            'Shorter chassis for easier parking',
            'AIMBOT odometry auto-aim system',
          ]
        }
      ],
      philosophy: [
        { title: 'Model Before You Build', desc: 'We CAD as much of the robot as possible before cutting parts, avoiding costly physical mistakes and reducing iteration time.' },
        { title: 'Data-Driven Decisions', desc: 'From trajectory spreadsheets to CFD models for drag, every design choice is backed by numbers, not guesses.' },
        { title: 'Two Robots Per Season', desc: 'We plan for two robots: one for Meet 1, a full redesign by Meet 3. This controlled risk keeps us competitive without reckless changes.' },
        { title: 'Off-Season R&D', desc: 'Each off-season we investigate new tech like odometry pinpoints, REV Servo Hubs, and swerve gearing, so nothing experimental debuts mid-season.' },
      ]
    }
  }
}
</script>

<style scoped>
.page-header {
  background: var(--blue-primary);
  padding: 5rem 0;
  text-align: center;
}
.page-header h1 { font-size: 3rem; font-weight: 800; margin-bottom: 1rem; }
.page-header p { color: var(--blue-lightest); font-size: 1.1rem; }

.season-badge {
  display: inline-block;
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

.current-robot {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

.robot-photos { display: flex; flex-direction: column; gap: 1rem; }

.main-photo {
  width: 100%;
  border-radius: 12px;
  border: 2px solid var(--blue-primary);
  background-color: rgba(0,56,184,0.1);
  object-fit: contain;
  height: 320px;
}

.thumb-row { display: flex; gap: 0.7rem; }
.thumb {
  flex: 1;
  height: 80px;
  object-fit: contain;
  border-radius: 8px;
  border: 2px solid var(--blue-primary);
  cursor: pointer;
  background-color: rgba(0,56,184,0.1);
  opacity: 0.6;
  transition: opacity 0.2s, border-color 0.2s;
}
.thumb:hover, .thumb.active { opacity: 1; border-color: var(--blue-light); }

.robot-name { font-size: 1.8rem; font-weight: 700; color: var(--blue-light); margin-bottom: 1rem; }
.robot-desc { color: var(--gray); line-height: 1.8; margin-bottom: 1.5rem; }

.specs { background-color: rgba(0,56,184,0.3); border-radius: 8px; padding: 1.2rem 1.5rem; }
.specs h4 { color: var(--blue-light); margin-bottom: 0.8rem; }
.specs ul { list-style: none; display: flex; flex-direction: column; gap: 0.5rem; }
.specs li { color: var(--gray); font-size: 0.95rem; }
.spec-label { color: var(--white); font-weight: 600; margin-right: 0.5rem; }

.evolution-card { display: flex; flex-direction: column; gap: 0.5rem; }
.evo-img { width: 100%; height: 180px; object-fit: contain; border-radius: 8px; border: 1px solid var(--blue-primary); background-color: rgba(0,56,184,0.15); }
.evo-badge {
  display: inline-block;
  background-color: var(--blue-primary);
  color: var(--white);
  padding: 0.2rem 0.7rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  width: fit-content;
  margin-top: 0.3rem;
}
.evo-list { list-style: none; padding: 0; margin-top: 0.5rem; }
.evo-list li { color: var(--gray); font-size: 0.88rem; padding: 0.25rem 0; border-bottom: 1px solid rgba(0,87,255,0.1); line-height: 1.5; }
.evo-list li::before { content: '→ '; color: var(--blue-light); }

@media (max-width: 900px) {
  .current-robot { grid-template-columns: 1fr; }
}
</style>
