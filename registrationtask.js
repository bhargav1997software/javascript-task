function formvalidation(){
    
        var x = document.getElementById("FirstName").value;
        var y=document.getElementById("LastName").value;
        var z=document.getElementById("PhoneNumber").value;
        var a=document.getElementById("UserName").value;
        var t=document.getElementById("Email").value;
        var b=document.getElementById("Password").value;
        var c=document.getElementById("confirmPassword").value;
        if (x == "") {
            console.log('hiiii', x);
          alert("FirstName must be filled out");
          return false;
        }
        if (y == "") {
            alert("LastName must be filled out");
            return false;
        }
        if(z==""){
            alert("PhoneNumber must be filled out");
            return false;
        }
        if(a==""){
            alert("UserName must be filled out");
            return false;
        }
        if(t==""){
            alert("Email must be filled out");
            return false;
        }
        if(b==""){
            alert("Password must be filled out");
            return false;
        }
        if(c==""){
            alert("confirmPassword must be filled out");
            return false;
        }
      
        fName();
        lName();
        phonenumber(z);
        uName(a);
        pwdvalid(b,c);
        checkEmail();

}
function fName(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
     y = document.getElementById('LastName').value;
    if(!regName.test(y)){
        alert('Invalid name given.');
    }
}
function lName(){
    var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
    var x = document.getElementById('FirstName').value;
    if(!regName.test(x)){
        alert('Invalid name given.');
    }
}
function phonenumber(inputtxt)
{
  var phoneno = /^\d{10}$/;
  var z = document.getElementById('PhoneNumber').value;
  if(!phoneno.test(z)){
    alert('phone number is invalid');
}
}
function uName(k){
var letters = /^[A-Za-z]+$/;
if(letters.test(k))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
k.focus();
 return false;
 }
}
function pwdvalid(f1,f2){
    alert(f1);
    alert(f2);
    if(f1 == f2){
        alert("password matched");
    }
    else{
        alert("password not matched");
    }
}
function checkEmail() {

    var t =document.getElementById("Email");
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(t.value)) {
    alert('Please provide a valid email address');
    t.focus;
    return false;
 }
}
