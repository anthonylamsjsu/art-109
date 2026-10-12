// Select HTML elements
const header = document.querySelector("#header");
const changeHeaderButton = document.querySelector("#change-header-button");
const changeThemeButton = document.querySelector("#change-theme-button");

const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

// Change heading with button click
changeHeaderButton.addEventListener("click", () => {
    header.innerHTML = "<strong>*+｡✴ 🅒🅐🅓🅐🅑🅡🅐 ✴｡+*</strong>";
});

// Update theme button text
function changeButtonText() {
    if (document.body.classList.contains("dark")) {
        changeThemeButton.textContent = "Switch to Light Theme";
    } else {
        changeThemeButton.textContent = "Switch to Dark Theme";
    }
}

// Toggle color theme
changeThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    changeButtonText();
});

// Reveal the next image when clicked
img1.addEventListener("click", () => {
    img2.classList.remove("hidden");
});

img2.addEventListener("click", () => {
    img3.classList.remove("hidden");
});

img3.addEventListener("click", () => {
    img4.classList.remove("hidden");
});