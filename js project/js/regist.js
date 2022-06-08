var email = document.getElementById("email")
var pass = document.getElementById("psw")
var repass = document.getElementById("psw-repeat")
var btn = document.getElementById("btn1")
var passreg = /^[0-9]{8,}$/
var emailreg = /^[a-z0-9]{5,}@[a-z]{4,}.com$/
email.addEventListener(`input`, () => {
    if (emailreg.test(email.value)) {
        email.style.border = `1px solid blue`
    } else {
        email.style.border = `1px solid red`
    }
})
pass.addEventListener(`input`, () => {
    if (passreg.test(pass.value)) {
        pass.style.border = `1px solid blue`
    } else {
        pass.style.border = `1px solid red`
    }
})
repass.addEventListener(`input`, () => {
    if (repass.value === pass.value) {
        repass.style.border = `1px solid blue`
    } else {
        repass.style.border = `1px solid red`
    }
})
var arr = []
btn.addEventListener(`click`, (event) => {
    arr = JSON.parse(localStorage.getItem("login"))
    console.log(arr)
    event.preventDefault()
    if (email.value.match(emailreg) && pass.value.match(passreg) && repass.value === pass.value) {
        arr.push({
            email1: `${email.value}`,
            pass1: `${pass.value}`
        })
        var temp = JSON.parse(localStorage.getItem("login"))
        if (temp != null) {
            temp.forEach(element => {
                if (element.email1 === email.value) {
                    alert("this mail already token  please enter new mail")
                } else {
                    localStorage.setItem("login", `${JSON.stringify(arr)}`)
                    window.open("../html/login.html", "_self")
                }
            });
        } else {
            localStorage.setItem("login", `${JSON.stringify(arr)}`)
            window.open("../html/login.html", "_self")
        }

        // 
        email.value = ""
        pass.value = ""
        repass.value = ""
    } else {
        alert("make sure you enter true data")
    }
})