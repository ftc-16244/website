<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Meet The Team</h1>
        <div class="divider"></div>
        <p>8 members. 2 coaches. One goal.</p>
      </div>
    </section>

    <!-- Group photo -->
    <section class="group-section">
      <img src="/images/team/team_photo.jpg" alt="The Trailblazers team at Regionals" class="group-photo" />
      <div class="container">
        <ul class="roster">
          <li v-for="m in members" :key="m.name">
            <span class="roster-name">{{ m.name }}</span>
            <span class="roster-role">{{ m.role }}</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Sub-Teams -->
    <section class="section" style="background-color: var(--blue-primary)">
      <div class="container">
        <h2 class="section-title" style="text-align:left">Who Does What</h2>
        <div class="divider" style="margin-left:0"></div>
        <div class="subteam" v-for="sub in subteams" :key="sub.name">
          <h3>{{ sub.name }}</h3>
          <p class="subteam-desc">{{ sub.desc }}</p>
          <p class="subteam-members">{{ sub.members.join(', ') }}</p>
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
          members: ['Colter Hardy']
        },
        {
          name: 'Business & Outreach',
          desc: 'Managed the engineering portfolio, judging presentations, sponsor relations, and community outreach events.',
          members: ['Anvita']
        }
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

.group-section { background: var(--blue-darkest); padding-bottom: 3rem; }
.group-photo { width: 100%; max-height: 80vh; object-fit: cover; object-position: center 60%; display: block; }
.roster {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem 2rem;
  padding-top: 2rem;
}
.roster-name { display: block; font-size: 1.15rem; font-weight: 700; }
.roster-role { display: block; color: var(--accent); font-size: 0.9rem; font-weight: 600; }

.subteam { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 2rem; padding: 1.3rem 0; border-top: 1px solid rgba(255,255,255,0.25); align-items: baseline; }
.subteam h3 { font-size: 1.15rem; }
.subteam-desc { color: var(--blue-lightest); line-height: 1.6; }
.subteam-members { color: var(--accent); font-weight: 600; }

@media (max-width: 900px) {
  .roster { grid-template-columns: repeat(2, 1fr); }
  .subteam { grid-template-columns: 1fr; gap: 0.4rem; }
}

.join-section {
  background: var(--blue-darkest);
}
</style>
