document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('nav ul');
  
  hamburger.addEventListener('click', function() {
      navMenu.classList.toggle('show');
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('nav ul li a').forEach(link => {
      link.addEventListener('click', function() {
          navMenu.classList.remove('show');
      });
  });
});
