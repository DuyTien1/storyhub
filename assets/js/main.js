// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
	// Add smooth scrolling to all links
	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			document.querySelector(this.getAttribute("href")).scrollIntoView({
				behavior: "smooth",
			});
		});
	});

	// Initialize tooltips
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});

	// Search box functionality
	const searchBox = document.querySelector(".search-box");
	const searchBtn = document.querySelector(".search-btn");
	const searchInput = document.querySelector(".search-input");

	// Toggle search box on button click
	searchBtn.addEventListener("click", function () {
		searchBox.classList.toggle("active");
		if (searchBox.classList.contains("active")) {
			searchInput.focus();
		}
	});

	// Close search box when clicking outside
	document.addEventListener("click", function (e) {
		if (!searchBox.contains(e.target)) {
			searchBox.classList.remove("active");
		}
	});

	// Handle search submission
	searchInput.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			// Add your search functionality here
			console.log("Searching for:", searchInput.value);
			// Optional: Close search box after search
			searchBox.classList.remove("active");
		}
	});

	// Update copyright year
	document.getElementById("currentYear").textContent = new Date().getFullYear();

	// Initialize the Top Books Swiper
	const topBooksSwiper = new Swiper(".top-books-swiper", {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		centeredSlides: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
			dynamicBullets: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			// when window width is >= 576px
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 3,
				spaceBetween: 30,
			},
			// when window width is >= 1200px
			1200: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
		// Add accessibility features
		a11y: {
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
		},
	});
});
