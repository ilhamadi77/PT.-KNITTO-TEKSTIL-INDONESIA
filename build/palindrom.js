"use strict";
function palindrom(str) {
    let text = str.toLowerCase();
    let reverseText = text.split("").reverse().join("");
    if (text === reverseText) {
        return console.log("palindrom guys");
    }
    else {
        return console.log("not palindrom guys");
    }
}
palindrom("helleH");
