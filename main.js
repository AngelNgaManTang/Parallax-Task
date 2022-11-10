const navToggle = document.querySelector("#navToggle");
const navClosedIcon = document.querySelector("#navClosed");
const navOpenIcon = document.querySelector("#navOpen");
const navIcon = document.querySelectorAll(".navIcon");
const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  navIcon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
});


window.addEventListener(
  "resize", () => {
    if (document.body.clientWidth > 720) {
      nav.classList.remove("open");
      navIcon.forEach((icon) => {
        icon.classList.remove("hidden");
      });
      navOpenIcon.classList.add("hidden");
    }
  },
  { passive: false }
);


window.onscroll = function() {
   

    if (window.pageYOffset > 20) {
        document.getElementById('header').classList.add('top-0');

        
        
    } else {
        document.getElementById('header').classList.remove('top-0');

       
    }
    if (window.pageYOffset > 500) {
        document.getElementById('header').classList.add('bg-primary');

    }
    else {
        document.getElementById('header').classList.remove('bg-primary');

       
    }
}



$(document).ready(function() {
	$('.popup').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
   
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    centeredSlides: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        
        768: {
        slidesPerView: 2,
        spaceBetween: 5,
        },
        1024: {
        slidesPerView: 3.5,
        spaceBetween: 5,
        },
        2560: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

