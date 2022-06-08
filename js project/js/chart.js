var id = localStorage.getItem("id")
var d = document.getElementById("chart")

function getiitem(item) {
    var div = `<img src="${item.img}" alt="${item.name}">
    <div>
        <h1>${item.name}</h1>
        <h2>${item.desc}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, accusantium est vitae eum sapiente, a hic possimus obcaecati id asperiores quis, laborum eveniet enim? Laboriosam quo doloribus ex! Exercitationem</p>
        <h2> ${item.price} <span style="color: red;">LE</span> </h2>
        <button onclick="conferm()" id="chartbtn">Buy Now </button>
    </div>`
    d.innerHTML = div
}

function conferm() {
    var div = `<div class="alert alert-success" role="alert">
    <h4 class="alert-heading">Nice choice</h4>
    <p>Aww yeah, you successfully Ordered it ...</p>
    <hr>
    <p class="mb-0">wait it in 3 days.</p>
    <p class="mb-0">thank you for trust us come back soon.</p>
    <br>
    <a href="shop.html">Back to Shop</a>

  </div>`
    d.innerHTML = div

}

var productsxhr = new XMLHttpRequest();
var product = new Array();

productsxhr.open('GET', '../products.json');
productsxhr.send("")
productsxhr.onreadystatechange = () => {
    if (productsxhr.readyState == 4) {
        if (productsxhr.status == 200) {
            var test = JSON.parse(productsxhr.response);
            Object.assign(product, test)
            product.forEach(element => {
                if (id == element.id) {
                    getiitem(element)
                }
            });
        }
    }
};