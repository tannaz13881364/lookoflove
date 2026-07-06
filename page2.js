// JavaScript Document
function showError() {
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function loveAccepted() {

    createHearts();

    document.getElementById("mainBox").style.opacity = "0";

    setTimeout(() => {
        window.location.href = "gallery.html";
    }, 2500);
}

function createHearts() {

    const container = document.getElementById("heart-container");

    for(let i = 0; i < 70; i++) {

        let heart = document.createElement("div");

        heart.classList.add("floating-heart");

        heart.innerHTML = "ðŸ’–";

        heart.style.left = Math.random() * 100 + "vw";

        heart.style.fontSize =
            (20 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        container.appendChild(heart);

    }

}
