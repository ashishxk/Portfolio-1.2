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


window.onmouseover=function move() {
  var elem = document.getElementsByClassName("myBar1");   
  var width = 20;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 80) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}