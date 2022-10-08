const inputs = document.querySelectorAll(".angle-input");
const isTriangleBtn = document.querySelector("#istriangle");
const outputE1 = document.querySelector("#output");

isTriangleBtn.addEventListener('click',isTriangle);

function calculateSum(angle1,angle2,angle3){
const sumofAngles = angle1+angle2+angle3;
return sumofAngles;

}
function isTriangle(){
  const sum =  calculateSum(Number(inputs[0].value), Number(inputs[1].value),Number(inputs[1].value));
    if(sum===180){
        outputE1.innerText="Yes ,The angles form a triangle";
    }
    else{
        outputE1.innerText="No  ,The angles do not form a triangle";
    }
}