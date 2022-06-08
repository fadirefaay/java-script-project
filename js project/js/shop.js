var productsxhr = new XMLHttpRequest();
var product = new Array()
productsxhr.open('GET', '../products.json');
productsxhr.send("")
productsxhr.onreadystatechange = () => {
    if (productsxhr.readyState == 4) {
        if (productsxhr.status == 200) {
            var test = JSON.parse(productsxhr.response);
            Object.assign(product, test)
            product.forEach(element => {
                setdata(element, "")
            });
            var adidas = product.filter(function(ele) {
                return ele.name == "adidas"
            })
            for (let index = 0; index < adidas.length; index++) {
                setdata(adidas[index], "adidas")
            }
            var naki = product.filter(function(ele) {
                return ele.name == "nike"
            })
            for (let index = 0; index < naki.length; index++) {
                setdata(naki[index], "nike")
            }
            var puma = product.filter(function(ele) {
                return ele.name == "puma"
            })
            for (let index = 0; index < puma.length; index++) {
                setdata(puma[index], "puma")
            }

        }
    }
};


function setdata(obje, name) {
    if (name == "") {
        name = "all"
    }
    var parent = document.querySelector(`#pills-${name} .container`);
    var div = `<img src="${obje.img}" alt="Avatar" style="width:100%">
        <div class="textdiv">
            <h4><b>${obje.name}</b></h4>
            <b>${obje.price} lE</b>
            <p>${obje.desc}</p>
        </div>
        <button onclick="my_chart(${obje.id})">Add to Chart</button> `
    var element = document.createElement("div")
    element.setAttribute("class", "card")
    element.innerHTML = div
    parent.append((element))
}

function my_chart(x) {
    localStorage.setItem("id", `${x}`)
    window.open("chart.html", "_blank")
}

///////////////
///////file input///////////
// var add = document.getElementById("add");
// var file = document.getElementById("formFile");
// var counter = 15;

// add.addEventListener("click", function() {
//     counter++
//     var file = document.getElementById("formFile");
//     var productname = document.getElementById("productname")
//     var productprice = document.getElementById("productprice")
//     var productdesc = document.getElementById("productdesc")
//     var pro = {
//         "img": `../photos/products/${file.files[0].name}`,
//         "name": `${productname.value}`,
//         "id": counter,
//         "price": `${productprice.value}`,
//         "desc": `${productdesc.value}`
//     }

//     savedata(pro)
//     console.log("done")

// });

// function savedata(data) {
//     console.log("fadi1")
//     var jsondata = JSON.stringify(data)
//     console.log(jsondata)
//     productsxhr.open('GET', '../file.json');
//     productsxhr.send("")
//     productsxhr.onreadystatechange = () => {
//         console.log("fadi2")
//         if (productsxhr.readyState == 4) {
//             console.log("fadi3")
//             if (productsxhr.status == 200) {
//                 productsxhr.open('POST', '../file.json');
//                 productsxhr.send(jsondata)
//                 console.log("fadi")
//             }

//         }
//     }
// }
//////////////











// function setdata(obje) {
//     var parent = document.querySelector("#pills-all .container");
//     var div = `<img src="${obje.img}" alt="Avatar" style="width:100%">
//         <div class="textdiv">
//             <h4><b>${obje.name}</b></h4>
//             <b>${obje.price} lE</b>
//             <p>${obje.desc}</p>
//             <button>Add to Chart</button>
//         </div>`
//     var element = document.createElement("div")
//     element.setAttribute("class", "card")
//     element.innerHTML = div
//     parent.append((element))
// }

// function setdatan(obje) {
//     var parent = document.querySelector("#pills-nike >.container");
//     var div = `<img src="${obje.img}" alt="Avatar" style="width:100%">
//         <div class="textdiv">
//             <h4><b>${obje.name}</b></h4>
//             <b>${obje.price} lE</b>
//             <p>${obje.desc}</p>
//             <button>Add to Chart</button>
//         </div>`
//     var element = document.createElement("div")
//     element.setAttribute("class", "card")
//     element.innerHTML = div
//     parent.append((element))
// }

// function setdataad(obje) {
//     var parent = document.querySelector("#pills-adidas >.container");
//     var div = `<img src="${obje.img}" alt="Avatar" style="width:100%">
//         <div class="textdiv">
//             <h4><b>${obje.name}</b></h4>
//             <b>${obje.price} lE</b>
//             <p>${obje.desc}</p>
//             <button>Add to Chart</button>
//         </div>`
//     var element = document.createElement("div")
//     element.setAttribute("class", "card")
//     element.innerHTML = div
//     parent.append((element))
// }