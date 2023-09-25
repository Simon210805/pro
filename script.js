let resultHeader =document.querySelector("span");
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let addButton = document.getElementById("add")
let subButton = document.getElementById("sub")
let maltiButton = document.getElementById("malti")
let diviButton = document.getElementById("divi")
function addition(a,b){
    return a+b;
}
addButton.onclick =()=>{ 
    let convertednum1 = parseInt(num1.value)
    let convertednum2 = parseInt(num2.value)
    if (!isNaN(convertednum1) && !isNaN(convertednum2))
   { let result = addition (convertednum1, convertednum2)
    resultHeader.innerText = result;}
}
function maltiplication(a,b){
  return a*b;
}
maltiButton.onclick =()=>{ 
    let convertednum1 = parseInt(num1.value)
    let convertednum2 = parseInt(num2.value)
    if (!isNaN(convertednum1) && !isNaN(convertednum2))
   { let result = maltiplication (convertednum1, convertednum2)
    resultHeader.innerText = result;}
}
function subtraction(a,b){
    return a-b;
}
subButton.onclick =()=>{ 
    let convertednum1 = parseInt(num1.value)
    let convertednum2 = parseInt(num2.value)
    if (!isNaN(convertednum1) && !isNaN(convertednum2))
   { let result = subtraction (convertednum1, convertednum2)
    resultHeader.innerText = result;}
}
function divided(a,b){
    return a/b;
}
diviButton.onclick =()=>{ 
    let convertednum1 = parseInt(num1.value)
    let convertednum2 = parseInt(num2.value)
    if (!isNaN(convertednum1) && !isNaN(convertednum2))
   { let result = divided (convertednum1, convertednum2)
    resultHeader.innerText = result;}
}