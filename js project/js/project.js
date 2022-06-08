var arr = ["url(../photos/nike.png)", "url(../photos/adidas3.jpg)", "url(../photos/lacost.webp)"]
var x = 0;
var t = document.getElementById("slider");
////////////up/////////
var up = document.getElementById("up");
up.addEventListener("click", function(e) {

    window.scrollTo({ top: 0, behavior: 'smooth' });

});
// /////////slider
setInterval(function() {
    x++
    if (x == arr.length) {
        x = 0
        t.style.backgroundImage = `${arr[x]}`
    } else {
        t.style.backgroundImage = `${arr[x]}`
    }
}, 2000);

function nextslide() {
    x++
    if (x == arr.length) {
        x = 0
        t.style.backgroundImage = `${arr[x]}`
    } else {
        t.style.backgroundImage = `${arr[x]}`
    }


}

function backslide() {
    x--
    if (x == -1) {
        x = arr.length - 1
        t.style.backgroundImage = `${arr[x]}`
    } else {
        t.style.backgroundImage = `${arr[x]}`
    }

}
/////////
/////////mouse hover 
var cards = document.querySelectorAll(".card")
cards.forEach((x, y) => {
    x.addEventListener("mouseenter", () => {
        cards[y].style.transform = "scale(1.1)"
        cards[y].style.transition = "0.5s ease-in-out"
    })
});
cards.forEach((x, y) => {
    x.addEventListener("mouseleave", () => {

        cards[y].style.transform = "scale(1)"

    })
});