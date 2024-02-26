const openMenuBtn = document.getElementById("open-menu__btn");
const closeMenuBtn = document.getElementById("close-menu__btn");
const mobileMenu = document.querySelector(".mobile-menu");

const themeColorMeta = document.getElementById("theme-color-meta");

const changeColor = document.querySelector(".change-color");

const header = document.querySelector("header");
const footer = document.querySelector("footer");

openMenuBtn.addEventListener("click", () => {
  gsap.to(mobileMenu, {x: "0", duration: 0.3});
  document.documentElement.style.overflow = "hidden";
  document.body.style.overflow = "hidden";
  mobileMenu.style.overflow = "hidden";
});

closeMenuBtn.addEventListener("click", () => {
  gsap.to(mobileMenu, {x: "100%", duration: 0.3});
  document.documentElement.style.overflow = "inherit";
  document.body.style.overflow = "inherit";
});

const mobileNav = document.querySelectorAll(".mobile-nav li a");

mobileNav.forEach((link) => {
  link.addEventListener("click", () => {
    gsap.to(mobileMenu, {x: "100%", duration: 0.3});
    document.documentElement.style.overflow = "inherit";
    document.body.style.overflow = "inherit";
  });
});

let currentSlide = swiper.activeIndex;
const sliderImages = document.querySelectorAll(".swiper-slide__photo");
const sliderPrices = document.querySelectorAll(".price-box");

swiper.on("slideChange", function () {
  currentSlide = swiper.activeIndex;
  if (currentSlide === 0) {
    gsap.to(header, {background: "#918be4", duration: 0.3});
    gsap.to(footer, {background: "#918be4", duration: 0.3});
    themeColorMeta.content = "#918be4";
    gsap.to(document.documentElement, {background: "#918be4", duration: 0.3});
    gsap.to(changeColor, {color: "#918be4", duration: 0.3});

    gsap.to(sliderImages[0], {opacity: 1, duration: 0.6});
    gsap.to(sliderImages[1], {opacity: 0, duration: 0.6});
    gsap.to(sliderImages[2], {opacity: 0, duration: 0.6});

    gsap.to(sliderPrices[0], {scale: 1, duration: 0.6});
    gsap.to(sliderPrices[1], {scale: 0, duration: 0.6});
    gsap.to(sliderPrices[2], {scale: 0, duration: 0.6});
  } else if (currentSlide === 1) {
    gsap.to(header, {background: "#f49894", duration: 0.3});
    gsap.to(footer, {background: "#f49894", duration: 0.3});
    gsap.to(footer, {background: "#918be4", duration: 0.3});
    themeColorMeta.content = "#f49894";
    gsap.to(document.documentElement, {background: "#f49894", duration: 0.3});
    gsap.to(changeColor, {color: "#f49894", duration: 0.3});

    gsap.to(sliderImages[0], {opacity: 0, duration: 0.6});
    gsap.to(sliderImages[1], {opacity: 1, duration: 0.6});
    gsap.to(sliderImages[2], {opacity: 0, duration: 0.6});

    gsap.to(sliderPrices[0], {scale: 0, duration: 0.6});
    gsap.to(sliderPrices[1], {scale: 1, duration: 0.6});
    gsap.to(sliderPrices[2], {scale: 0, duration: 0.6});
  } else if (currentSlide === 2) {
    gsap.to(header, {background: "#36363e", duration: 0.3});
    gsap.to(footer, {background: "#36363e", duration: 0.3});

    gsap.to(sliderImages[currentSlide], {scale: 1, duration: 0.3});
    themeColorMeta.content = "#36363e";
    gsap.to(document.documentElement, {background: "#36363e", duration: 0.3});
    gsap.to(changeColor, {color: "#36363e", duration: 0.3});

    gsap.to(sliderImages[0], {opacity: 0, duration: 0.6});
    gsap.to(sliderImages[1], {opacity: 0, duration: 0.6});
    gsap.to(sliderImages[2], {opacity: 1, duration: 0.6});

    gsap.to(sliderPrices[0], {scale: 0, duration: 0.6});
    gsap.to(sliderPrices[1], {scale: 0, duration: 0.6});
    gsap.to(sliderPrices[2], {scale: 1, duration: 0.6});
  }
});

const shippingPreviews = document.querySelectorAll(
  ".shipping-and-returns__preview"
);

shippingPreviews.forEach((preview, index) => {
  preview.addEventListener("click", function () {
    let content = this.nextElementSibling;
    content.classList.toggle("expanded");
    const arrow = shippingPreviews[index].querySelector(".arrow");

    if (content.classList.contains("expanded")) {
      gsap.to(arrow, {rotation: 180, duration: 0.3});
    } else {
      gsap.to(arrow, {rotation: 0, duration: 0.3});
    }
  });
});

const footerBtn = document.getElementById("footer-btn");
const footerText = document.querySelector(".footer__text p");

footerBtn.addEventListener("click", () => {
  footerText.classList.toggle("expanded");
  if (footerText.classList.contains("expanded")) {
    gsap.to(footerBtn, {textContent: "Read less", duration: 0.3});
  } else {
    gsap.to(footerBtn, {textContent: "Read more", duration: 0.3});
  }
});

// Первая секция

const purpleSection = document.querySelector("purple-section");

// Вторая секция

const secondSection = document.querySelector(".introducing-section");
const secondSectionTitle = secondSection.querySelector("h4");
const secondSectionColoredTitle = secondSection.querySelector("h4 b");

const secondSectionPicture = secondSection.querySelector("img");

gsap.to(secondSectionTitle, {
  scale: 1,
  scrollTrigger: {
    trigger: secondSection,
    start: "top 75%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(secondSectionColoredTitle, {
  opacity: 1,
  scrollTrigger: {
    trigger: secondSection,
    start: "top 65%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.to(secondSectionPicture, {
  y: 0,
  scrollTrigger: {
    trigger: secondSection,
    start: "top 55%",
    end: "top 65%",
    scrub: 2,
  },
});

// Третья секция
const thirdSection = document.querySelector(".shipping-and-returns__section");
const thirdSectiontitle = thirdSection.querySelector("h4");
const thirdSectionList = thirdSection.querySelectorAll("ul li");

gsap.to(thirdSectiontitle, {
  scale: 1,
  scrollTrigger: {
    trigger: thirdSection,
    start: "top 75%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(thirdSectionList[0], {
  x: 0,
  scrollTrigger: {
    trigger: thirdSection,
    start: "top 75%",
    end: "top 75%",
    scrub: 2,
  },
});

gsap.to(thirdSectionList[1], {
  x: 0,
  scrollTrigger: {
    trigger: thirdSection,
    start: "top 65%",
    end: "top 65%",
    scrub: 2,
  },
});

gsap.to(thirdSectionList[2], {
  x: 0,
  scrollTrigger: {
    trigger: thirdSection,
    start: "top 55%",
    end: "top 55%",
    scrub: 2,
  },
});
