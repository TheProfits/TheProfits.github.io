---
layout: page
title: Our Story
subtitle: The Journey Behind The Profits
show_testimonials: false
---

<style>
:root {
  --bg-dark: #1a1c2c;
  --bg-darker: #13141f;
  --card-bg: #2a2c3c;
  --text-primary: #ffffff;
  --text-secondary: #b8b9cf;
  --discord-blue: #7289DA;
  --discord-light: #5865F2;
  --accent: #7289DA;
}

body {
  background: var(--bg-dark) !important;
}

.page-heading {
  color: var(--text-primary);
}
</style>

<div class="about-container">
  <div class="story-section">
    <div class="story-content text-center">
      <h2>Who We Are</h2>
      <p>
        The Profits was born from a simple realization: financial education shouldn't be locked behind paywalls and expensive courses. 
        Founded by three university students who were tired of seeing people get scammed by "get rich quick" schemes and overpriced trading courses, 
        we decided to create the community we wished existed when we started our own financial journeys.
      </p>
      <p>
        What began as a small Discord server among friends has grown into a thriving community of over 500 members, all learning and growing together 
        without spending a penny on premium subscriptions or courses.
      </p>
    </div>
  </div>

  <div class="mission-section">
    <div class="section-divider"></div>
    <h2 class="text-center">Our Mission</h2>
    <div class="mission-content">
      <div class="mission-card">
        <i class="fas fa-unlock-alt"></i>
        <h3>Free Financial Education</h3>
        <p>
          We believe that profitable trading strategies and legitimate side hustle knowledge should be accessible to everyone, 
          regardless of their financial background. By removing paywalls, we're creating equal opportunities for financial growth.
        </p>
      </div>
      <div class="mission-card">
        <i class="fas fa-users"></i>
        <h3>Build a Supportive Community</h3>
        <p>
          Success is easier when you're surrounded by like-minded individuals. We've created an environment where members help each other, 
          share insights, and celebrate wins together. No ego, no gatekeeping—just collaborative profits.
        </p>
      </div>
      <div class="mission-card">
        <i class="fas fa-shield-alt"></i>
        <h3>Combat Financial Misinformation</h3>
        <p>
          The internet is filled with misleading financial advice and scams. We're committed to providing verified, tested strategies and 
          transparent results so our members can make informed decisions about their financial futures.
        </p>
      </div>
      <div class="mission-card">
        <i class="fas fa-balance-scale"></i>
        <h3>Complete Transparency</h3>
        <p>
          Any money the team makes is purely through affiliate partnerships, never charging our members for content or services. This business model allows us to maintain our commitment to keeping all resources completely free while staying true to our mission.
        </p>
      </div>
    </div>
  </div>

  <div class="journey-section">
    <div class="section-divider"></div>
    <h2 class="text-center">Our Journey</h2>
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2023</h3>
          <h4>The Beginning</h4>
          <p>Started as a small group of university friends falling victim to typical influencer-fad courses online. We realised we needed to teach ourselves how to make some money.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>Early 2024</h3>
          <h4>Trial and Error</h4>
          <p>After a year filled with both challenges and achievements, we discovered effective strategies that enabled us to start generating an income online.</p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>Mid 2024</h3>
          <h4>Starting Education</h4>
          <p>We realised we had been teaching our ways of making online money to our friends at university. We decided we wanted to make a public community, and share what we've learned with everyone. </p>
        </div>
      </div>
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <h3>2025</h3>
          <h4>Where We Are Today</h4>
          <p>Community is open. With our years of forex, matched betting and other experience, we have opened a dedicated community sharing what we know, allowing everyone to make some profits online.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="join-section text-center">
    <h2>Become Part of The Community</h2>
    <p class="lead">Join The Profits today and start your journey toward financial independence—no premium subscriptions, no course purchases, just a supportive community with proven strategies.</p>
    <a href="https://discord.gg/CGd3uptBZ3" class="btn btn-primary btn-lg join-button">
      <i class="fab fa-discord"></i> Join Our Discord
    </a>
  </div>
</div>

<style>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  color: var(--text-secondary);
}

.story-section {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 60px;
}

.story-content h2, .mission-section h2, .journey-section h2, .join-section h2 {
  color: var(--text-primary);
  margin-bottom: 25px;
}

.story-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 20px;
}

.section-divider {
  height: 3px;
  background: linear-gradient(90deg, rgba(114, 137, 218, 0) 0%, rgba(114, 137, 218, 1) 50%, rgba(114, 137, 218, 0) 100%);
  margin: 60px auto;
  width: 60%;
}

.mission-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.mission-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.2);
  text-align: center;
  transition: transform 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(114, 137, 218, 0.2);
}

.mission-card i {
  font-size: 2.5rem;
  color: var(--discord-blue);
  margin-bottom: 20px;
}

.mission-card h3 {
  color: var(--text-primary);
  margin-bottom: 15px;
}

.mission-card p {
  font-size: 1.05rem;
  line-height: 1.6;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 40px auto;
  padding: 20px 0;
}

.timeline:before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 3px;
  background: var(--discord-blue);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 50px;
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.timeline-item:nth-child(even) {
  justify-content: flex-start;
}

.timeline-dot {
  position: absolute;
  left: 50%;
  top: 20px;
  width: 15px;
  height: 15px;
  background: var(--discord-blue);
  border-radius: 50%;
  transform: translateX(-50%);
  z-index: 1;
}

.timeline-content {
  width: 45%;
  padding: 20px;
  background: var(--card-bg);
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.2);
}

.timeline-content h3 {
  color: var(--discord-blue);
  margin-bottom: 5px;
}

.timeline-content h4 {
  color: var(--text-primary);
  margin-bottom: 15px;
}

.timeline-content p {
  margin: 0;
  line-height: 1.6;
}

{% if page.show_testimonials %}
/* Testimonials section styles - currently disabled */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.testimonial-card {
  background: var(--card-bg);
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 15px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
}

.testimonial-content {
  flex-grow: 1;
  position: relative;
  padding-left: 25px;
}

.testimonial-content:before {
  content: """;
  position: absolute;
  left: 0;
  top: -10px;
  font-size: 3rem;
  color: var(--discord-blue);
  font-family: sans-serif;
  line-height: 1;
}

.testimonial-content p {
  font-size: 1.1rem;
  line-height: 1.7;
  font-style: italic;
}

.testimonial-author {
  margin-top: 20px;
  text-align: right;
}

.testimonial-author p {
  color: var(--discord-blue);
  font-weight: bold;
}
{% endif %}

.join-section {
  margin-top: 60px;
  padding: 40px;
  background: var(--card-bg);
  border-radius: 15px;
  text-align: center;
}

.join-section p {
  max-width: 800px;
  margin: 0 auto 30px;
  font-size: 1.2rem;
  line-height: 1.7;
}

.join-button {
  background-color: var(--discord-blue) !important;
  border-color: var(--discord-blue) !important;
  padding: 15px 40px !important;
  font-size: 1.25rem !important;
  transition: all 0.3s ease !important;
}

.join-button:hover {
  background-color: var(--discord-light) !important;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.2) !important;
}

@media (max-width: 768px) {
  .story-section {
    grid-template-columns: 1fr;
  }
  
  .timeline:before {
    left: 30px;
  }
  
  .timeline-item, .timeline-item:nth-child(even) {
    justify-content: flex-start;
    padding-left: 60px;
  }
  
  .timeline-dot {
    left: 30px;
  }
  
  .timeline-content {
    width: 100%;
  }
  
  .testimonials-grid {
    grid-template-columns: 1fr;
  }
}
</style>