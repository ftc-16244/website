<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Our Sponsors</h1>
        <div class="divider"></div>
        <p>We couldn't do this without the generous support of our partners.</p>
      </div>
    </section>

    <!-- Platinum Sponsors -->
    <section class="section">
      <div class="container">
        <div class="sponsor-tier-label platinum"> Platinum Sponsors</div>
        <div class="sponsors-showcase">
          <div class="sponsor-block" v-for="s in platinum" :key="s.name">
            <div class="sponsor-logo-area" :class="s.dark ? 'dark-bg' : ''">
              <img v-if="s.logo" :src="s.logo" :alt="s.name + ' logo'" class="sponsor-img" />
              <span v-else>[ {{ s.name }} Logo ]</span>
            </div>
            <p class="sponsor-name">{{ s.name }}</p>
            <p class="sponsor-blurb">{{ s.blurb }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Become a Sponsor -->
    <section class="section sponsor-cta">
      <div class="container">
        <div class="cta-grid">
          <div>
            <h2 class="section-title" style="text-align:left">Become a Sponsor</h2>
            <div class="divider" style="margin-left:0"></div>
            <p style="color:var(--gray); line-height:1.8; margin-bottom:1.5rem">
              Sponsoring the Trailblazers means investing in the next generation of engineers
              and leaders. Your support helps us cover competition registration, robot parts,
              travel, and team development.
            </p>
            <div class="tiers">
              <div class="tier-row" v-for="t in tiers" :key="t.name">
                <span class="tier-name">{{ t.icon }} {{ t.name }}</span>
                <span class="tier-amount">{{ t.amount }}</span>
                <span class="tier-perks">{{ t.perks }}</span>
              </div>
            </div>
            <RouterLink to="/contact" class="btn btn-primary" style="margin-top:2rem">Contact Us to Sponsor</RouterLink>
          </div>
          <div class="sponsor-logo-showcase">
            <img src="/images/logo_circle.png" alt="Trailblazers Branding" class="sponsor-brand-img" />
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
      platinum: [
        {
          name: 'ARi',
          logo: '/images/sponsors/ARI-website.png',
          dark: false,
          blurb: 'ARi generously provides our team with a full meeting space, including meeting rooms, a cafeteria, and a large area to host our field, tools, and materials.'
        },
        {
          name: 'Caterpillar & Caterpillar Foundation',
          logo: '/images/sponsors/caterpillar_logo.svg',
          dark: false,
          blurb: 'Caterpillar and the Caterpillar Foundation provide $1,500 in funding that helps cover robot parts, competition registration, and team development.'
        },
      ],
      tiers: [
        { icon: '', name: 'Platinum', amount: '$500+', perks: 'Large logo on robot, jersey, website banner, social media feature' },
        { icon: '', name: 'Gold', amount: '$250–499', perks: 'Logo on robot & website, social media shoutout' },
        { icon: '', name: 'Silver', amount: '$100–249', perks: 'Name on website and team materials' },
        { icon: '', name: 'In-Kind', amount: 'Materials / Services', perks: 'Logo on website, acknowledgment at events' },
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

.sponsor-tier-label {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  display: inline-block;
}
.platinum { background-color: rgba(255,215,0,0.1); color: #ffd700; border: 1px solid #ffd700; }

.sponsors-showcase {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: center;
}

.sponsor-block { text-align: center; max-width: 320px; }

.sponsor-logo-area {
  width: 300px;
  height: 150px;
  background-color: #ffffff;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--gray);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
}
.sponsor-logo-area.dark-bg { background-color: #111111; }

.sponsor-img { width: 100%; height: 100%; object-fit: contain; padding: 1.5rem; }

.sponsor-name { color: var(--white); font-weight: 700; font-size: 1.1rem; }
.sponsor-blurb { color: var(--gray); font-size: 0.9rem; margin-top: 0.5rem; line-height: 1.7; }

.cta-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }

.tiers { display: flex; flex-direction: column; gap: 0.8rem; }
.tier-row {
  display: grid;
  grid-template-columns: 130px 120px 1fr;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background-color: rgba(0,56,184,0.3);
  border-radius: 6px;
  align-items: center;
  font-size: 0.9rem;
}
.tier-name { font-weight: 700; color: var(--white); }
.tier-amount { color: var(--blue-light); font-weight: 600; }
.tier-perks { color: var(--gray); }

.sponsor-logo-showcase {
  display: flex;
  justify-content: center;
  align-items: center;
}
.sponsor-brand-img {
  width: 280px;
  height: 280px;
  object-fit: contain;
}

@media (max-width: 900px) {
  .cta-grid { grid-template-columns: 1fr; }
  .tier-row { grid-template-columns: 1fr 1fr; }
  .tier-perks { display: none; }
  .sponsor-logo-area { width: 100%; }
}
</style>
