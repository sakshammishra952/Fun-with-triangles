const sides= document.querySelectorAll(".side-input");
const hypBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");

 function  calculateSum(a,b){
    const square = a*a + b*b;
    return square;
 }


   function calculateHypotenuse(){
  const ss=  calculateSum(Number(sides[0].value),Number(sides[1].value));
  const Hypotenuse = Math.sqrt(ss);
  outputE1.innerText="The hypotenuse is" + Hypotenuse;

}


hypBtn.addEventListener('click', calculateHypotenuse)