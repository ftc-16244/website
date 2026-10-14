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
              <a href="https://www.instagram.com/trailblazers-16244" class="social-btn" target="_blank">Instagram</a>
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
            <p v-if="submitted" class="success-msg"> Your email app should have opened with the message ready to send. Just hit send.</p>
          </form>
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
        { label: 'Email', value: 'ftc16244@gmail.com', href: 'mailto:ftc16244@gmail.com' },
        { label: 'Location', value: 'Dunlap, Illinois', href: null },
        { label: 'League', value: 'Peoria FTC League', href: null },
        { label: 'Coaches', value: '2 Coaches · 8 Members', href: null },
      ]
    }
  },
  created() {
    const subject = this.$route.query.subject
    if (subject) this.form.subject = subject
  },
  methods: {
    submitForm() {
      const f = this.form
      const subject = f.subject || 'Message from the website'
      const body = `Name: ${f.name}\nEmail: ${f.email}\n\n${f.message}`
      window.location.href = `mailto:ftc16244@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      this.submitted = true
      this.form = { name: '', email: '', subject: '', message: '' }
      setTimeout(() => { this.submitted = false }, 8000)
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

@media (max-width: 900px) {
  .contact-grid { grid-template-columns: 1fr; }
}
</style>
