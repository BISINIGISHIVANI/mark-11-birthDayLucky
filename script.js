var dobOfUser=document.querySelector("#input-primary")
var luckyNumber=document.querySelector("#input-secondary");
var checkButton=document.querySelector("#check-button");
var finalMessage=document.querySelector("#message");

function compareValues(sum,luckyNumber){
  if(sum%luckyNumber=== 0){
   finalMessage.innerText="Your birthday is lucky 🚀";
  }
  else{
    finalMessage.innerText="Your birthday is not lucky 🤒"
   }
}
function checkBirthDayIsLucky(){
const dob=dobOfUser.value;
let sum=sumOfDob(dob);
 if(sum&&dob)
 compareValues(sum,luckyNumber.value)
 else
  finalMessage.innerText="Please enter both Fields 😡"
}

function sumOfDob(dob){
  dob=dob.replaceAll("-","");
  let sum= 0;
   for(let i=0;i<dob.length;i++){
    sum =sum + Number(dob.charAt(i));
  } 
  return sum;
}


checkButton.addEventListener("click",checkBirthDayIsLucky);


