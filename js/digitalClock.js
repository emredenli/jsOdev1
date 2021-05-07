function showTime(){
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59
    let s = date.getSeconds(); // 0 - 59
    let d = date.getDay();
    let day;
    
    
    if( d == 1 ) { 
        day = "Pazartesi";
    }
    else if ( d == 2 ) {
        day = "Salı";
    }
    else if ( d == 3 ) {
        day = "Çarşamba";
    }
    else if ( d == 4 ) {
        day = "Perşembe";
    }
    else if ( d == 5 ) {
        day = "Cuma";
    }
    else if ( d == 6 ) {
        day = "Cumartesi";
    }
    else if ( d == 7 ) {
        day = "Pazar";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + day ;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;
    
    setTimeout(showTime, 1000);

   
    
}

showTime();



