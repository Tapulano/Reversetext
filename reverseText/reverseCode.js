function reverseString(str) {
    let a = '';
    for (let i = str.length -1; i >= 0; i--) {
        a += str[i];
    };
    return a;
}
function myFunction() {
    let s = String(document.getElementById("inputText").value);
return document.getElementById("outputText").innerHTML = reverseString(s);
}