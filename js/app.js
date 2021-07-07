console.log(navigator.userAgent);
var uaString = navigator.userAgent.toString();

// OPERATING SYSTEM
var tempSplit = uaString.split("(");
console.log(tempSplit);
var os = tempSplit[1].split(";");
console.log(os[0]);
var jsOs = document.getElementById("jsOs");
jsOs.insertAdjacentHTML("beforebegin",os[0]);

// BROWSER
var browser = "";
var jsBr = document.getElementById("jsBr");
uaString = uaString.toLowerCase();
console.log(uaString);
if (uaString.indexOf("trident") !== -1) {
    jsBr.insertAdjacentHTML("beforebegin","Internet Explorer");
    browser = "Internet Explorer";
} else if (uaString.indexOf("navigator") !== -1) {
    jsBr.insertAdjacentHTML("beforebegin","Netscape Navigator");
    browser = "Netscape-Navigator";
} else if (uaString.indexOf("edg") !== -1) {
    jsBr.insertAdjacentHTML("beforebegin","Edge");
    browser = "Edge";
} else if (uaString.indexOf("opr") !== -1) {
    jsBr.insertAdjacentHTML("beforebegin","Opera");
    browser = "Opera";
} else if (uaString.indexOf("safari") !== -1 && (uaString.indexOf("opr") == -1 && uaString.indexOf("edg") == -1 && uaString.indexOf("chrome") == -1)) {
    jsBr.insertAdjacentHTML("beforebegin","Safari");
    browser = "Safari";
}  else if (uaString.indexOf("chrome") !== -1) {
    jsBr.insertAdjacentHTML("beforebegin","Chrome");
    browser = "Chrome";
} else if (uaString.indexOf("firefox") !== -1) {
    jsBr.insertAdjacentHTML("beforebegin","Firefox");
    browser = "Firefox";
}
console.log(browser+" <----");
var tempBr = tempSplit[1].split(" ");


// SHORT OS
var htmlOs = "<span class='highlight'>" + browser.toLowerCase() + "</span>";
var shortOs = document.getElementById("shortOs");
shortOs.insertAdjacentHTML("beforebegin", htmlOs);
console.log(tempBr);

// SCREEN SIZE
var whOut = document.getElementById("resolution");
function isRetina(){
    return ((window.matchMedia && (window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches || window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches)) || (window.devicePixelRatio && window.devicePixelRatio >= 2)) && /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
}
if (isRetina()) {
    whOut.insertAdjacentHTML("beforebegin", window.screen.height*2 + " x " + window.screen.width*2);
} else {
    whOut.insertAdjacentHTML("beforebegin", window.screen.height + " x " + window.screen.width);
}



// ASCII PORT
//asciiPort.attr("src",window.location.hostname+"/"+browser)