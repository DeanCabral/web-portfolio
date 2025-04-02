window.onbeforeunload = () => {
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
  }
};

window.onload = () => {
  document.getElementById("year").textContent = new Date().getFullYear();

  document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", menu);
  });

  const form = document.getElementById('contactForm');
  const elements = {
      nameInput: form.querySelector('input[name="name"]'),
      emailInput: form.querySelector('input[name="email"]'),
      messageInput: form.querySelector('textarea[name="message"]'),
      errorMessage: document.getElementById('errorMessage')
  };

  const validateField = (field) => {
      field.value.trim() 
          ? field.classList.remove('error')
          : field.classList.add('error');
      
      if (elements.nameInput.value.trim() && 
          elements.emailInput.value.trim() && 
          elements.messageInput.value.trim()) {
          elements.errorMessage.style.display = 'none';
      }
  };

  [elements.nameInput, elements.emailInput, elements.messageInput].forEach(input => {
      input.addEventListener('input', () => validateField(input));
  });

  form.addEventListener('submit', (e) => { 
      e.preventDefault();
      
      Object.values(elements).forEach(el => {
          if (el.classList) el.classList.remove('error');
      });
      elements.errorMessage.style.display = 'none';

      const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

      let errorMessage = [];

      if (!elements.nameInput.value.trim()) {
          elements.nameInput.classList.add('error');
          errorMessage.push('Name is required.');
      }

      if (!elements.emailInput.value.trim()) {
          elements.emailInput.classList.add('error');
          errorMessage.push('Email is required.');
      } else if (!isValidEmail(elements.emailInput.value.trim())) {
          elements.emailInput.classList.add('error');
          errorMessage.push('Enter a valid email address.');
      }

      if (!elements.messageInput.value.trim()) {
          elements.messageInput.classList.add('error');
          errorMessage.push('Message is required.');
      }

      if (errorMessage.length > 0) {
          elements.errorMessage.textContent = errorMessage.join(' ');
          elements.errorMessage.style.display = 'block';
      } else {
          console.log('Form is valid');
      }
  });


  setTimeout(() => {
      window.addEventListener('scroll', scroll);
      animate();
  }, 100);
};

window.onscroll = () => {
  const navHeader = document.getElementById("header");
  const navMenu = document.getElementById("nav-menu-res");
  const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

  if (scrollPosition > 50) {
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
      navMenu.style.top = "65px";
  } else {
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
      navMenu.style.top = "90px";
  }
};

function menu() {
  const menuBtn = document.getElementById("nav-menu-res");
  menuBtn.className = menuBtn.className === "nav-menu" 
      ? "nav-menu responsive" 
      : "nav-menu";
}

const sections = document.querySelectorAll('section[id]');
const scroll = () => {
  const scrollY = window.scrollY;
  
  sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active-link');
      } else {
          navLink.classList.remove('active-link');
      }
  });
};

const animate = () => {
  const typingEffect = new Typed(".typedText",{
    strings : ["Dean Cabral", "A Developer", "A Tech Enthusiast"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
  })

  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true,  
    beforeReveal: (el) => el.style.visibility = 'visible'
  })

  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})

  sr.reveal('.project-box',{interval: 200})
  sr.reveal('.testimonial-col',{interval: 200})
  sr.reveal('.top-header',{})

  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true, 
    beforeReveal: (el) => el.style.visibility = 'visible'
  })

  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true,
    beforeReveal: (el) => el.style.visibility = 'visible'
  })

  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
};