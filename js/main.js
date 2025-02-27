const navIcon = document.querySelector(".nav-icon");
const navList = document.querySelector(".nav-list");

navIcon.onclick = function () {
  document.body.classList.toggle("lock");
  navIcon.classList.toggle("active");
  navList.classList.toggle("active");
};

navList.onclick = function () {
  if (navList.classList.contains("active")) {
    document.body.classList.remove("lock");
    navIcon.classList.remove("active");
    navList.classList.remove("active");
  }
};

// Включение ночного режима по кнопке

const darkModeBtn = document.querySelector(".dark-mode-btn");
const darkModeBtnIcon = document.querySelector(".dark-mode-btn_icon");

darkModeBtn.onclick = function () {
  darkModeBtn.classList.toggle("dark-mode-btn_active");
  darkModeBtnIcon.classList.toggle("dark-mode-btn_icon_active");
  const isDark = document.body.classList.toggle("dark");

  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};

// Проверка темной темы в localStorage
if (localStorage.getItem("darkMode") === "dark") {
  darkModeBtn.classList.add("dark-mode-btn_active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  darkModeBtn.classList.remove("dark-mode-btn_active");
  document.body.classList.remove("dark");
}

// Проверка темной темы на уровне системных настроек
if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  darkModeBtn.classList.add("dark-mode-btn_active");
  document.body.classList.add("dark");
}
