
function add(a,b) {
      let sum;
      sum=a+b;
      return sum;
}

function subtraction(a,b){
    let sub;
    sub = a-b;
    return sub;
}

function mul(a,b){
    let mul;
    mul = a*b;
    return mul;
}

function div(a,b){
    let div;
    div = a/b;
    div=div.toFixed(2);
    return div;
}
export {add,subtraction,mul,div};