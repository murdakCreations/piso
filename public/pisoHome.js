var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function postMessage(divID) {
    var msg = document.getElementById(divID);
    //alert(msg);
    var divContainer = document.getElementById("messages_time");
    divContainer.innerHTML += "<div class='message_container'><div class='message'>"+msg.value+"</div></div>";
    displayTimeDate(divContainer);
    // clear input tag
    msg.value = '';
}

function displayTimeDate(container) {
    let cMinute;
    let currentDate = new Date();
    let cDay = currentDate.getDate();
    let cMonth = months[currentDate.getMonth()];
    let cYear = currentDate.getFullYear();
    let cHour = currentDate.getHours();
    //alert("0" + currentDate.getMinutes());
    if (currentDate.getMinutes() < 10) {
        cMinute = "0" + currentDate.getMinutes();
        
    } else {
        cMinute = currentDate.getMinutes();
    }
    let displayDate = cMonth + ". " + cDay + ", " + cYear + ", " + cHour + ":" + cMinute;
    container.innerHTML += "<div class='date_container'><div class='date'>"+displayDate+"</div></div>"
}

