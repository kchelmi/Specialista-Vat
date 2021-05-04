const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const burger = document.querySelector('.burger');

const tl = new TimelineMax();

// tl - timeline
tl.fromTo(hero, 1, {
  height: '0%'
}, {
  height: '80%',
  ease: Power2.easeInOut
}).fromTo(hero, 1.2, {
  width: '100%'
}, {
  width: '80%',
  ease: Power2.easeInOut
}).fromTo(slider, 1.2, {
  x: '-100%'
}, {
  x: '0%',
  ease: Power2.easeInOut
}, "-=1.2").fromTo(logo, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5").fromTo(burger, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5").fromTo(headline, 0.5, {
  opacity: 0,
  x: 30
}, {
  opacity: 1,
  x: 0
}, "-=0.5")

const navSlide = () => {
  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav-links');
  const navLinks = document.querySelectorAll('.nav-links li');

  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.4s ease forwards ${index / 7 + 0.5}s`
      }
    });
    // Burger Animation
    burger.classList.toggle('toggleBurger');
    
  });
}
navSlide()


const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: 'Roma Wilk',
    position: 'Specialista ds. Raportowania Finansowego',
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    text:
      'Polecam kurs z czystym sumieniem! Pani Luiza jest świetnym ekspertem, wiele rzeczy mi rozjaśniła – wciąż zaglądam do materiałów ze szkolenia.',
  },
  {
    name: 'Ewa Kotlewska',
    position: 'Głowna Księgowa',
    photo: 'https://randomuser.me/api/portraits/women/68.jpg',
    text:
      "Niesamowita wiedza i praktyka prowadzącej, konkretne rozwiązania księgowe wdrażam już teraz w swojej pracy – czuję się pewniej w kontekście ewentualnej kontroli.",
  },
  {
    name: 'Anna Dąbska',
    position: 'Biegły rewident',
    photo: 'https://randomuser.me/api/portraits/women/49.jpg',
    text:
      "Kurs skończyłam tydzień temu i jestem bardzo zadowolona. Dał mi konkretne wskazówki i narzędzia jak się przygotować i ogarnąć chaos, który zapanował w dokumentach firmowych.",
  },
  


]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]

  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1) {
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)


gsap.registerPlugin(ScrollTrigger)


gsap.from('.animate-flow', {
  scrollTrigger: '.animate-flow',
  duration: 1,
  opacity: 0,
  y: -50,
  stagger: 0.3,
  delay:0.3
});

gsap.from('.animate-flow1', {
  scrollTrigger: '.animate-flow1',
  duration: 1,
  opacity: 0,
  y: -50,
  stagger: 0.3,
  delay:0.3
});


const fadeIns = document.querySelectorAll('.fadeIn')

window.addEventListener('scroll', checkfadeIn);

checkfadeIn()

function checkfadeIn() {
  const triggerfadeIn = window.innerHeight / 5 * 4;

  fadeIns.forEach(fadeIn => {
    const fadeInTop = fadeIn.getBoundingClientRect().top

    if (fadeInTop < triggerfadeIn) {
      fadeIn.classList.add('animate-fadeIn')
    }
  })
}


$('.nav-links li a').on('click', function () {
  const goToSection = "#" + $(this).attr('class');

  $('body, html').animate({
    scrollTop: $(goToSection).offset().top
  }, 1000)
  nav.classList.remove('nav-active')
  burger.classList.toggle('toggleBurger');
})

