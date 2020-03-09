function loginvalidation() {
    var x = document.getElementById("username").value;
    var y = document.getElementById("password").value;
    var html = '<ul>';
    if (x == "") {
        console.log('hiiii', x);
        html += "<li>username must be filled out</li>";
    }
    if (y == "") {
        html += "<li>password must be filled out</li>";
    }
    var data = localStorage.getItem("userData");
    var userArray = JSON.parse(data);
    userArray.filter((value) => value.username == x && value.password == y);
console.log(userArray);
    //var value2 = JSON.parse(data).key2;

    if (userArray.length>0) {
        console.log("hdsfgjhsdfg");
        
    }
    if(x && y)
    {
        for(var i=0;i<userArray.length;i++){
           
            if(x==userArray[i].username && y==userArray[i].password){
                document.getElementById('success-message').innerHTML = '<p>Successfully Login!!!</p>';
             
               window.location.assign("dashboardtask.html");;
            }
       
            else if(x==userArray[i].username && y!=userArray[i].password){
                document.getElementById('error-message').innerHTML = '<p>Invalid password or username!!!</p>'
            }
            
       
        }
        
    }
    
    
    html += uName(x, html);
    html += pwdvalid(y, html);

    

   
}







function uName(x) {
    var html = '';
    var letters = /^[A-Za-z]+$/;
    if (letters.test(x)) {
    }
    else {
        html += '<li>Username must have alphabet characters only</li>';
    }
    return html;
}
function pwdvalid(y) {
    var html = '';
    var letters = /^[A-Za-z]\w{7,14}$/;
    if (letters.test(y)) {

        return true;
    }
    else {
        html += '<lipassword to be filled</li>';

        return html;
    }
    
}

