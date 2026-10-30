// Shared modern header/footer for all pages
(()=>{
  // Skip if page already has modern nav (homepage)
  if (document.querySelector('.modern-nav') || document.body.classList.contains('login-page')) return;

  const headerHTML = `
<header class="modern-nav">
  <a class="brand" href="/">
    <span class="logo-mark">⚓</span>
    <span class="logo-text"><b>ICONIC</b><small>SHIPPING SERVICES</small></span>
  </a>
  <nav class="main-nav">
    <a href="/">Home</a>
    <a href="/about.html">About Us</a>
    <div class="dropdown">
      <a href="/#services">Services ▾</a>
      <div class="dropdown-menu">
        <a href="/#services">Port Clearance & Logistics</a>
        <a href="/#hold-cleaning">Hold Cleaning</a>
        <a href="/#marine-supply">Marine Supply & Technical</a>
      </div>
    </div>
    <a href="/#why-us">Why Us</a>
    <a href="/enquiry.html">Contact</a><a href="/login.html">Customer Login</a><a href="/admin-login.html">Admin Login</a><a href="/privacy.html">Privacy</a>
  </nav>
  <a class="phone-cta" href="tel:+919712476193">📞 +91 97124 76193</a>
  <button class="burger" aria-label="Menu">☰</button>
</header>`;

  const footerHTML = `
<footer class="modern-footer">
  <div class="footer-brand">
    <a class="brand" href="/"><span class="logo-mark">⚓</span><span class="logo-text"><b>ICONIC</b><small>SHIPPING SERVICES</small></span></a>
    <nav>
      <a href="/">Home</a>
      <a href="/about.html">About Us</a>
      <a href="/#services">Services</a>
      <a href="/#why-us">Why Us</a>
      <a href="/enquiry.html">Contact</a><a href="/login.html">Customer Login</a><a href="/admin-login.html">Admin Login</a><a href="/privacy.html">Privacy</a>
    </nav>
  </div>
  <div class="footer-contact">
    <p>📞 +91 97124 76193</p>
    <p>✉️ supply@iconicshipping.org</p>
    <p>📍 Gandhidham, Gujarat, India</p>
  </div>
  <div class="footer-bottom">
    <span>© 2025 Iconic Shipping Services. All rights reserved.</span>
    <div class="socials">
      <a href="#">f</a><a href="#">in</a><a href="#">wa</a><a href="#">▶</a>
    </div>
  </div>
</footer>`;

  // Remove old header/footer
  document.querySelectorAll('header.nav, footer').forEach(el => el.remove());

  // Inject modern header at start of body
  document.body.insertAdjacentHTML('afterbegin', headerHTML);

  // Inject modern footer at end
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Mobile menu
  document.querySelector('.burger')?.addEventListener('click', () => {
    document.querySelector('.main-nav')?.classList.toggle('open');
    document.querySelector('.phone-cta')?.classList.toggle('open');
  });

  // Inject breadcrumbs
  const path = location.pathname;
  const crumbs = { "/about.html": "About Us", "/enquiry.html": "Enquiry", "/privacy.html": "Privacy Policy", "/port.html": "Ports", "/service.html": "Services", "/login.html": "Login" };
  if (crumbs[path]) {
    const bc = document.createElement("nav");
    bc.className = "breadcrumbs";
    bc.setAttribute("aria-label", "Breadcrumb");
    bc.innerHTML = `<a href="/">Home</a> <span>›</span> <span>${crumbs[path]}</span>`;
    const main = document.querySelector("main") || document.body;
    main.insertAdjacentElement("afterbegin", bc);
  }
})();
