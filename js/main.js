let submit = $("#submit")
let error = $(".error")
let login = $(".login")
let page = $("#main")
error.hide()
page.hide()
let info = {
    "arjun" : "abcdefg"
}
function storeLgin(){
    let uname = $("#uname").val()
    let pwd = $("#pwd").val()
    localStorage.setItem('username', uname);
    localStorage.setItem('passowrd', pwd);
}
function autoFillLogin(){
    let uname = $("#uname")
    let pwd = $("#pwd")
    uname.val(localStorage.getItem('username'))
    pwd.val(localStorage.getItem('passowrd'))
}
autoFillLogin()
function validateForm(){
    let uname = $("#uname").val()
    let pwd = $("#pwd").val()
    console.log(`Username :: ${uname}`)
    console.log(`Password :: ${pwd}`)
    for (const [key, value] of Object.entries(info)) {
        console.log(key + value)
        if(key == uname && value == pwd){
            storeLgin()
            console.log('Sucsees')
            break
        } else {
            error.show()
    }
    }
}
function autoSubmit(){
    let uname = $("#uname").val()
let pwd = $("#pwd").val()
    if(uname == localStorage.getItem('username') && pwd == localStorage.getItem('passowrd')){
        validateForm()
        page.show()
        login.hide()
    } else {
        return
    }
}
autoSubmit()
submit.on("click", validateForm)