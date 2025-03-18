document.addEventListener("DOMContentLoaded", function () {
	const slider = document.querySelector(".authors-slider");
	const prevBtn = document.querySelector(".prev-btn");
	const nextBtn = document.querySelector(".next-btn");
	const cardWidth = 215; // card width + gap

	prevBtn.addEventListener("click", () => {
		slider.scrollLeft -= cardWidth;
	});

	nextBtn.addEventListener("click", () => {
		slider.scrollLeft += cardWidth;
	});

	// Optional: Add touch scroll for mobile
	let isDown = false;
	let startX;
	let scrollLeft;

	slider.addEventListener("mousedown", (e) => {
		isDown = true;
		slider.classList.add("active");
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	});

	slider.addEventListener("mouseleave", () => {
		isDown = false;
		slider.classList.remove("active");
	});

	slider.addEventListener("mouseup", () => {
		isDown = false;
		slider.classList.remove("active");
	});

	slider.addEventListener("mousemove", (e) => {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x - startX) * 2;
		slider.scrollLeft = scrollLeft - walk;
	});
});
