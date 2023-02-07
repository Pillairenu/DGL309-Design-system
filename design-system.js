"use strict"

function Search() {
  let input, filter, ul, li, a, i;
  input = document.getElementById("cb-Search");
  filter = input.value.toUpperCase();
  ul = document.getElementById("nav-menus");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
  ol=document.getElementById("nav-submenu");
  oi=ol.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    a = oi[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      oi[i].style.display = "";
    } else {
      oi[i].style.display = "none";
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

