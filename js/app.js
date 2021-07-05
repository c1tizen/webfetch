console.log(navigator.userAgent);
var uaString = navigator.userAgent;

// OPERATING SYSTEM
var tempSplit = uaString.split("(");
console.log(tempSplit);
var os = tempSplit[1].split(";");
console.log(os[0]);
jsOs.insertAdjacentHTML("beforebegin",os[0]);

// BROWSER
var tempBr = tempSplit[1].split(" ");
var br = tempBr[tempBr.length - 1].replace("/"," ") +" - "+ tempSplit[0].replace("/"," ");
jsBr.insertAdjacentHTML("beforebegin",br);


// SHORT OS
var htmlOs = "<span class='highlight'>" + tempBr[tempBr.length - 5] + "</span>"
shortOs.insertAdjacentHTML("beforebegin", htmlOs);


console.log(tempBr);
