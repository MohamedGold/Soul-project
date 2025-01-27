


// !Navbar

// When the menu toggle button is clicked, open the side menu
$(".menu-toggle-btn").on("click", function () {
  $(".sidemenu").css({
    "transform": "translateY(0)",
    "opacity": "1",
    "visibility": "visible"
  }).addClass("open");
  $("body").css("overflow-y", "hidden");
});

// Close menu function
function closeSideMenu() {
  $(".sidemenu").css({
    "transform": "translateY(-100%)",
    "opacity": "0",
    "visibility": "hidden"
  }).removeClass("open");
  $("body").css("overflow-y", "auto");


}

// When the close button is clicked
$(".clss").on("click", closeSideMenu);

// Close menu when clicking outside
$(document).on("click", function (e) {
  if ($(".sidemenu").hasClass("open")) {
    // Check if click is outside of sidemenu and not on the toggle button
    if (!$(e.target).closest(".sidemenu").length && !$(e.target).closest(".menu-toggle-btn").length) {
      closeSideMenu();
    }
    
  }

  
});













// ! autocomplete-search-results

// $(function () {
//   var availableTags = [
//     "ActionScript",
//     "AppleScript",
//     "Asp",
//     "BASIC",
//     "C",
//     "C++",
//     "Clojure",
//     "COBOL",
//     "ColdFusion",
//     "Erlang",
//     "Fortran",
//     "Groovy",
//     "Haskell",
//     "Java",
//     "JavaScript",
//     "Lisp",
//     "Perl",
//     "PHP",
//     "Python",
//     "Ruby",
//     "Scala",
//     "Scheme"
//   ];
//   $("#tags").autocomplete({
//     source: availableTags
//   });
// });










// ! main-nav toggle-menu

document.addEventListener("DOMContentLoaded", () => {
  const globeIcon = document.querySelector(".globe-icon-btn");
  const dropdown = document.querySelector(".dropdown-container");
  const tabs = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  // Toggle dropdown visibility
  globeIcon.addEventListener("click", (e) => {
    e.preventDefault();
    dropdown.classList.toggle("hidden");
  });

  // Handle tab switching
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs and panels
      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      // Add active class to the clicked tab and corresponding panel
      tab.classList.add("active");
      document
        .getElementById(tab.dataset.tab)
        .classList.add("active");
    });
  });

  // Close dropdown if clicking outside
  document.addEventListener("click", (e) => {
    if (!globeIcon.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });
});



// ! search toggle-responsive

const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');

searchIcon.addEventListener('click', (e) => {
  e.preventDefault(); 
  searchBar.classList.toggle('hidden'); 
});


// ! submenu switching

// Initialize submenus and buttons
const categoryButtons = document.querySelectorAll(".category-button");
const submenus = {
  clothes: document.getElementById("submenu-clothes"),
  makeup: document.getElementById("submenu-makeup"),
};

// Initialize by setting the first submenu visible
Object.values(submenus).forEach((submenu) => submenu.classList.add("d-none"));
submenus.clothes.classList.remove("d-none");

// Add click event to category buttons
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Toggle active class for buttons
    categoryButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    // Show the selected submenu and hide others
    Object.entries(submenus).forEach(([category, submenu]) => {
      if (button.dataset.category === category) {
        submenu.classList.remove("d-none");
        submenu.classList.add("d-flex");
      } else {
        submenu.classList.add("d-none");
        submenu.classList.remove("d-flex");
      }
    });
  });
});




// ! Hero Slider
const swiper = new Swiper('.slider', {
  loop:true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true, 
  },
  navigation: {
    nextEl: '.swiper-hero-button-next', 
    prevEl: '.swiper-hero-button-prev',
  },
  effect: 'slide', 
});








// ! card Swiper

$(document).ready(function () {
  document.querySelectorAll('.discount-section').forEach((sliderContainer, index) => {
    // Add unique navigation classes for each slider
    let nextButton = sliderContainer.querySelector('.swiper-button-next');
    let prevButton = sliderContainer.querySelector('.swiper-button-prev');

    // Initialize Swiper for each slider container
    new Swiper(sliderContainer.querySelector('.swiper-container'), {
      slidesPerView: 2.5,
        spaceBetween: 20,
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        breakpoints: {
              1024: {
                slidesPerView: 5,
              },
              768: {
                slidesPerView: 3,
              },
            }
    });
});
});



// ! ads-section

$(document).ready(function () {
  document.querySelectorAll('.ads-section').forEach((sliderContainer, index) => {
    // Add unique navigation classes for each slider
    let nextButton = sliderContainer.querySelector('.swiper-button-next');
    let prevButton = sliderContainer.querySelector('.swiper-button-prev');

    // Initialize Swiper for each slider container
    new Swiper(sliderContainer.querySelector('.swiper-container'), {
      slidesPerView: 2,
        spaceBetween: 20,
        navigation: {
            nextEl: nextButton,
            prevEl: prevButton,
        },
        breakpoints: {
              1024: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
              },
            }
    });
});
});



// ! for you section


$(document).ready(function () {
  document.querySelectorAll('.for-you-section').forEach((sliderContainer, index) => {
    let nextButton = sliderContainer.querySelector('.swiper-button-next');
    let prevButton = sliderContainer.querySelector('.swiper-button-prev');

    const swiperInstance = new Swiper(sliderContainer.querySelector('.swiper-container'), {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: nextButton,
        prevEl: prevButton,
      },
      breakpoints: {
        1024: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 2,
        },
      },
      pagination: {
        el: '.for-you-section .swiper-pagination-for-you',
        type: 'custom',
        renderCustom: (swiper, current, total) => {
          let paginationHTML = '';
          const totalPages = total;
          const pagesToShow = 4;

          if (totalPages <= pagesToShow) {
            // If there are fewer pages, show them all
            for (let i = 1; i <= totalPages; i++) {
              paginationHTML += `<span class="swiper-pagination-number ${i === current ? 'active' : ''}">${i}</span>`;
            }
          } else {
            // Show the first 4 pages, and then continue showing subsequent pages as needed
            const start = Math.max(current - 2, 1);
            const end = Math.min(current + 3, totalPages);

            // Show numbers before and after the current page
            for (let i = start; i <= end; i++) {
              paginationHTML += `<span class="swiper-pagination-number ${i === current ? 'active' : ''}">${i}</span>`;
            }

            // Show "..." if there are more pages after the current range
            if (end < totalPages) {
              paginationHTML += `<span>...</span><span class="swiper-pagination-number">${totalPages}</span>`;
            }
          }

          return `<span class="swiper-pagination-prev"></span>${paginationHTML}<span class="swiper-pagination-next"></span>`;
        },
      },
    });

    // Handle pagination click to slide to the specific page
    document.querySelector('.for-you-section .swiper-pagination-for-you').addEventListener('click', (e) => {
      if (e.target.classList.contains('swiper-pagination-number')) {
        const pageIndex = parseInt(e.target.textContent, 10) - 1;
        swiperInstance.slideTo(pageIndex);
      } else if (e.target.classList.contains('swiper-pagination-prev')) {
        swiperInstance.slidePrev();
      } else if (e.target.classList.contains('swiper-pagination-next')) {
        swiperInstance.slideNext();
      }
    });
  });
});


