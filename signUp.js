const passEye = document.getElementById("passEye");
const passInput = document.getElementById("password");
let isVisible = false;

passEye.addEventListener("click", () => {
    if (!isVisible) {
        passInput.type = "text";
        isVisible = true;
    } else {
        passInput.type = "password";
        isVisible = false;
    }
});
