var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();

setInterval(
    // function () {
    //     d = new Date();
    //     second = d.getSeconds() * 6;
    //     minute = d.getMinutes() * 6;
    //     hour = d.getHours() * 30;
    //     document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
    //     document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
    //     document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
    //     console.log(d.getSeconds());
    // }, 1000
    function () {
        d = new Date();
        second = d.getSeconds() * 6;
        // minute = d.getMinutes() * 6;
        minute = 180;
        hour = d.getHours() * 30;
        document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)";
        document.getElementById("minute-hand").style.transform = "rotate(" + minute + "deg)";
        document.getElementById("hour-hand").style.transform = "rotate(" + hour + "deg)";
        console.log(document.getElementById("second-hand").style.transform = "rotate(" + second + "deg)");
    }, 1000
);