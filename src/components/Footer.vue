<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-row">
                        <div>
              <p class="brand-name">Trailblazers</p>
              <p class="brand-number">FTC Team #16244</p>
            </div>
          </div>
          <p class="brand-desc">
            Inspiring the next generation of engineers and innovators through FIRST Tech Challenge robotics.
          </p>
        </div>

        <div class="footer-links">
          <h4>Pages</h4>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/team">Team</RouterLink></li>
            <li><RouterLink to="/robot-gallery">Robot Gallery</RouterLink></li>
            <li><RouterLink to="/competitions">Competitions</RouterLink></li>
            <li><RouterLink to="/outreach">Outreach</RouterLink></li>
            <li><RouterLink to="/sponsors">Sponsors</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>

        <div class="footer-social">
          <h4>Connect</h4>
          <ul>
            <li><a href="https://www.instagram.com/the_trailblazers_16244" target="_blank">Instagram</a></li>
            <li><a href="https://www.youtube.com/@ftctrailblazers16244" target="_blank">YouTube</a></li>
            <li><a href="mailto:ftc16244@gmail.com">ftc16244@gmail.com</a></li>
            <li><a href="https://www.firstinspires.org" target="_blank">FIRST Inspires</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Trailblazers FTC #16244. All rights reserved.</p>
        <p class="first-note">Powered by <strong>FIRST Tech Challenge</strong></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #060f1e;
  border-top: 1px solid var(--blue-primary);
  padding: 4rem 0 2rem;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}

.brand-icon { font-size: 2rem; }

.brand-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--white);
}

.brand-number {
  font-size: 0.8rem;
  color: var(--blue-light);
}

.brand-desc {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.7;
}

.footer-links h4,
.footer-social h4 {
  color: var(--blue-light);
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links ul,
.footer-social ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links a,
.footer-social a {
  color: var(--gray);
  font-size: 0.95rem;
  transition: color 0.2s;
}

.footer-links a:hover,
.footer-social a:hover {
  color: var(--blue-light);
}

.footer-bottom {
  border-top: 1px solid rgba(66, 165, 245, 0.2);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  color: var(--gray);
  font-size: 0.9rem;
}

.first-note strong {
  color: var(--blue-light);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
