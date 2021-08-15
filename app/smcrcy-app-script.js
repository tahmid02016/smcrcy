const welcmPage = document.getElementById("welcm-pg");
const homePage = document.getElementById("home-pg");
const hamburgerIcon = document.getElementById("hamburger");
const menuPage = document.getElementById("menu-pg");
const appInfoPage = document.getElementById("app-inf-pg");
const redCrescentPage = document.getElementById("rc-pg");
const collegePage = document.getElementById("clg-pg");
const pages = document.querySelectorAll(".page");

window.onload = function() {
  welcmPage.style.left = "0";
  setTimeout(function() {
    welcmPage.style.left = "-100%";
    homePage.style.left = "0";
  }, 1500);
}

function menuHandler() {
  if (hamburgerIcon.className === "hamburger") {
    hamburgerIcon.className = "hamburger close-menu";
    menuPage.style.left = "0";
  } else {
    hamburgerIcon.className = "hamburger";
    menuPage.style.left = "-100%";
  }
}

function appInfoPageHandler(cmd) {
  if (cmd) {
    appInfoPage.style.left = "0";
  } else {
    appInfoPage.style.left = "-100%";
  }
}

function redCrescentPageHandler(cmd) {
  if (cmd) {
    homePage.style.left = "-100%";
    redCrescentPage.style.left = "0";
  } else {
    redCrescentPage.style.left = "-100%";
    homePage.style.left = "0";
  }
}

function collegePageHandler(cmd) {
  if (cmd) {
    homePage.style.left = "-100%";
    collegePage.style.left = "0";
  } else {
    collegePage.style.left = "-100%";
    homePage.style.left = "0";
  }
}

function themeHandler(bgColr) {
  var colr = bgColr === "white" ? "black" : "white";
  var indx = 0;
  while (indx < 6) {
    pages[indx].style.backgroundColor = bgColr;
    pages[indx].style.color = colr;
    indx++;
  }
}

function langHandler(lang) {
  if (lang === "bn") {
    alert("multi-language feature has not been implemented yet");
  }
}
