
// 设定时间
let setSeconds = 3;
let setMinutes = 10;
// 获取设定时间
setMinutes = parseInt(getUrlParam("setMinutes"));
setSeconds = parseInt(getUrlParam("setSeconds"));

// 剩余时间
let leftTime = setMinutes * 60 + setSeconds;

let intervalId = window.setInterval(countDown, 1000);

function countDown() {
    leftTime--;
    if(leftTime == 0) {
        
        clearInterval(intervalId);
        new Audio("beep.wav").play();
    }
    let minuteShow = (Math.floor(leftTime / 60)).toString();
    
    let secondShow = (leftTime % 60).toString();
    if(parseInt(minuteShow) < 10){
        minuteShow = "0" + minuteShow;
    }
    if(parseInt(secondShow) < 10){
        secondShow = "0" + secondShow;
    }
    
    let timeShow = minuteShow + ":" + secondShow;
    if(minuteShow != "NaN" || secondShow != "NaN") {
        $("#timer").text(timeShow);
    }  
}
// getUrlParam
function getUrlParam(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}
