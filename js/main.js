//слайдер
let sliderInner = document.querySelector(".slider__inner");
let position = 0;
let step = (sliderInner.offsetWidth / 100) * 34.2857;

document.querySelector(".prev").onclick = function () {
  position += step;
  position = Math.min(position, 0);
  sliderInner.style.marginLeft = position + "px";
};

document.querySelector(".next").onclick = function () {
  position -= step;
  position = Math.max(position, -step * 2);
  sliderInner.style.marginLeft = position + "px";
};

//модальне вікно
let modalWindow = document.querySelector(".transparent");
let modalOpenBtn = document.querySelectorAll(".open-modal");

modalOpenBtn.forEach((item) => {
  item.addEventListener("click", () => {
    modalWindow.style.visibility = "visible";
    modalWindow.style.opacity = "1";
  });
});

modalWindow.addEventListener("click", () => {
  if (event.target.className === "transparent") {
    modalWindow.style.opacity = "0";
    modalWindow.style.visibility = "hidden";
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "Escape") {
    modalWindow.style.visibility = "hidden";
    modalWindow.style.opacity = "0";
  }
});

//навігація
let contacts = document.getElementById("contacts"),
  about = document.getElementById("about"),
  serveses = document.getElementById("serveses"),
  contactLink = document.querySelector(".contactsLink"),
  aboutLink = document.querySelector(".aboutLink"),
  servesesLink = document.querySelector(".servesesLink");

contactLink.addEventListener("click", function () {
  event.preventDefault();
  contacts.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

aboutLink.addEventListener("click", function () {
  event.preventDefault();
  about.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

servesesLink.addEventListener("click", function () {
  event.preventDefault();
  serveses.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

//відкриття прайсу
let openPriceBtn = document.querySelector(".about_price");
let priceModalWindow = document.querySelector(".price_transparent")

openPriceBtn.addEventListener("click", ()=>{
  priceModalWindow.style.visibility = "visible";
  priceModalWindow.style.opacity = "1";
})

priceModalWindow.addEventListener("click", () => {
  if (event.target.className === "price_transparent") {
    priceModalWindow.style.opacity = "0";
    priceModalWindow.style.visibility = "hidden";
  }
});

document.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "Escape") {
    priceModalWindow.style.visibility = "hidden";
    priceModalWindow.style.opacity = "0";
  }
});
