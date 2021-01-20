// header javascript code //
let humbergar = document.querySelector('.humbarger-box');
let mainMenu= document.querySelector('.nav');

humbergar.addEventListener('click',()=>{
    humbergar.classList.toggle('show');
    mainMenu.classList.toggle('show-menu');

});


// menu fixed code blew //

window.addEventListener("scroll", function() {
    let mainNav = document.querySelector(".header-area");
  
    if (window.pageYOffset > 200) {
      mainNav.classList.add("is-sticky");
    } else {
      mainNav.classList.remove("is-sticky");
    }
  });
  