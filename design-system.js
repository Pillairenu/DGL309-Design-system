"use strict"

function Search() {
  var input = document.getElementById("cb-Search").value;
  var filter = input.toUpperCase();
  var menu = document.getElementById("nav-menus");
  var links = menu.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    var linkText = links[i].textContent.toUpperCase();
    if (linkText.indexOf(filter) > -1) {
      links[i].style.display = "";
    } else {
      links[i].style.display = "none";
    }
  }
}

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
function showFunction() {
  var x = document.getElementById("nav-menus");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


function mynewFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "sidebar") {
    x.className += " responsive";
  } else {
    x.className = "sidebar";
  }
}