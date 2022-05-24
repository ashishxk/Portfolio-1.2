window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "1.5rem 1.5rem";
    document.getElementById("logo").style.fontSize = "1.5rem";
  } else {
    document.getElementById("navbar").style.padding = "3rem 1.5rem";
    document.getElementById("logo").style.fontSize = "3.5rem";
  }
} 


function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}


