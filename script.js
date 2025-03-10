const shareButton = document.querySelectorAll(".share-button");
const cardFooter = document.querySelector(".card-footer")
const sharePopup = document.querySelector(".share-popup")
const shareIcon = document.querySelector(".share-icon2")
const activeShareButton = document.querySelector(".share-btn")

shareButton.forEach(button => {
    button.addEventListener("click", function() {
        const isActive = sharePopup.classList.toggle("active");
        cardFooter.classList.toggle("hidden", isActive);

        if (isActive) {
            activeShareButton.style.backgroundColor = "#6E8098";
            shareIcon.style.filter = "invert(100%) brightness(1000%)";
        } else {
            activeShareButton.style.backgroundColor = "";
            shareIcon.style.filter = "";
        }
    });
});
