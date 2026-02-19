window.addEventListener("scroll", function () {
  const scrollY = window.scrollY;

  document.querySelector(".background").style.transform =
    `translateY(${scrollY * 0.2}px)`;

  document.querySelector(".mid").style.transform =
    `translateY(${scrollY * 0.4}px)`;

  document.querySelector(".foreground").style.transform =
    `translateY(${scrollY * 0.6}px)`;
});
