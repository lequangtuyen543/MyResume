const headerToggleBtn = document.querySelector('.header-toggle');
const header = document.querySelector(".header");
const navmenulinks = document.querySelectorAll(".navmenu a");
/**
 * Header toggle
 */
function headerToggle() {
  header.classList.toggle("header-show");
  headerToggleBtn.classList.toggle("bi-list");
  headerToggleBtn.classList.toggle("bi-x");
}
headerToggleBtn.addEventListener('click', headerToggle);

/**
   * Hide mobile nav on same-page/hash links
   */
navmenulinks.forEach(link => {
  link.addEventListener('click', headerToggle);
});

/**
   * Navmenu Scrollspy
   */
function navmenuScrollspy() {
  let position = window.scrollY + 200;
  let activeLink = null;

  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return;
    let section = document.querySelector(navmenulink.hash);
    if (!section) return;

    if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
      activeLink = navmenulink;
    }
  });

  document.querySelectorAll(".navmenu a.active").forEach(link => link.classList.remove("active"));
  if (activeLink) activeLink.classList.add("active");
}

window.addEventListener("load", navmenuScrollspy);
document.addEventListener("scroll", navmenuScrollspy);

/**
   * Scroll Top
   */
function scrollTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
const scrollTopBtn = document.querySelector('.scroll-top');
scrollTopBtn.addEventListener('click', scrollTop);

window.addEventListener('scroll', function () {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});
/**
   * Services Item Click
   */
const servicesItem = document.querySelectorAll(".services__item");
servicesItem.forEach(item => {
  item.addEventListener("click", () => {
    window.location.href = "service-details.html";
  });
});

/*--------------------------------------------------------------
  # NPM Libraries
  --------------------------------------------------------------*/
/**
 * Typed.js
 */
document.addEventListener("DOMContentLoaded", function () {
  new Typed(".typed", {
    strings: [
      "Designer",
      "Developer",
      "Freelancer",
      "Photographer",
    ],
    typedSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    loop: true,
    typeSpeed: 100,
    cursorChar: "|"
  });
});

/**
 * Purecounter
 */
new PureCounter({
  duration: 1
});

/**
 * AOS Animation
 */
AOS.init();

/**
 * Swiper
 */
const swiper = new Swiper('.swiper', {
  loop: true,  // Lặp vô hạn
  autoplay: { delay: 5000 }, // Tự động chuyển slide
  pagination: { // Chấm tròn chỉ mục
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

/**
 * Isotope js
 */
// init Isotope
const grid = document.querySelector('.isotope-container');
const iso = new Isotope(grid, {
  itemSelector: ".isotope-item",
  layoutMode: "masonry",
});

// bind filter li click
const filters = document.querySelectorAll('.isotope-filters li');
filters.forEach(li => {
  li.addEventListener('click', () => {
    const filterValue = li.getAttribute('data-filter');
    iso.arrange({ filter: filterValue });
    filters.forEach(btn => {
      btn.classList.remove('active'); // Remove active class from all other buttons
    });
    li.classList.add('active'); // Add active class to the clicked button
  });
});

/**
 * glightbox
 */
const lightbox = GLightbox({
  selector: '.isotope-lightbox'
});

/**
 * aos
 */
AOS.init({
  duration: 1000,
  easing: 'ease',
  once: true,
  mirror: true,
  startEvent: 'DOMContentLoaded',
  disableMutationObserver: false,
  anchorPlacement: 'bottom center',
});

/**
 * Preloader
 */
// const preloader = document.querySelector('#preloader');
// if (preloader) {
//   window.addEventListener('load', () => {
//     preloader.remove();
//   });
// }