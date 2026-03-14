// ================================================
// LA PAPELERÍA DE MAMI - Scripts Globales
// ================================================

// --- Mobile menu toggle ---
const menuBtn    = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const icon = menuBtn.querySelector('i');
    if (icon) {
      icon.classList.toggle('fa-bars');
      icon.classList.toggle('fa-times');
    }
  });
  // Close menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      const icon = menuBtn.querySelector('i');
      if (icon) { icon.classList.add('fa-bars'); icon.classList.remove('fa-times'); }
    });
  });
}

// --- Highlight active nav link ---
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href') === page) link.classList.add('active');
});

// --- Cotización form → WhatsApp (contacto.html) ---
const cotizaForm = document.getElementById('cotiza-form');
if (cotizaForm) {
  cotizaForm.addEventListener('submit', e => {
    e.preventDefault();
    const nombre  = document.getElementById('f-nombre').value.trim();
    const empresa = document.getElementById('f-empresa').value.trim();
    const tipo    = document.getElementById('f-tipo').value;
    const detalle = document.getElementById('f-detalle').value.trim();

    const text = `¡Hola! Me llamo *${nombre}*${empresa ? ` de *${empresa}*` : ''}.

*Tipo de cliente:* ${tipo}
*Necesito:* ${detalle}

Me gustaría solicitar una cotización. ¿Me pueden ayudar?`;

    window.open(`https://wa.me/523334817411?text=${encodeURIComponent(text)}`, '_blank');
  });
}
