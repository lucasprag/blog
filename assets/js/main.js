const darkModeMatcher =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");

function prefersDarkMode() {
  return darkModeMatcher && darkModeMatcher.matches;
}

function switchToTheme(theme, shouldSave) {
  document.documentElement.classList.add(theme);

  if (shouldSave) {
    localStorage.setItem("theme", theme);
  }
}

const savedThemeOnPageLoad = localStorage.getItem("theme");

if (savedThemeOnPageLoad) {
  switchToTheme(savedThemeOnPageLoad);
} else if (prefersDarkMode()) {
  switchToTheme("dark");
} else {
  switchToTheme("light");
}

function switchTheme() {
  const currentAttributeTheme = document.documentElement.classList.contains(
    "dark"
  )
    ? "dark"
    : "light";

  if (currentAttributeTheme == "light") {
    document.documentElement.classList.remove("light");
    switchToTheme("dark", true);
  } else {
    document.documentElement.classList.remove("dark");
    switchToTheme("light", true);
  }
}

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", switchTheme);

// Mobile menu toggle
const mobileMenuButton = document.querySelector(
  '[aria-controls="mobile-menu"]'
);
const mobileMenu = document.getElementById("mobile-menu");
const mobileIcons = mobileMenuButton.querySelectorAll('[data-slot="icon"]');

mobileMenuButton.addEventListener("click", () => {
  const isExpanded = mobileMenuButton.getAttribute("aria-expanded") === "true";
  mobileMenuButton.setAttribute("aria-expanded", !isExpanded);
  mobileMenu.classList.toggle("hidden");
  mobileIcons.forEach((icon) => icon.classList.toggle("hidden"));
});
