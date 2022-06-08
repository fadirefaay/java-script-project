var laber1 = document.getElementById("lname");
var laber2 = document.getElementById("email");
var btn = document.getElementById("submit")
var lname = /^[a-zA-z]{2,}$/;
var email1 = /^[a-z0-9]{4,}@[a-z]{3,}.com$/
laber1.addEventListener("input", () => {
    var span1 = document.getElementById("span1")
    if (!lname.test(laber1.value)) {
        span1.style.border = `solid 1px red`;
        span1.style.display = "block"
    } else {
        span1.style.display = "none"
    }
});
laber2.addEventListener("input", () => {
    var span2 = document.getElementById("span2")
    if (!email1.test(laber2.value)) {
        span2.style.border = `solid 1px red`;
        span2.style.display = "block"
    } else {
        span2.style.display = "none"
    }
});
var area = document.getElementById("textarea")
console.log(laber1.value)
btn.addEventListener("click", function() {
    if (lname.test(laber1.value) && email1.test(laber2.value)) {
        if (laber1.value == "" || laber2.value == "" || area.value == "") {
            alert("please enter valuse")
        } else {
            alert("we will read it and contact you back")
        }
    } else {
        alert("something  wrong")
    }
});