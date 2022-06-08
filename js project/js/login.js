var email = document.getElementById("email")
var pass = document.getElementById("pass")
var btn = document.getElementById("btn")
var x = localStorage.getItem("email")
var y = localStorage.getItem("pass")
var temp = JSON.parse(localStorage.getItem("login"))
console.log(temp)
var flag = 0
btn.addEventListener(`click`, (event) => {
    event.preventDefault();
    if (email.value == "" && pass.value == "") {
        alert("please enter mail and pass")
    } else {
        if (temp != null) {
            for (var i = 0; i < temp.length; i++) {
                var x = temp[i].pass1
                var y = pass.value
                if (temp[i].email1 == email.value) {
                    if (x == y) {
                        flag = 1
                        break;
                    }
                } else {
                    flag = 0
                }
            }

            if (flag == 0) {
                alert("incorrect mail and pass")
            } else {
                console.log("lofin")
                window.open("../html/project.html", "_self")
                email.value = ""
                pass.value = ""
            }
        } else {
            console.log("fadi3")
            alert("no mail must regeist")
        }
    }
})