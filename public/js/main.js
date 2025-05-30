// File: public/js/main.js

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".subscribe-input"); // Example selector
  if (element) {
    const rect = element.getBoundingClientRect();
    console.log(rect); // Perform operations safely
  } else {
    console.error("Element not found");
  }
});

// scrolling
let scrollTimeout;

window.addEventListener("scroll", function () {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      const sectionTop = aboutSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100) {
        aboutSection.classList.add("animate");
      }
    }
  }, 100); // Execute after 100ms of inactivity
});

// File: public/js/main.js
document.addEventListener('DOMContentLoaded', () => {
  console.log ('Frontend script loaded');
});

// card loop


fetch('/api/products')
  .then(res => res.json())
  .then(products => {
    const container = document.getElementById("product-list");

    products.forEach((product, index) => {
      const carouselId = `carousel-${index}`;
      let carouselItems = product.images.map((img, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${img}" class="d-block w-100" alt="${product.name}">
        </div>
      `).join('');

      const cardHTML = `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3 col-xxl-3">
          <div class="my-5">
            <div class="card mx-auto" style="max-width: 400px;">
              <div id="${carouselId}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">${carouselItems}</div>
                <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
                  <span class="carousel-control-next-icon"></span>
                </button>
              </div>
              <div class="card-body text-left">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text fw-bold text-success mb-2">₹${product.price}</p>
                <div class="btn-group" role="group">
                  <button class="btn size-btn">S</button>
                  <button class="btn size-btn">M</button>
                  <button class="btn size-btn">L</button>
                  <button class="btn size-btn">XL</button>
                  <button class="btn size-btn">XXL</button>
                </div>
                <p class="card-text pt-2">${product.description}</p>
                <a href="#" class="btn custom-buy-btn">Buy Now</a>
              </div>
            </div>
          </div>
        </div>
      `;

      container.innerHTML += cardHTML;
    });
  });



