
//  navbar toggle button  
    const toggler = document.querySelector('.custom-toggler');
      const openIcon = toggler.querySelector('.open-icon');
      const closeIcon = toggler.querySelector('.close-icon');
      const navbarCollapse = document.getElementById('navbarTogglerDemo03');

      toggler.addEventListener('click', () => {
         // Toggle icons
         openIcon.classList.toggle('d-none');
         closeIcon.classList.toggle('d-none');
      });

      // Optional: Reset icons when menu is closed (on navigation)
      navbarCollapse.addEventListener('hidden.bs.collapse', () => {
         openIcon.classList.remove('d-none');
         closeIcon.classList.add('d-none');
      });


//   arrow slider of dynamic listing  
    const carousel = new bootstrap.Carousel(document.getElementById('propertyCarousel'));

      document.querySelectorAll('.prevBtn').forEach(button => {
         button.addEventListener('click', () => {
            carousel.prev();
         });
      });

      document.querySelectorAll('.nextBtn').forEach(button => {
         button.addEventListener('click', () => {
            carousel.next();
         });
      });