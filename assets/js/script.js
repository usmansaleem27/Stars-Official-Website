var loader = document.getElementById("preloader");
window.addEventListener("load", function(){
    loader.style.display = "none";
})

$(document).ready(function () {
    $('select').niceSelect();
});

function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
    
    if(h == 0){
     h = 12;
    }
    
    if(h > 12){
     session = "PM";
    }
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("digital_display").innerText = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();




