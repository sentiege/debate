
document.querySelectorAll('.accordion').forEach(btn => {
  btn.addEventListener('click', () => {
    const panel = btn.nextElementSibling;
    const isOpen = panel.classList.contains('open');
    document.querySelectorAll('.panel.open').forEach(p => p.classList.remove('open'));
    document.querySelectorAll('.accordion.active').forEach(a => a.classList.remove('active'));
    if(!isOpen){
      panel.classList.add('open');
      btn.classList.add('active');
    }
  });
});
