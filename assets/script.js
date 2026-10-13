:root {
  --bg: #f5f3ef;
  --panel: #ffffff;
  --ink: #17181d;
  --muted: #586071;
  --accent: #1d274d;
  --accent-soft: #ecf0ff;
  --line: #e7e3dc;
  --shadow: 0 22px 50px rgba(16, 19, 29, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: var(--bg);
  color: var(--ink);
  line-height: 1.65;
}

a {
  color: var(--accent);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.site-header {
  background: rgba(255, 255, 255, 0.82);
  border-bottom: 1px solid var(--line);
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
}

.brand {
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--accent);
  text-transform: uppercase;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
}

.nav a {
  color: var(--muted);
  font-size: 0.96rem;
}

.hero {
  display: grid;
  grid-template-columns: 1.6fr 0.9fr;
  gap: 32px;
  padding: 72px 0 44px;
  align-items: center;
}

.eyebrow {
  color: var(--accent);
  font-size: 0.78rem;
  line-height: 1.5;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.hero h1 {
  font-size: clamp(2.7rem, 5vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.06em;
  margin: 0 0 20px;
  max-width: 760px;
}

.hero p {
  font-size: 1.08rem;
  color: var(--muted);
  max-width: 640px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 22px;
  border-radius: 999px;
  transition: transform 0.2s ease;
  font-weight: 700;
  border: 1px solid var(--accent);
}

.button:hover {
  transform: translateY(-1px);
  text-decoration: none;
}

.button.primary {
  background: var(--accent);
  color: #fff;
}

.button.secondary {
  background: transparent;
  color: var(--accent);
}

.hero-panel {
  background: linear-gradient(180deg, #ffffff, #eef2ff);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  border-radius: 22px;
  padding: 26px;
}

.mini-card {
  background: rgba(255,255,255,0.7);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 20px;
}

.mini-card + .mini-card {
  margin-top: 18px;
}

.mini-label {
  display: block;
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.intro-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  padding: 20px 0 12px;
}

.card {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 20px;
  box-shadow: var(--shadow);
  padding: 24px;
}

.card h2 {
  margin-top: 0;
  font-size: 1.35rem;
}

.split-section {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  align-items: center;
  gap: 24px;
  padding: 72px 0 18px;
}

.section-tag {
  color: var(--accent);
  font-size: 0.74rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.split-section h2 {
  font-size: clamp(2rem, 3vw, 3rem);
  margin: 0;
  letter-spacing: -0.04em;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 16px;
  padding: 28px 0 80px;
}

.metric {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 22px 18px;
}

.metric strong {
  display: block;
  color: var(--accent);
  margin-bottom: 6px;
  font-size: 1.05rem;
}

.metric span {
  color: var(--muted);
}

.site-footer {
  background: #fff;
  border-top: 1px solid var(--line);
  padding: 30px 0 16px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  gap: 24px;
}

.footer-grid h3,
.footer-grid h4 {
  margin: 0 0 10px;
  color: var(--accent);
}

.legal-line {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font-size: 0.92rem;
}

.page-content {
  padding: 60px 0 80px;
}

.page-content h1 {
  font-size: clamp(2.2rem, 4vw, 3.4rem);
  letter-spacing: -0.04em;
  margin-top: 0;
}

.page-content h2 {
  color: var(--accent);
  margin-top: 32px;
}

.page-content ul {
  padding-left: 20px;
}

.contact-list {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 18px;
  box-shadow: var(--shadow);
  padding: 24px;
}

@media (max-width: 760px) {
  .nav-wrap {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 18px 0;
  }

  .nav {
    padding-top: 12px;
  }

  .hero,
  .split-section,
  .metrics,
  .intro-grid,
  .footer-grid {
    grid-template-columns: 1fr;
  }

  .hero {
    padding-top: 50px;
  }

  .metrics {
    padding-bottom: 40px;
  }
}
