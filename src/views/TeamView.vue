<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Meet The Team</h1>
        <div class="divider"></div>
        <p>8 members. 2 coaches. One goal.</p>
      </div>
    </section>

    <!-- Members Grid -->
    <section class="section">
      <div class="container">
        <h2 class="section-title">2025–26 Members</h2>
        <div class="divider"></div>
        <div class="grid-3">
          <div class="card member-card" v-for="m in members" :key="m.name">
            <div class="member-avatar">
              <img v-if="m.photo" :src="m.photo" :alt="m.name" class="avatar-photo" />
              <div v-else class="avatar-logo-wrap">
                <img src="/images/logo.png" alt="Trailblazers" class="avatar-logo" />
              </div>
            </div>
            <h3>{{ m.name }}</h3>
            <p class="member-role">{{ m.role }}</p>
            <p class="member-bio">{{ m.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Sub-Teams -->
    <section class="section" style="background-color: rgba(0,56,184,0.15)">
      <div class="container">
        <h2 class="section-title">Sub-Teams</h2>
        <div class="divider"></div>
        <div class="grid-2">
          <div class="card subteam-card" v-for="sub in subteams" :key="sub.name">
                        <div>
              <h3>{{ sub.name }}</h3>
              <p class="subteam-desc">{{ sub.desc }}</p>
              <div style="margin-top:0.8rem">
                <span class="tag" v-for="m in sub.members" :key="m">{{ m }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Us -->
    <section class="section join-section">
      <div class="container" style="text-align:center">
        <h2 class="section-title">Join the Trailblazers</h2>
        <div class="divider"></div>
        <p style="color:var(--gray); max-width:600px; margin: 0 auto 2rem; line-height: 1.8">
          Interested in joining for the 2026–27 season? We're always looking for motivated students
          passionate about robotics, programming, design, or business/outreach. Reach out to learn more.
        </p>
        <RouterLink to="/contact" class="btn btn-primary">Get In Touch</RouterLink>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      members: [
        { name: 'Anvita', role: 'Presenter', bio: 'Led team presentations and represented the Trailblazers at judging sessions throughout the season.', photo: '/images/team/headshots/photo_anvita.jpg' },
        { name: 'Sanjit', role: 'Chassis Lead', bio: 'Designed the state robot chassis: short body with closer drive wheels, black polycarbonate plates with blue accents.', photo: '/images/team/headshots/photo_A.jpg' },
        { name: 'Akash', role: 'Intake / Transfer', bio: 'Built the mecanum vectored intake with custom Manar wheels and the open waterslide transfer system.', photo: '/images/team/headshots/photo_akash.jpg' },
        { name: 'Colter Hardy', role: 'Lead Programmer', bio: 'Leads the programming sub-team, writing autonomous routines, teleop code, and the AIMBOT odometry-based automatic aiming system.', photo: '/images/team/headshots/photo_colter.jpg' },
        { name: 'Abhijeet', role: 'Shooter Lead', bio: 'Engineered the custom 3D-printed turret bearing (240° rotation) and dual-motor flywheel shooter.', photo: '/images/team/headshots/photo_C.jpg' },
        { name: 'Manar', role: 'Captain / Redesign', bio: 'Led the mid-season robot redesign after coordinating with FRC expert Ben Martin from Team 2481.', photo: '/images/team/headshots/photo_manar.jpg' },
        { name: 'Aditya', role: 'Mechanical / CAD', bio: 'Contributes to robot design and CAD modeling, helping build and iterate on mechanical systems throughout the season.', photo: null },
        { name: 'Samuel', role: 'Mechanical / CAD', bio: 'Works on robot construction and CAD, bringing new ideas to the mechanical sub-team as a first-year member.', photo: null },
      ],
      subteams: [
        {
          name: 'Mechanical & Design',
          desc: 'Responsible for chassis design, robot assembly, and all physical mechanisms including intake, transfer, and shooter.',
          members: ['Sanjit', 'Akash', 'Manar', 'Abhijeet', 'Aditya', 'Samuel']
        },
        {
          name: 'Programming',
          desc: 'Wrote the autonomous routines, teleop code, and the AIMBOT odometry-based automatic aiming system.',
          members: ['Colter Hardy', '[ Member ]']
        },
        {
          name: 'Strategy & Scouting',
          desc: 'Analyzed game rules, scouted opponents, ran SWOT analyses after each meet, and set season priorities.',
          members: ['[ Member ]']
        },
        {
          name: 'Business & Outreach',
          desc: 'Managed the engineering portfolio, judging presentations, sponsor relations, and community outreach events.',
          members: ['Anvita', '[ Member ]']
        }
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

.member-card { text-align: center; }

.member-avatar {
  width: 110px;
  height: 110px;
  margin: 0 auto 1.2rem;
  position: relative;
  border-radius: 8px;
  background: linear-gradient(135deg, var(--blue-primary), var(--blue-medium));
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  display: block;
}

/* Logo placeholder */
.avatar-logo-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.2);
}

.avatar-logo {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.member-role { color: var(--blue-light); font-size: 0.9rem; font-weight: 600; margin: 0.3rem 0; }
.member-bio { color: var(--gray); font-size: 0.9rem; margin-top: 0.5rem; line-height: 1.6; }

.subteam-card { display: flex; gap: 1.5rem; align-items: flex-start; }
.subteam-icon { font-size: 2.5rem; flex-shrink: 0; }
.subteam-desc { color: var(--gray); font-size: 0.95rem; margin-top: 0.3rem; }

.join-section {
  background: linear-gradient(135deg, rgba(0,56,184,0.3), rgba(0,87,255,0.15));
}
</style>
