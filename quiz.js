const quizForm =  document.getElementById("quiz-form");
const sumbitBtn = document.querySelector("#sumbit-btn");
const output1 = document.querySelector("#output");

const correctAnswers =["90°", "RightAngeled"];
  
function calculateScore(){
   let score = 0 ;
   let index = 0 ;
   const formResults = new  FormData(quizForm);
   for(let value of formResults.values()){
    if(value=== correctAnswers[index]){
        score= score+1;

    }
    index=index+1;

   }
    
    output1.innerText="Your score is" + score;


}


sumbitBtn.addEventListener('click', calculateScore);