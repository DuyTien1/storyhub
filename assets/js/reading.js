// Toggle Settings Panel
const settingsToggle = document.getElementById("settingsToggle");
const settingsPanel = document.getElementById("settingsPanel");
const closeSettings = document.getElementById("closeSettings");

// Create and add overlay div if it doesn't exist
let overlay = document.createElement("div");
overlay.className = "settings-overlay";
document.body.appendChild(overlay);

// Function to open settings
const openSettings = () => {
	settingsPanel.classList.add("active");
	overlay.classList.add("active");
	document.body.style.overflow = "hidden"; // Prevent scrolling
};

// Function to close settings
const closeSettingsPanel = () => {
	settingsPanel.classList.remove("active");
	overlay.classList.remove("active");
	document.body.style.overflow = ""; // Re-enable scrolling
};

// Toggle settings when clicking the settings button
settingsToggle.addEventListener("click", () => {
	if (settingsPanel.classList.contains("active")) {
		closeSettingsPanel();
	} else {
		openSettings();
	}
});

// Close settings when clicking the close button
closeSettings.addEventListener("click", closeSettingsPanel);

// Close settings when clicking outside
overlay.addEventListener("click", closeSettingsPanel);

// Close settings when pressing ESC key
document.addEventListener("keydown", (e) => {
	if (e.key === "Escape" && settingsPanel.classList.contains("active")) {
		closeSettingsPanel();
	}
});

// Font Size Controls
const decreaseFont = document.getElementById("decreaseFont");
const increaseFont = document.getElementById("increaseFont");
const currentFontSize = document.getElementById("currentFontSize");
let fontSize = 14; // Default size

decreaseFont.addEventListener("click", () => {
	if (fontSize > 8) {
		// Changed from 12 to 8 as minimum
		fontSize -= 1; // Changed from 2 to 1 for finer control
		updateFontSize();
	}
});

increaseFont.addEventListener("click", () => {
	if (fontSize < 24) {
		// Changed from 18 to 24 as maximum
		fontSize += 1; // Changed from 2 to 1 for finer control
		updateFontSize();
	}
});

function updateFontSize() {
	document.documentElement.style.setProperty("--font-size", `${fontSize}px`);
	currentFontSize.textContent = `${fontSize}px`;

	// Add visual feedback for size limits
	decreaseFont.classList.toggle("disabled", fontSize <= 8);
	increaseFont.classList.toggle("disabled", fontSize >= 24);

	// Reset chapter navigation to fixed size
	const chapterNav = document.querySelector(".chapter-navigation");
	const navButtons = document.querySelectorAll(".nav-btn");

	if (chapterNav) {
		chapterNav.style.fontSize = "14px";
	}

	if (navButtons.length) {
		navButtons.forEach((btn) => {
			btn.style.fontSize = "14px";
			const icons = btn.querySelectorAll("i");
			const spans = btn.querySelectorAll("span");

			icons.forEach((icon) => (icon.style.fontSize = "14px"));
			spans.forEach((span) => (span.style.fontSize = "14px"));
		});
	}
}

// Reading Progress
const progressBar = document.getElementById("readingProgress");

window.addEventListener("scroll", () => {
	const windowHeight = window.innerHeight;
	const documentHeight = document.documentElement.scrollHeight - windowHeight;
	const scrolled = window.scrollY;
	const progress = (scrolled / documentHeight) * 100;
	progressBar.style.width = `${progress}%`;
});

// Auto-hide Header
let lastScroll = 0;
const header = document.querySelector(".reading-header");

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;

	if (currentScroll > lastScroll && currentScroll > 100) {
		header.classList.add("hidden");
	} else {
		header.classList.remove("hidden");
	}

	lastScroll = currentScroll;
});

// Enhanced Theme Handling
const themes = {
	dark: {
		darkBg: "#0c1a2d",
		mediumBg: "#1a2c4e",
		lightBg: "#2e4272",
		text: "#e6e6e6",
		textMuted: "#9aa5b8",
	},
	light: {
		darkBg: "#ffffff",
		mediumBg: "#f5f5f5",
		lightBg: "#e9e9e9",
		text: "#333333",
		textMuted: "#666666",
	},
	sepia: {
		darkBg: "#f4ecd8",
		mediumBg: "#e4d5b7",
		lightBg: "#d8c8a5",
		text: "#5c4b24",
		textMuted: "#7a6942",
	},
	night: {
		darkBg: "#000000",
		mediumBg: "#121212",
		lightBg: "#1e1e1e",
		text: "#e0e0e0",
		textMuted: "#a0a0a0",
	},
	ocean: {
		darkBg: "#1a3b5c",
		mediumBg: "#2d6089",
		lightBg: "#3d7ba8",
		text: "#e6e6e6",
		textMuted: "#a5c4e0",
	},
	forest: {
		darkBg: "#1b4d3e",
		mediumBg: "#2d7a5e",
		lightBg: "#3e9876",
		text: "#e6e6e6",
		textMuted: "#a5d8c4",
	},
	sunset: {
		darkBg: "#4a2618",
		mediumBg: "#b5441d",
		lightBg: "#e05f2d",
		text: "#fff1e6",
		textMuted: "#ffc5a1",
	},
	coffee: {
		darkBg: "#2c1810",
		mediumBg: "#5c341e",
		lightBg: "#8c512c",
		text: "#f5ebe1",
		textMuted: "#d3b8a0",
	},
	lavender: {
		darkBg: "#4a3b7c",
		mediumBg: "#6a5aad",
		lightBg: "#8a78d2",
		text: "#f2efff",
		textMuted: "#c9c2e8",
	},
	mint: {
		darkBg: "#d8f4e4",
		mediumBg: "#9fe6c3",
		lightBg: "#76d6a8",
		text: "#2d3e36",
		textMuted: "#5c7869",
	},
	contrast: {
		darkBg: "#000000",
		mediumBg: "#0a0a0a",
		lightBg: "#181818",
		text: "#ffffff",
		textMuted: "#dddddd",
	},
	paper: {
		darkBg: "#f8f5e6",
		mediumBg: "#e8e0c9",
		lightBg: "#d5c8a8",
		text: "#463c28",
		textMuted: "#7d6b49",
	},
};

// Update theme selection with the new themes
const themeOptions = document.querySelectorAll(".theme-option");
themeOptions.forEach((option) => {
	option.addEventListener("click", () => {
		// Remove active class from all options
		themeOptions.forEach((opt) => opt.classList.remove("active"));

		// Add active class to selected option
		option.classList.add("active");

		// Get theme data
		const theme = option.dataset.theme;
		const themeColors = themes[theme];

		// Apply theme
		document.documentElement.style.setProperty("--dark-blue", themeColors.darkBg);
		document.documentElement.style.setProperty("--medium-blue", themeColors.mediumBg);
		document.documentElement.style.setProperty("--light-blue", themeColors.lightBg);
		document.documentElement.style.setProperty("--text-light", themeColors.text);
		document.documentElement.style.setProperty("--text-muted", themeColors.textMuted);

		// Save the theme preference
		localStorage.setItem("preferredTheme", theme);
	});
});

// Load saved theme preference
document.addEventListener("DOMContentLoaded", () => {
	const savedTheme = localStorage.getItem("preferredTheme");
	if (savedTheme) {
		const themeToApply = document.querySelector(`.theme-option[data-theme="${savedTheme}"]`);
		if (themeToApply) {
			themeToApply.click();
		}
	}
});

// Reading Width Control
const readingWidth = document.getElementById("readingWidth");

readingWidth.addEventListener("input", () => {
	document.documentElement.style.setProperty("--reading-width", `${readingWidth.value}px`);
});

// Comment Section Functionality
document.addEventListener("DOMContentLoaded", function () {
	// Toggle replies visibility
	const viewRepliesBtn = document.querySelector(".btn-view-replies");
	if (viewRepliesBtn) {
		viewRepliesBtn.addEventListener("click", function () {
			const replyItems = this.parentElement.querySelectorAll(".reply-item");
			replyItems.forEach((item) => {
				if (item.style.display === "none" || !item.style.display) {
					item.style.display = "block";
					this.innerHTML = '<i class="fas fa-chevron-up me-2"></i>Ẩn phản hồi';
				} else {
					item.style.display = "none";
					this.innerHTML = '<i class="fas fa-chevron-down me-2"></i>Xem 3 phản hồi';
				}
			});
		});
	}

	// Like button functionality
	const likeButtons = document.querySelectorAll(".btn-action-comment i.far.fa-heart");
	likeButtons.forEach((button) => {
		button.addEventListener("click", function () {
			const likeCountElement = this.parentElement.querySelector("span");
			const currentLikes = parseInt(likeCountElement.innerText);

			if (this.classList.contains("far")) {
				this.classList.remove("far");
				this.classList.add("fas");
				this.style.color = "#e74c3c";
				likeCountElement.innerText = currentLikes + 1;
			} else {
				this.classList.remove("fas");
				this.classList.add("far");
				this.style.color = "";
				likeCountElement.innerText = currentLikes - 1;
			}
		});
	});
});
