const sections = document.querySelectorAll('section[id]')

function menu(){
  let menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu") menuBtn.className += " responsive";
  else menuBtn.className = "nav-menu";
}

const scroll = () => {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
    sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

const animate = () => {
  var typingEffect = new Typed(".typedText",{
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
}

window.onbeforeunload = () => {
  window.scrollTo(0, 0);
  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
};

window.onload = () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  
  setTimeout(() => {
    window.addEventListener('scroll', scroll);
    animate();
  }, 100);
}

window.onscroll = () => {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}