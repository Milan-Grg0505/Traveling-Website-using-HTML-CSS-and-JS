//change navbar styles on scroll

window.addEventListener("scroll",()=>{
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
});


// open/close nav menu button

const navRight = document.querySelector('.nav_right');
const openBtn = document.querySelector('#open-menu');
const closeBtn = document.querySelector('#close-menu');

openBtn.addEventListener("click", () => {
  navRight.classList.add("active");
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  navRight.classList.remove("active");
  closeBtn.style.display = "none";
  openBtn.style.display = "inline-block";
});

// sliding effect

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Create image and content slides (your banner images & text)
  const slides = [
    {
      image: "./images/banner1.jpg",
      title: "Travel & Adventure",
      subtitle: "Take advantage of this amazing exclusive offer",
    },
    {
      image: "./images/banner2.jpg",
      title: "Discover Hidden Places",
      subtitle: "Explore destinations you’ve never seen before",
    },
    {
      image: "./images/banner3.jpg",
      title: "Your Journey Awaits",
      subtitle: "Make every trip memorable with us",
    },
  ];

  // Select header and content elements
  const header = document.querySelector(".header");
  const headerTitle = document.querySelector(".header_content h2");
  const headerSubtitle = document.querySelector(".header_content h4");
  const leftArrow = document.querySelector(".left_arrow");
  const rightArrow = document.querySelector(".right_arrow");

  let currentIndex = 0;

  // Initialize Swiper logic manually
  function updateSlide(index) {
    const slide = slides[index];
    header.style.background = `
      linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
      url('${slide.image}') no-repeat center center / cover
    `;
    headerTitle.textContent = slide.title;
    headerSubtitle.textContent = slide.subtitle;

    // Add fade animation for smooth transitions
    headerTitle.style.opacity = 0;
    headerSubtitle.style.opacity = 0;
    setTimeout(() => {
      headerTitle.style.opacity = 1;
      headerSubtitle.style.opacity = 1;
    }, 500);
  }

  // Initial slide
  updateSlide(currentIndex);

  // Arrow button controls
  rightArrow.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex = 0; // Go back to first slide
    }
    updateSlide(currentIndex);
  });

  leftArrow.addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = slides.length - 1; // Go to last slide
    }
    updateSlide(currentIndex);
  });

});
