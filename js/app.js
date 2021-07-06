console.log(navigator.userAgent);
var uaString = navigator.userAgent.toString();

// OPERATING SYSTEM
var tempSplit = uaString.split("(");
console.log(tempSplit);
var os = tempSplit[1].split(";");
console.log(os[0]);
jsOs.insertAdjacentHTML("beforebegin",os[0]);

// BROWSER
var browser = ""
uaString = uaString.toLowerCase();
console.log(uaString)
if (uaString.indexOf("trident") !== -1) {
    jsBr.insertAdjacentHTML("beforebegin","Internet Explorer");
    browser = "Internet Explorer";
} else if (uaString.includes("edg")) {
    jsBr.insertAdjacentHTML("beforebegin","Edge");
    browser = "Edge";
} else if (uaString.includes("opr")) {
    jsBr.insertAdjacentHTML("beforebegin","Opera");
    browser = "Opera";
} else if (uaString.includes("safari") && (uaString.includes("opr") == false && uaString.includes("edg") == false && uaString.includes("chrome") == false)) {
    jsBr.insertAdjacentHTML("beforebegin","Safari");
    browser = "Safari";
}  else if (uaString.includes("chrome")) {
    jsBr.insertAdjacentHTML("beforebegin","Chrome");
    browser = "Chrome";
} else if (uaString.includes("firefox")) {
    jsBr.insertAdjacentHTML("beforebegin","Firefox");
    browser = "Firefox";
}
console.log(browser+" <----")
var tempBr = tempSplit[1].split(" ");


// SHORT OS
var htmlOs = "<span class='highlight'>" + tempBr[tempBr.length - 5] + "</span>"
shortOs.insertAdjacentHTML("beforebegin", htmlOs);
console.log(tempBr);

// SCREEN SIZE
window.screen.height;

// ASCII PORT
//asciiPort.attr("src",window.location.hostname+"/"+browser)