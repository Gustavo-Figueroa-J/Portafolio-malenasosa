(function(){
  // Theme toggle
  const btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    btn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      // allow downloads to proceed
      if(a.getAttribute('download')) return;
      e.preventDefault();
      const id = a.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });

  // Contact form (simulated)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      alert('Gracias — tu mensaje fue enviado (simulado).');
      form.reset();
    });
  }

  // Animate skill bars on scroll
  const bars = document.querySelectorAll('.bar');
  function animateBars(){
    bars.forEach(b=>{
      const rect = b.getBoundingClientRect();
      if(rect.top < window.innerHeight-60){
        const v = b.dataset.value || 80;
        const span = b.querySelector('span');
        span.style.width = v + '%';
      }
    });
  }
  window.addEventListener('scroll', animateBars);
  window.addEventListener('load', animateBars);

  // ScrollReveal animations for experience cards
  if(window.ScrollReveal){
    ScrollReveal().reveal('.hero-content', { duration: 700, distance: '20px', origin: 'bottom', scale: 1, easing: 'ease' });
    ScrollReveal().reveal('.hero-photo', { duration: 900, distance: '20px', origin: 'right', easing: 'ease' });
    ScrollReveal().reveal('.experience-card', { duration: 800, distance: '40px', origin: 'left', interval: 120, easing: 'ease' });
    ScrollReveal().reveal('.skills-grid .skill', { duration: 700, distance: '20px', origin: 'bottom', interval: 80 });
    ScrollReveal().reveal('.testimonials blockquote', { duration: 700, distance: '20px', origin: 'bottom', interval: 90 });
  }

  // Hero name animation: letter by letter
  const heroName = document.getElementById('hero-name');
  if(heroName){
    const text = heroName.textContent.trim();
    heroName.textContent = '';
    const frag = document.createDocumentFragment();
    for(let i=0;i<text.length;i++){
      const span = document.createElement('span');
      span.textContent = text[i];
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      span.style.transform = 'translateY(8px)';
      span.style.transition = 'all .45s ease';
      frag.appendChild(span);
    }
    heroName.appendChild(frag);
    // animate letters sequentially
    Array.from(heroName.children).forEach((s, idx)=>{
      setTimeout(()=>{ s.style.opacity = '1'; s.style.transform = 'translateY(0)'; }, 60*idx + 300);
    });
  }

  // Button subtle pulse (looping) - only subtle and low frequency
  const downloadBtn = document.getElementById('download-cv');
  if(downloadBtn){
    let scaleUp = true;
    setInterval(()=>{
      downloadBtn.style.transform = scaleUp ? 'scale(1.02)' : 'scale(1)';
      scaleUp = !scaleUp;
    }, 3500);
  }

})();