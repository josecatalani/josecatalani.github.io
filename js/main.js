window.onload = function(){
    var fullImages = document.querySelectorAll(".full-image")

    if(fullImages.length > 0) {
        carrosselFullImages(fullImages)
    }
}

function carrosselFullImages(images) {
    var index = 0;
    var total = images.length;

    images[index].classList.add("fadeIn", "animated");

    images[index].addEventListener("animationend", function(){
        images[index].classList.remove("animated", "fadeIn", "fadeOut")

        if((index + 1) >= total) {
            index = 0;
        } else {
            index++;
        }
    });
}