let resultHeader =document.querySelector("span");
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let addButton = document.getElementById("add")
let sub = document.getElementById("sub")
let malti = document.getElementById("malti")
let divi = document.getElementById("divi")
function addition(a,b){
    return a+b;
}
add.onclick =()=>{ 
    let convertednum1 = parseInt(num1.value)
    let convertednum2 = parseInt(num2.value)
    if (!isNaN(convertednum1) && !isNaN(convertednum2))
   { let result = addition (convertednum1, convertednum2)
    resultHeader.innerText = result;}
}