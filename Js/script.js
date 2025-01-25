


// !Navbar


// When the menu toggle button is clicked, open the side menu
$(".menu-toggle-btn").on("click", function () {
  $(".sidemenu").css({
      "transform": "translateY(0)",
      "opacity": "1",
      "visibility": "visible"
  });
  $(".sidemenu").addClass("open");
});

// When the close button is clicked, close the side menu
$(".clss").on("click", function () {
  $(".sidemenu").css({
      "transform": "translateY(-100%)",
      "opacity": "0",
      "visibility": "hidden"
  });
  $(".sidemenu").removeClass("open");
});

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


document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".search-icon");
  const searchBar = document.querySelector(".search-bar");

  // Toggle search bar visibility
  searchIcon.addEventListener("click", (e) => {
    e.preventDefault();
    searchBar.classList.toggle("hidden");
  });

  // Optional: Close the search bar when clicking outside
  document.addEventListener("click", (e) => {
    if (!searchBar.contains(e.target) && !searchIcon.contains(e.target)) {
      searchBar.classList.add("hidden");
    }
  });
});



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
      slidesPerView: 3,
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
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 2,
              },
            }
            ,
            pagination: {
              el: '.for-you-section .swiper-pagination-for-you',
              type: 'fraction',
              renderFraction: (currentClass, totalClass) => {
                return '<span class="' + totalClass + '"></span>' +
                                 
                                 '<span class="' +  currentClass + '"></span>'
                }
          }
    });
});
});