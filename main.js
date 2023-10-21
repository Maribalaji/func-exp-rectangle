let a=parseInt(prompt("Enter a height"));
let b=parseInt(prompt("Enter a width"));
let rect=function(a,b){
    return a*b
}
let result=rect(a,b);
console.log(result);
document.write(`height=${a},width=${b} <br> Area of rectangle is ${result}`)