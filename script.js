// Dark Mode Toggle
    const toggle = document.getElementById('darkModeToggle');
    toggle.addEventListener('click', () => {
      console.log('Dark mode toggle clicked!'); // Debugging
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
      console.log('Loading dark theme from localStorage');
      document.documentElement.classList.add('dark');
    }

    async function loadConsoles() {
    const response = await fetch('consoles.json');
    const consoles = await response.json();
    const wrapper = document.getElementById('consoles-wrapper');

    consoles.forEach(console => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
          <img src="${console.image}" alt="${console.name}" class="mx-auto mb-4 lazy" loading="lazy">
          <h3 class="text-xl font-semibold text-gray-800 dark:text-white">${console.name}</h3>
        </div>
      `;
      wrapper.appendChild(slide);
    })};

    // Initialize Swiper for Consoles
    new Swiper('.consoles-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });

    // Initialize Swiper for Pads
    new Swiper('.pads-swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });

    loadConsoles();