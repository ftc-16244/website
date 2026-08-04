<template>
  <main>
    <section class="page-header">
      <div class="container">
        <h1>Contact Us</h1>
        <div class="divider"></div>
        <p>Get in touch with the Trailblazers.</p>
      </div>
    </section>

    <section class="section">
      <div class="container contact-grid">

        <!-- Contact Info -->
        <div class="contact-info">
          <h2 style="color:var(--blue-light); margin-bottom:1.5rem">Reach Out</h2>
          <div class="info-block" v-for="item in info" :key="item.label">
            <div>
              <p class="info-label">{{ item.label }}</p>
              <a v-if="item.href" :href="item.href" class="info-value info-link">{{ item.value }}</a>
              <p v-else class="info-value">{{ item.value }}</p>
            </div>
          </div>

          <div style="margin-top:2rem">
            <h3 style="color:var(--blue-light); margin-bottom:1rem">Follow Us</h3>
            <div class="social-links">
              <a href="https://www.instagram.com/the_trailblazers_16244" class="social-btn" target="_blank">Instagram</a>
              <a href="https://www.youtube.com/@ftctrailblazers16244" class="social-btn" target="_blank">YouTube</a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="card contact-form">
          <h2 style="margin-bottom:1.5rem">Send a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label>Your Name</label>
              <input v-model="form.name" type="text" placeholder="[ Your name ]" required />
            </div>
            <div class="form-group">
              <label>Email Address</label>
              <input v-model="form.email" type="email" placeholder="[ your@email.com ]" required />
            </div>
            <div class="form-group">
              <label>Subject</label>
              <select v-model="form.subject">
                <option value="">Select a subject</option>
                <option>Sponsorship Inquiry</option>
                <option>Outreach / Partnership</option>
                <option>Media / Press</option>
                <option>Join the Team</option>
                <option>General Question</option>
              </select>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea v-model="form.message" placeholder="[ Write your message here... ]" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%">Send Message</button>
            <p v-if="submitted" class="success-msg"> Message sent! We'll get back to you soon.</p>
          </form>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section" style="background-color: rgba(13,71,161,0.15)">
      <div class="container">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <div class="divider"></div>
        <div class="faq-list">
          <div class="faq-item" v-for="faq in faqs" :key="faq.q" @click="faq.open = !faq.open">
            <div class="faq-question">
              <span>{{ faq.q }}</span>
              <span class="faq-arrow" :class="{ rotated: faq.open }"></span>
            </div>
            <div class="faq-answer" v-if="faq.open">{{ faq.a }}</div>
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
      submitted: false,
      form: { name: '', email: '', subject: '', message: '' },
      info: [
        { label: 'Email', value: 'trailblazers16244@gmail.com', href: 'mailto:trailblazers16244@gmail.com' },
        { label: 'Location', value: 'Dunlap, Illinois', href: null },
        { label: 'League', value: 'Peoria FTC League', href: null },
        { label: 'Coaches', value: '2 Coaches · 9 Members', href: null },
      ],
      faqs: [
        { q: 'How can I join the Trailblazers?', a: '[ Describe tryout process, requirements, and when recruitment opens. ]', open: false },
        { q: 'How can my company sponsor the team?', a: '[ Describe sponsorship tiers and how to reach out. ]', open: false },
        { q: 'Can you come to our school for a STEM demo?', a: '[ Describe your outreach availability and how to book you. ]', open: false },
        { q: 'When is your next competition?', a: '[ Add your competition schedule or point to the Competitions page. ]', open: false },
      ]
    }
  },
  methods: {
    submitForm() {
      this.submitted = true
      this.form = { name: '', email: '', subject: '', message: '' }
      setTimeout(() => { this.submitted = false }, 5000)
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

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: start;
}

.info-block {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-bottom: 1.5rem;
}
.info-label { color: var(--gray); font-size: 0.85rem; margin-bottom: 0.2rem; }
.info-value { color: var(--white); font-weight: 500; }
.info-link { color: var(--blue-light); text-decoration: none; }
.info-link:hover { text-decoration: underline; }

.social-links { display: flex; flex-direction: column; gap: 0.7rem; }
.social-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border: 1px solid var(--blue-primary);
  border-radius: 6px;
  color: var(--gray);
  font-size: 0.95rem;
  transition: all 0.2s;
  width: fit-content;
}
.social-btn:hover { border-color: var(--blue-light); color: var(--white); }

.contact-form { padding: 2.5rem; }

.form-group { margin-bottom: 1.2rem; }
.form-group label { display: block; color: var(--gray); font-size: 0.9rem; margin-bottom: 0.4rem; }
.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  background-color: rgba(10,35,66,0.8);
  border: 1px solid var(--blue-primary);
  border-radius: 6px;
  padding: 0.8rem 1rem;
  color: var(--white);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
  font-family: inherit;
}
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--blue-light);
}
.form-group select option { background-color: var(--blue-darkest); }

.success-msg { color: #66bb6a; text-align: center; margin-top: 1rem; font-weight: 600; }

.faq-list { max-width: 800px; margin: 0 auto; }
.faq-item {
  border: 1px solid var(--blue-primary);
  border-radius: 8px;
  margin-bottom: 0.8rem;
  overflow: hidden;
  cursor: pointer;
}
.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 1.5rem;
  background-color: rgba(13,71,161,0.3);
  font-weight: 600;
  transition: background 0.2s;
}
.faq-item:hover .faq-question { background-color: rgba(13,71,161,0.5); }
.faq-arrow { transition: transform 0.3s; font-size: 0.75rem; color: var(--blue-light); }
.faq-arrow.rotated { transform: rotate(180deg); }
.faq-answer { padding: 1.2rem 1.5rem; color: var(--gray); line-height: 1.7; }

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
