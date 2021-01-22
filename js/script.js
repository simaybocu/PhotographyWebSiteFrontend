//navbarı scroll'a göre ayarlama
const nav = document.querySelector(".nav");
const navbarOnScroll = nav.offsetTop;
window.onscroll = () => {
  if (window.pageYOffset >= navbarOnScroll) {
    nav.classList.add("nav-onscroll");
  } else {
    nav.classList.remove("nav-onscroll");
  }
};


//Responsive nav menu

const navMenu = () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navList = document.querySelector(".nav-list");

  navbarToggler.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    navbarToggler.classList.toggle("toggle");
  });
};

navMenu();

//Services Slider

const serviceChange = () => {
  let firstChild, lastChild;
  const arrowLeft = document.querySelector("#arrow-left");
  const arrowRight = document.querySelector("#arrow-right");
  const servicesAll = document.querySelector("#services-slider");

  document.addEventListener("click", () => {
    if (event.target === arrowLeft) {
      /*sol buton tıklandığında*/

      lastChild = servicesAll.lastElementChild;
      servicesAll.insertAdjacentElement("afterbegin", lastChild); //tıkladığında bi sonrakini getir
    } else if (event.target === arrowRight) {
      firstChild = servicesAll.firstElementChild;
      servicesAll.insertAdjacentElement("beforeend", firstChild);
    }
  });
};

/* simtik */
const simtik = document.querySelector(".simtik");
const simtikChilds = simtik.children;
const simtikOnHover = () => {
  for (const child of simtikChilds) {
    child.style = "color: var(--dark-color);";
  }
};
const simtikOffHover = () => {
  for (const child of simtikChilds) {
    child.style = "";
  }
};
simtik.addEventListener("mouseover", simtikOnHover);
simtik.addEventListener("mouseout", simtikOffHover);

/* scroll to top */
//  function scrollToTop() {
//    const position =
//      document.body.scrollTop || document.documentElement.scrollTop;
//    if (position) {
//      window.scrollBy(0, -Math.max(1, Math.floor(position / 5)));
//      scrollAnimation = setTimeout("scrollToTop()", 30);
//    } else clearTimeout(scrollAnimation);
// }

serviceChange();

//Scroll reveal animations

ScrollReveal().reveal(".ani-left", {
  //soldan gelen yazı için
  origin: "left", //başlangıç yeri sol
  distance: "10rem", //animasyon uzunluğu 100px
  duration: 1000, //1sn
  easing: "ease-in", //içten dışa gelicek
});
ScrollReveal().reveal(".ani-right", {
  //sağdan gelen yazı için
  origin: "right",
  distance: "10rem",
  duration: 1000,
  easing: "ease-in",
});
ScrollReveal().reveal(".ani-fade-up", {
  //fotoğrafın ekran yenilenince yeniden yüklenmesi animasyonu
  opacity: 0, //başlangıçta gözükmeyecek
  easing: "ease-in",
});
ScrollReveal().reveal(".ani-bottom", {
  //iletişimin animasyonu(aşağıdan gelecek)
  origin: "bottom",
  distance: "10rem",
  duration: 1000,
  easing: "ease-in",
});
ScrollReveal().reveal(".ani-delay", {
  //ilk fotodaki gelen yazılardaki gecikme için
  delay: 500,
});
ScrollReveal().reveal(".ani-delay-2", {
  delay: 1000,
});
