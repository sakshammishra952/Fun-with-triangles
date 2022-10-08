const baseHeight = document.querySelectorAll(".Area");
const calculateBtn = document.querySelector("#area");
const result = document.querySelector("#output");

function form(a,b){
    const formula = 1/2*a*b;
    return formula;
}

function area(){
 const value = form(Number(baseHeight[0].value), Number(baseHeight[1].value));
 result.innerText="The area of the triangle is" + value 

}
calculateBtn.addEventListener('click', area);