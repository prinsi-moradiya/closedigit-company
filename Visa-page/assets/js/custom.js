// Tab functionality for destinations
document.addEventListener('DOMContentLoaded', function () {
    const tabItems = document.querySelectorAll('.tab-item');
    const visaTabs = document.querySelectorAll('.visa-tab-item');

    // Destination tabs
    tabItems.forEach(tab => {
        tab.addEventListener('click', function () {
            tabItems.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // visa tabs
    visaTabs.forEach(tab => {
        tab.addEventListener('click', function () {
            visaTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        });
    }
});

// media logos 
$(document).ready(function () {
  $('#logoCarousel').owlCarousel({
    loop: true,
    margin: 30, // Space between ALL items
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    responsive: {
      0: { items: 4 },
      600: { items: 4 },
      1000: { items: 4 }
    },
  });
});

// owl carousel
 $(document).ready(function () {
    const $carousel = $(".testimonial-carousel");
    const $dashes = $(".dashed-line .dash");

    $carousel.owlCarousel({
      items: 1,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 5000,
      dots: false,
      nav: false,
      animateOut: 'slideOutUp',
      animateIn: 'slideInUp', // simulate bottom to top
    });

    // Update active dash
    $carousel.on("changed.owl.carousel", function (event) {
      let index = event.item.index - event.relatedTarget._clones.length / 2;
      let count = event.item.count;
      index = (index + count) % count;

      $dashes.removeClass("active");
      $dashes.eq(index).addClass("active");
    });

    // Optional: Clicking on dash to go to slide
    $dashes.click(function () {
      let step = $(this).data("step");
      $carousel.trigger("to.owl.carousel", [step, 300]);
    });
});


// Add interactivity to cycle dots if needed

document.querySelectorAll('.footer-section').forEach(footer => {
  const dots = footer.querySelectorAll('.slider-dots .dot');
  const badgeText = footer.querySelector('.badge-text');
  const mainHeading = footer.querySelector('.main-heading');
  const ctaButton = footer.querySelector('.cta-button');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      // Remove active from all dots in this footer
      dots.forEach(d => d.classList.remove('active'));
      // Add active to clicked dot
      dot.classList.add('active');

      // Update texts for this footer only
      const badge = dot.getAttribute('data-badge');
      const heading = dot.getAttribute('data-heading');
      const buttonText = dot.getAttribute('data-button');

      badgeText.textContent = badge;
      mainHeading.innerHTML = heading;

      const arrowHtml = ctaButton.querySelector('.arrow')?.outerHTML || `<img src="./assets/icons/view-more-arrow.svg" alt="">`;

      ctaButton.innerHTML = `${buttonText} ${arrowHtml}`;
    });
  });
});


// tab navigation 

  const tabNavigation = document.querySelector('.tab-navigation');
  const tabs = document.querySelectorAll('.tab-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    });
  });

  window.addEventListener('load', () => {
    const activeTab = document.querySelector('.tab-item.active');
    if (activeTab) {
      activeTab.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });

// testimonial section 

  $('.testimonial-carousel').owlCarousel({
  loop: true,
  margin: 30,
  items: 1,
  nav: true,
  rtl: false,  // This enables right-to-left sliding
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  });

// countries languages 
function splitCountriesForSmallScreen() {
      const allColumns = document.querySelectorAll('.all-columns .column-group, .all-columns > div > .d-flex.flex-column');
      let allCountries = [];

      allColumns.forEach(column => {
        const countries = column.querySelectorAll('.country-card');
        countries.forEach(country => {
          allCountries.push(country.outerHTML);
        });
      });

      const half = Math.ceil(allCountries.length / 2);
      const firstHalf = allCountries.slice(0, half).join('');
      const secondHalf = allCountries.slice(half).join('');

      const smallCol1 = document.getElementById('small-col-1');
      const smallCol2 = document.getElementById('small-col-2');

      if (smallCol1 && smallCol2) {
        smallCol1.innerHTML = firstHalf;
        smallCol2.innerHTML = secondHalf;
      }
    }

    window.addEventListener('load', splitCountriesForSmallScreen);
    window.addEventListener('resize', () => {
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(splitCountriesForSmallScreen, 200);
    });
    
// tabs navigation for popular place
document.addEventListener('DOMContentLoaded', () => {
  const popTabs = document.querySelectorAll('.popular-destination .tab-navigation .tab-item');
  const popCards = document.querySelectorAll('.popular-destination .row.gy-4 > div[data-category]');

  function showCategoryPopular(selectedCategory) {
    popCards.forEach(card => {
      const categoriesAttr = card.getAttribute('data-category');
      if (!categoriesAttr) return;
      const categories = categoriesAttr.split(' ');
      if (selectedCategory === 'most-popular' || categories.includes(selectedCategory)) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  }

  popTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      popTabs.forEach(t => t.classList.toggle('active', t === tab));
      const selectedCategory = tab.getAttribute('data-tab');
      showCategoryPopular(selectedCategory);
    });
  });

  // Show default active tab on load
  const defaultPopTab = document.querySelector('.popular-destination .tab-navigation .tab-item.active');
  if (defaultPopTab) {
    showCategoryPopular(defaultPopTab.getAttribute('data-tab'));
  }
});



// visa requirements tab navigation 
function splitCountriesForSmallScreenVisa() {
  const allColumns = document.querySelectorAll('.visa-requirements-section .all-columns .column-group, .visa-requirements-section .all-columns > div > .d-flex.flex-column');
  let allCountries = [];

  allColumns.forEach(column => {
    const countries = column.querySelectorAll('.country-card');
    countries.forEach(country => {
      allCountries.push(country.outerHTML);
    });
  });

  const half = Math.ceil(allCountries.length / 2);
  const firstHalf = allCountries.slice(0, half).join('');
  const secondHalf = allCountries.slice(half).join('');

  const smallCol1 = document.getElementById('small-col-1');
  const smallCol2 = document.getElementById('small-col-2');

  if (smallCol1 && smallCol2) {
    smallCol1.innerHTML = firstHalf;
    smallCol2.innerHTML = secondHalf;
  }
}

window.addEventListener('load', splitCountriesForSmallScreenVisa);
window.addEventListener('resize', () => {
  clearTimeout(window.resizeTimeout);
  window.resizeTimeout = setTimeout(splitCountriesForSmallScreenVisa, 200);
});

document.addEventListener("DOMContentLoaded", () => {
  const visaTabs = document.querySelectorAll(".visa-requirements-section .tab-navigation .tab-item");
  const allColumns = document.querySelector(".visa-requirements-section .all-columns");
  const allCountryCols = allColumns.querySelectorAll("[data-category]");

  function showCategoryVisaReq(selectedCategory) {
    allCountryCols.forEach(col => {
      const categoriesAttr = col.getAttribute("data-category");
      if (!categoriesAttr) return; // skip if no category

      const categories = categoriesAttr.split(" ");
      if (categories.includes(selectedCategory)) {
        col.style.display = "";
      } else {
        col.style.display = "none";
      }
    });

    // Clear small screen columns
    const smallCol1 = document.getElementById("small-col-1");
    const smallCol2 = document.getElementById("small-col-2");
    smallCol1.innerHTML = "";
    smallCol2.innerHTML = "";

    // Gather cards for small screen
    let cards = [];
    allCountryCols.forEach(col => {
      const categoriesAttr = col.getAttribute("data-category");
      if (!categoriesAttr) return;
      const categories = categoriesAttr.split(" ");
      if (categories.includes(selectedCategory)) {
        cards = cards.concat(Array.from(col.querySelectorAll(".country-card")));
      }
    });

    cards.forEach((card, idx) => {
      const clone = card.cloneNode(true);
      if (idx % 2 === 0) {
        smallCol1.appendChild(clone);
      } else {
        smallCol2.appendChild(clone);
      }
    });
  }

  visaTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      visaTabs.forEach(t => t.classList.toggle("active", t === tab));
      const selectedCategory = tab.getAttribute("data-tab");
      showCategoryVisaReq(selectedCategory);
    });
  });

  // Show default active tab content on page load
  const defaultTab = document.querySelector(".visa-requirements-section .tab-navigation .tab-item.active");
  if (defaultTab) {
    showCategoryVisaReq(defaultTab.getAttribute("data-tab"));
  }
});
