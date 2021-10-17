const slider = document.querySelector(".cards");
let isDown = false;
let startX;
let scrollLeft;

const cards = document.querySelectorAll(".card");
const btnShowMore = document.querySelector(".btnShowMore");
let cardsCounter = 3;
let cardsCounterStart = 3;
let viewportWidth = window.innerWidth;

const hamburgerMenuIcon = document.querySelector(".hamburgerMenuIcon");
const mobileMenu = document.querySelector(".mobileMenu");
let isActive = false;

slider.addEventListener("mousedown", (e) => {
    isDown = true;
    slider.style.cursor = "grabbing";
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
    isDown = false;
    slider.style.cursor = "grab";
});
slider.addEventListener("mouseup", () => {
    isDown = false;
    slider.style.cursor = "grab";
});
slider.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});

btnShowMore.addEventListener("click", () => {
    while (cardsCounter < cardsCounterStart + 3) {
        cards[cardsCounter].classList.remove("hidden");
        cardsCounter++;
    }
    cardsCounterStart = cardsCounter;
});

window.addEventListener("resize", () => {
    viewportWidth = window.innerWidth;
    if (viewportWidth >= 640) {
        cards.forEach(card => {
            card.classList.remove("hidden");
        });
    } else {
        cards.forEach(card => {
            card.classList.add("hidden");
        });
        cardsCounter = 0;
        cardsCounterStart = 0;
        while (cardsCounter < cardsCounterStart + 3) {
        cards[cardsCounter].classList.remove("hidden");
        cardsCounter++;
        }
        cardsCounterStart = cardsCounter;
    }
});
window.onload = function cardsOnLoad() {
    viewportWidth = window.innerWidth;
    if (viewportWidth >= 640) {
        cards.forEach(card => {
            card.classList.remove("hidden");
        });
    }
};

hamburgerMenuIcon.addEventListener("click", () => {
    if (!isActive) {
        mobileMenu.classList.add("activeMenu");
        isActive = true;
    } else {
        mobileMenu.classList.remove("activeMenu");
        isActive = false;
    }
});