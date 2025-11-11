const featuredData = [
  {
    image: "./images/s2.jpg",
    title: "Switzerland - Best Zurich",
    location: "Zermatt, Switzerland",
    rating: 5.0,
    price: 39.0,
    link: "popular.html"
  },
  {
    image: "./images/s1.jpg",
    title: "Paris - City of Lights",
    location: "Paris, France",
    rating: 4.8,
    price: 49.0,
    link: "popular.html"
  },
  {
    image: "./images/s3.jpg",
    title: "Tokyo - Modern & Tradition",
    location: "Tokyo, Japan",
    rating: 4.9,
    price: 45.0,
    link: "popular.html"
  },
  {
    image: "./images/s4.jpg",
    title: "Maldives - Island Paradise",
    location: "Male, Maldives",
    rating: 4.7,
    price: 59.0,
    link: "popular.html"
  },
  {
    image: "./images/s5.jpg",
    title: "New York - City Adventure",
    location: "New York, USA",
    rating: 4.6,
    price: 55.0,
    link: "popular.html"
  },
  // {
  //   image: "./images/s6.jpg",
  //   title: "Nepal - Himalayan Trek",
  //   location: "Kathmandu, Nepal",
  //   rating: 4.9,
  //   price: 42.0,
  //   link: "popular.html"
  // },
  // {
  //   image: "./images/s7.jpg",
  //   title: "Bali - Tropical Escape",
  //   location: "Bali, Indonesia",
  //   rating: 4.8,
  //   price: 50.0,
  //   link: "popular.html"
  // },
  // {
  //   image: "./images/s8.jpg",
  //   title: "Santorini - Blue Horizon",
  //   location: "Santorini, Greece",
  //   rating: 4.9,
  //   price: 47.0,
  //   link: "popular.html"
  // }
];
const container = document.querySelector('#featuredContainer');

featuredData.forEach((tour) =>{
  const box = document.createElement("article");
  box.classList.add("featured-box","swiper-slide");

  box.innerHTML = `
    <div class="featured-img">
          <img src="${tour.image}" alt="">
        </div>
        <div class="featured-details">
          <div class="featured-stars">
             ${'<i class="ri-star-fill"></i>'.repeat(5)}
            <div class="rating">
              <h5>${tour.rating.toFixed(2)}</h5>
            </div>
          </div>
          <h4>${tour.title}</h4>
          <h5>
            <i class="ri-map-pin-fill"></i>
            ${tour.location}
          </h5>

         <div class="price">
          <p>Form</p>
          <h3>$${tour.price.toFixed(2)}</h3>
         </div>

         <a href="${tour.link}">
          Explore More <i class="ri-arrow-right-line"></i>
         </a>

    </div>
  `;
  container.appendChild(box);
});


