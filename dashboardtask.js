function dashboardvalidation() {
    console.log('hii');
    var x = document.getElementById("title").value;

    var y = document.getElementById("Description").value;
    var z = document.getElementById("status").value;
    console.log('hiiii', z);
    var u = document.getElementById("user").value;

    var html = '<ul>';
    if (x == "") {

        html += "<li>Title must be filled out</li>";
    }
    if (y == "") {
        html += "<li>Description must be filled out</li>";
    }
    if (z == "") {
        html += "<li>status must be filled out</li>";
    }
    if (u == "") {
        html += "<li>user should be select</li>";
    }

    html += title(x, html);
    html += Description(y, html);


    html += '</ul>';

    let ticketobject = {};
    alert(html.trim());
    if (html.trim() == '<ul></ul>') {
        ticketobject["title"] = x;
        ticketobject["Description"] = y;
        ticketobject["status"] = z;
        ticketobject["user"] = u;
        ticketobject["createdDate"] = new Date();
        ticketobject["modifiedDate"] = new Date();
        console.log(localStorage.getItem("ticketData"));
        if (localStorage.getItem("ticketData")) {
            let ticketData = JSON.parse(localStorage.getItem("ticketData"));
            if (Array.isArray(ticketData)) {
                ticketData.push(ticketobject)
                localStorage.setItem("ticketData", JSON.stringify(ticketData))
            }
        }
        else {
            var ticketArray = [];
            ticketArray.push(ticketobject)
            localStorage.setItem("ticketData", JSON.stringify(ticketArray))
        }
        window.location.reload();

    }
    function title() {
        var html = '';
        var regName = /[a-z A-Z]{3,30}$/;;
        x = document.getElementById('title').value;
        if (!regName.test(x)) {
            html += '<li>Invalid title given.</li>';
        }
        return html;
    }
}
function Description() {
    var html = '';
    var an = /[a-z A-Z]$/
    y = document.getElementById('Description').value;
    if (!an.test(y)) {
        html += '<li>Invalid Description.</li>';
    }
    return html;
}

var data = localStorage.getItem("userData");
var jsonArray = JSON.parse(data);
console.log(jsonArray);
var options = '';
var ticketData = localStorage.getItem("ticketData");
if (ticketData) {
    var ticketParseData = JSON.parse(ticketData);
    var html = '';
    ticketParseData.forEach((item, index) => {
        html += `<tr>
<th scope="row">${item.title}</th>
<td>${item.Description}</td>
<td>${item.status}</td>
<td>${item.user}</td>
<td><button type="button" style="padding:10px;border-radius:0px;" class="btnSubmit" onclick="ticketvalidation(${index})">Edit</button></td>
</tr>`
    });
    document.getElementById("append-data").innerHTML = html;
}
for (var i = 0; i < jsonArray.length; i++)
    options += '<option value="' + jsonArray[i]["username"] + '" />';
document.getElementById('username').innerHTML = options;

console.log(document.getElementById('username').innerHTML)

function ticketvalidation(id) {

    var data1 = localStorage.getItem("ticketData");
    var ticket1Array = JSON.parse(data1);
    console.log('ticket--->', ticket1Array);
    console.log('x',id)
        var x = ticket1Array[id].title;
        var y = ticket1Array[id].Description;
        var z = ticket1Array[id].status;
        document.getElementById("title").value = x;
        document.getElementById("Description").value = y;
        document.getElementById("status").value = z;
        document.getElementById("indexstriing").value = id;


}
function updatevalidation() {
    console.log('hii');
    var x = document.getElementById("title").value;
    var y = document.getElementById("Description").value;
    var z = document.getElementById("status").value;
    var d = document.getElementById("indexstriing").value;
    var u = document.getElementById("user").value;


    let ticketobject = {};
    ticketobject["title"] = x;
    ticketobject["Description"] = y;
    ticketobject["status"] = z;
    ticketobject["user"] = u;
    ticketobject["createdDate"] = new Date();
    ticketobject["modifiedDate"] = new Date();

  var data1 = localStorage.getItem("ticketData");
    var ticket1Array = JSON.parse(data1);
    ticket1Array[d]= ticketobject;
    localStorage.setItem("ticketData", JSON.stringify(ticket1Array));
    window.location.reload();

}
