
// Validation 
function login() {
    let userName = document.getElementById("name").value
    let password = document.getElementById("password").value
    let validate = document.getElementsByName("validate")


    for (let i = 0; i < validate.length; i++) {
        if (validate[i].checked) {
            let val = validate[i].value;
            if (val == "master") {
                let p_word = "5678"
                if (userName == "divya" && p_word == password) {
                    window.open("master.html")
                }
                else {
                    alert("Invalid User Name or Password ")
                }
            }
            else {
                let p_word = "1234"

                if (userName == userName && password == p_word) {
                    // alert("hello")
                    console.log(userName)
                    window.open("student.html")
                }
                else {
                    alert("Invalid User Name or Password")
                }
            }
        }
    }
}



