 new Swiper('.imgscroll', {
    // Optional parameters
    loop: true,
    spacebetween:30,
  
    // pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakppoints:{
        0:{
            slidePerView:1
        },
        768:{
            slidePerView:2
        },
        1024:{
            slidePerView:3
        },
    }
  });


  function openNav() {
    document.getElementById("mySidebar").style.width = "400px";
    document.querySelector('.main_container').style.opacity = "70%";
    document.querySelector('.main_header').style.opacity = "70%";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector('.main_container').style.opacity = "100%";
    document.querySelector('.main_header').style.opacity = "100%";
    }
    function main_container2(){
        document.getElementById("mySidebar").style.width = "0";
        document.querySelector('.main_container').style.opacity = "100%";
    document.querySelector('.main_header').style.opacity = "100%";
    }


    var header = document.getElementById("nav_bar");
    var btns = document.getElementsByClassName("btn_1");
    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function() {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
      });
    }

  function scrollToSection(event, sectionId) {
    event.preventDefault(); 
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}