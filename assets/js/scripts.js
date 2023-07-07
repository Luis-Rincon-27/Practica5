document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
  });
  
  // Botón para volver arriba
  var backToTop = document.getElementById('back-to-top');
  window.onscroll = function() {
    scrollFunction();
  };
  
  backToTop.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });
  
  // Sticky Navbar

  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');
    var stickyOffset = navbar.offsetTop;
    
    function handleScroll() {
      if (window.pageYOffset >= stickyOffset) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    }
    
    window.addEventListener('scroll', handleScroll);
  });
  
  // Smooth Scroll Navbar
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  var backToTop = document.getElementById('back-to-top');
  window.addEventListener('scroll', function() {
    scrollFunction();
  });
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTop.style.opacity = '1';
    } else {
      backToTop.style.opacity = '0';
    }
  }
  
  backToTop.addEventListener('click', function() {
    scrollToTop(600);
  });
  
  function scrollToTop(scrollDuration) {
    var cosParameter = window.scrollY / 2;
    var scrollCount = 0;
    var oldTimestamp = performance.now();
  
    function step(newTimestamp) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  // Parallax - event

  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
  });