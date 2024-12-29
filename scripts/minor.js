function handleTabClicked(event) {
    const tabCategory = event.target.id;
    const content = document.querySelector(`.content.${tabCategory}`);
    const contents = document.querySelectorAll(`.content`);
    for(let current of contents){
        if (current === content){
            current.classList.add("active");
        } else {
            current.classList.remove("active");
        }
    }

}


// const tarotCard = document.querySelector('.tarot-card');
//   toggle = document.querySelector('.toggle');

//   toggle.addEventListener("click", () => toggle.classList.toggle("active"))




// КНОПКА НАВЕРХ:

function myFunction() {
    // Объявлять переменные
    var input, filter, ul, li, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("fltr");
    li = ul.getElementsByTagName("li");
  
    // Выполните цикл по всем элементам списка и скройте те, которые не соответствуют запросу поиска
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase() === filter) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    let toTopBtn = document.querySelector(".go-to-top");
    let pageYOffset = 0;
    let timeout;
    window.onscroll = function () {
      if (timeout) {
        window.clearTimeout(timeout);
      }
      if (window.scrollY > 180) {
        toTopBtn.style.display = "block";
      } else {
        toTopBtn.style.display = "none";
      }
      pageYOffset = window.pageYOffset;
      timeout = window.setTimeout(function () {
        if (window.scrollY === pageYOffset) {
          toTopBtn.style.display = "none";
        }
      }, 3000);
    };
  
    // плавный скролл наверх
    toTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    function hasTouchDevice() {
      return !!('ontouchstart' in window || navigator.maxTouchPoints);
    }
    if (!hasTouchDevice()) {
      const toUp = document.querySelector('.go-to-top');
      toUp.onmouseenter = function(){
        this.classList.add('hover');
      }
      toUp.onmouseleave = function() {
        this.classList.remove('hover');
      }
    }
  });


