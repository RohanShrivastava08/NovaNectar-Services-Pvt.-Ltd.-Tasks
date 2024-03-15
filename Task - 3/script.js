document.addEventListener("DOMContentLoaded", function () {
  // Image slideshow functionality
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Auto advance slides every 3 seconds

  // Form validation for contact form
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = contactForm.querySelector("#name").value.trim();
      const email = contactForm.querySelector("#email").value.trim();
      const message = contactForm.querySelector("#message").value.trim();
      const errorElement = contactForm.querySelector(".error");

      // Reset previous error messages
      errorElement.textContent = "";

      // Validate name
      if (name === "") {
        showError("Name is required.");
        return;
      }

      // Validate email
      if (email === "") {
        showError("Email is required.");
        return;
      } else if (!isValidEmail(email)) {
        showError("Invalid email format.");
        return;
      }

      // Validate message
      if (message === "") {
        showError("Message is required.");
        return;
      }

      // Form submission logic goes here (e.g., AJAX request)

      // For demonstration, log form data
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);
    });
  }

  function showError(message) {
    const errorElement = contactForm.querySelector(".error");
    errorElement.textContent = message;
  }

  function isValidEmail(email) {
    // Basic email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});
