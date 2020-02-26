function formvalidation() {

    var x = document.getElementById("FirstName").value;
    var y = document.getElementById("LastName").value;
    var z = document.getElementById("PhoneNumber").value;
    var a = document.getElementById("UserName").value;
    var t = document.getElementById("Email").value;
    var b = document.getElementById("Password").value;
    var c = document.getElementById("confirmPassword").value;
    var dob = document.getElementById("dob").value;
    var html = '<ul>';
    if (x == "") {
        console.log('hiiii', x);
        html += "<li>FirstName must be filled out</li>";
    }
    if (y == "") {
        html += "<li>LastName must be filled out</li>";
    }
    if (z == "") {
        html += "<li>PhoneNumber must be filled out</li>";
    }
    if (a == "") {
        html += "<li>UserName must be filled out</li>";
    }
    if (t == "") {
        html += "<li>Email must be filled out</li>";
    }
    if (b == "") {
        html += "<li>Password must be filled out</li>";
    }
    if (c == "") {
        html += "<li>confirmPassword must be filled out</li>";
    }
    html += fName(html);
    html += lName(html);
    html += phonenumber(z, html);
    html += uName(a, html);
    html += pwdvalid(b, c, html);
    html += checkEmail(html);
    html += '</ul>';
    document.getElementById('error-message').innerHTML = html;
    let userobject = {};
    if (html.trim() == '<ul></ul>') {
        userobject["firstname"] = x;
        userobject["lastname"] = y;
        userobject["phone"] = z;
        userobject["username"] = a;
        userobject["email"] = t;
        userobject["password"] = b;
        userobject["dob"] = dob;
        let userData = JSON.parse(localStorage.getItem("userData"));
        if (userData && Array.isArray(userData)) {
            userData.push(userobject)
            localStorage.setItem("userData", JSON.stringify(userData))
        }
        else {
            var userArray = [];
            userArray.push(userobject)
            localStorage.setItem("userData", JSON.stringify(userArray))
        }
        document.getElementById('success-message').innerHTML = '<p>Successfully Registered!!!</p>';
        console.log('userobject',userobject);
       window.location.assign("logintask.html");
    }

    
}
function fName() {
    var html = '';
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    y = document.getElementById('LastName').value;
    if (!regName.test(y)) {
        html += '<li>Invalid name given.</li>';
    }
    return html;
}
function lName() {
    var html = '';
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var x = document.getElementById('FirstName').value;
    if (!regName.test(x)) {
        html += '<li>Invalid name given.</li>';
    }
    return html;
}
function phonenumber(inputtxt, ) {
    var html = '';
    var phoneno = /^\d{10}$/;
    var z = document.getElementById('PhoneNumber').value;
    if (!phoneno.test(z)) {
        html += '<li>phone number is invalid</li>';
    }
    return html;
}
function uName(k, ) {
    var html = '';
    var letters = /^[A-Za-z]+$/;
    if (letters.test(k)) {
    }
    else {
        html += '<li>Username must have alphabet characters only</li>';
    }
    return html;
}
function pwdvalid(f1, f2, ) {
    var html = '';
    if (f1 == f2) {
    }
    else {
        html += "<li>password not matched";
    }
    return html;
}
function checkEmail() {
    var html = '';
    var t = document.getElementById("Email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(t.value)) {
        html += '<li>Please provide a valid email address<li>';
        // t.focus;
    }
    return html;
}
