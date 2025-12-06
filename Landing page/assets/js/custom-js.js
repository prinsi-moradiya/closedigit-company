// navbar 3 bars code 
document.getElementById("searchToggle").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("searchOverlay").classList.toggle("d-none");

});

// Search toggle for mobile
document.getElementById("searchToggleMobile").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("searchOverlay").classList.toggle("d-none");
});




// nav bar flag 
const dropdownToggle = document.querySelector('.nav-item.dropdown > a.nav-link.dropdown-toggle');
const dropdownMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');

function updateDropdownOptions() {
  // Get current flag and language in toggle
  const currentFlag = dropdownToggle.querySelector('img').src;
  const currentLang = dropdownToggle.querySelector('span').textContent.trim();

  // Show all items first
  dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
    item.style.display = 'flex';
  });

  // Hide the currently selected language from dropdown items
  dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
    const flag = item.getAttribute('data-flag');
    const lang = item.getAttribute('data-lang');
    if (flag === currentFlag && lang === currentLang) {
      item.style.display = 'none';
    }
  });
}

// Initial call to hide default selected option in dropdown
updateDropdownOptions();

dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();

    // Update toggle flag and text
    const flagSrc = item.getAttribute('data-flag');
    const langText = item.getAttribute('data-lang');

    dropdownToggle.querySelector('img').src = flagSrc;
    dropdownToggle.querySelector('span').textContent = langText;

    // Update the dropdown options so selected hides from list
    updateDropdownOptions();
  });
});



// search bar full screen

document.addEventListener('DOMContentLoaded', () => {
  const searchToggleDesktop = document.getElementById('searchToggle');    // existing desktop toggle
  const searchToggleMobile = document.getElementById('searchToggleMobile'); // new mobile toggle
  const searchOverlay = document.getElementById('searchOverlay');
  const closeSearch = document.getElementById('closeSearch');
  const searchInput = searchOverlay.querySelector('.search-input');

  // Function to open overlay and focus input
  function openSearch() {
    searchOverlay.classList.remove('d-none');
    searchInput.focus();
  }

  // Attach click handlers for both toggles if they exist
  if (searchToggleDesktop) {
    searchToggleDesktop.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  }

  if (searchToggleMobile) {
    searchToggleMobile.addEventListener('click', (e) => {
      e.preventDefault();
      openSearch();
    });
  }

  // Close overlay on close button click
  closeSearch.addEventListener('click', () => {
    searchOverlay.classList.add('d-none');
    searchInput.value = '';
  });

  // Close overlay when clicking outside input (on overlay background)
  searchOverlay.addEventListener('click', (e) => {
    if (e.target === searchOverlay) {
      searchOverlay.classList.add('d-none');
      searchInput.value = '';
    }
  });
});


// languge dropdown for desktop
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector('.nav-item.dropdown > a.nav-link.dropdown-toggle');
  const dropdownMenu = document.querySelector('.nav-item.dropdown .dropdown-menu');

  function updateDropdownOptions() {
    const currentFlag = dropdownToggle.querySelector('img').src;
    const currentLang = dropdownToggle.querySelector('span').textContent.trim();

    dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
      item.style.display = 'flex';
      const flag = item.getAttribute('data-flag');
      const lang = item.getAttribute('data-lang');
      if (flag === currentFlag && lang === currentLang) {
        item.style.display = 'none';
      }
    });
  }

  updateDropdownOptions();

  dropdownMenu.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      const flagSrc = item.getAttribute('data-flag');
      const langText = item.getAttribute('data-lang');

      dropdownToggle.querySelector('img').src = flagSrc;
      dropdownToggle.querySelector('span').textContent = langText;

      updateDropdownOptions();
    });
  });
});

// language dropdown for mobile 

document.addEventListener('DOMContentLoaded', function () {
  const mobileLangDropdown = document.getElementById('mobileLanguageDropdown');
  const mobileLangToggle = mobileLangDropdown.querySelector('a.dropdown-toggle');
  const mobileLangItems = mobileLangDropdown.querySelectorAll('.dropdown-item');

  mobileLangItems.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();

      const flagSrc = item.getAttribute('data-flag');
      const langText = item.getAttribute('data-lang');

      // Update toggle image and text
      mobileLangToggle.querySelector('img').src = flagSrc;
      mobileLangToggle.querySelector('span').textContent = langText;

      // Close dropdown manually (optional)
      const dropdown = bootstrap.Dropdown.getInstance(mobileLangToggle);
      if (dropdown) dropdown.hide();
    });
  });
});

// tap into the power of the cloud image gallery 
const imageData = [
  {
    src: "./assets/images/slide-1.png",
    heading: "Content Management",
    paragraph: " "
  },
  {
    src: "./assets/images/slide-2.png",
    heading: "Database Management",
    paragraph: "Scalable Database Management solutions to equip organizations with the power to store, access, and manage mission-critical data"
  },
  {
    src: "./assets/images/slide-3.png",
    heading: "DevOps",
    paragraph: "Premier DevOps solutions that enable business agility, automation, global collaboration, and application management with an end-goal to achieve unparalleled performance and productivity"
  },
  {
    src: "./assets/images/slide-4.jpeg",
    heading: "Future-Ready",
    paragraph: "Adopt new technologies fearlessly."
  },
  {
    src: "./assets/images/slide-5.jpeg",
    heading: "Reliable Support",
    paragraph: "24x7 expert guidance at your fingertips."
  }
];

let current = 1;

function getIndex(i) {
  return (i + imageData.length) % imageData.length;
}

function updateGallery() {
  const track = document.querySelector(".image-track");
  const isMobile = window.innerWidth <= 767;

  const centerIndex = getIndex(current);
  const center = imageData[centerIndex];

  if (isMobile) {
    track.innerHTML = `
            <div class="image-wrapper center">
              <img src="${center.src}" alt="${center.heading}" class="gallery-img" />
              <div class="image-content">
                <h3>${center.heading}</h3>
                <p>${center.paragraph}</p>
              </div>
            </div>
          `;
  } else {
    const leftIndex = getIndex(current - 1);
    const rightIndex = getIndex(current + 1);

    const left = imageData[leftIndex];
    const right = imageData[rightIndex];

    track.innerHTML = `
            <div class="image-wrapper side">
              <img src="${left.src}" alt="${left.heading}" class="gallery-img" />
              <div class="overlay"></div>
              <div class="image-content d-grid">
                <h3>${left.heading}</h3>
                <p>${left.paragraph}</p>
              </div>
            </div>
            <div class="image-wrapper center">
              <img src="${center.src}" alt="${center.heading}" class="gallery-img" />
              <div class="image-content d-grid">
                <h3>${center.heading}</h3>
                <p>${center.paragraph}</p>
              </div>
            </div>
            <div class="image-wrapper side">
              <img src="${right.src}" alt="${right.heading}" class="gallery-img" />
              <div class="overlay"></div>
              <div class="image-content d-grid">
                <h3>${right.heading}</h3>
                <p>${right.paragraph}</p>
              </div>
            </div>
          `;
  }
}



function prevImage() {
  current = getIndex(current - 1);
  updateGallery();
}

function nextImage() {
  current = getIndex(current + 1);
  updateGallery();
}

updateGallery();

// lead on your distribution image gallery 

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 24,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000,      // Slide changes every 1 second
    autoplaySpeed: 1000,        // Transition duration is 1 second
    smartSpeed: 2000,           // Speed of navigation and autoplay
    autoplayHoverPause: false,

    responsive: {
      0: { items: 1 },
      576: { items: 1 },
      768: { items: 2 },
      992: { items: 3 },
      1200: { items: 4 }
    }
  });
});

// logo slider 

$(document).ready(function () {
  $(".client-logo-carousel").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 2500,   // 2.5 seconds per slide
    autoplaySpeed: 800,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  });
});




// testimonial section
const carouselElement = document.getElementById('testimonialCarousel');
const testimonialCarousel = bootstrap.Carousel.getOrCreateInstance(carouselElement);

function prevImage1() {
  testimonialCarousel.prev();
}

function nextImage1() {
  testimonialCarousel.next();
}



// cookies javascript 

function closeCookiePopup() {
  const popup = document.getElementById("cookiePopup");
  popup.classList.add("d-none");
}

function acceptCookies() {
  // Optional: Save choice in localStorage, etc.
  closeCookiePopup();
}



