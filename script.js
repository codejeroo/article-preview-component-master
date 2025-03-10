const shareButton = document.querySelectorAll(".share-button");
const cardFooter = document.querySelector(".card-footer")
const sharePopup = document.querySelector(".share-popup")



shareButton.forEach(button => {

    button.addEventListener("click", function() {
        const isActive = sharePopup.classList.toggle("active")
        cardFooter.classList.toggle("hidden", isActive)
        cardFooter.computedStyleMap.display = "none";
    });
    
});