 // update function number 
function updateCaseNumber (isIncreasing){
    const caseInput = document.getElementById('case-number');
    let caseNumber = caseInput.value;
   if(isIncreasing == true){
    caseNumber = parseFloat(caseNumber) +1;
   }
   else if( caseNumber > 0){
    caseNumber = parseFloat(caseNumber) - 1;
   }
   caseInput.value = caseNumber;
   // case update total
   const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = caseNumber * 59;
    
}

document.getElementById('case-plus').addEventListener('click', function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseFloat(caseNumber) +1;  */
    updateCaseNumber(true);
    
});
document.getElementById('case-minus').addEventListener('click', function(){
  /*   const caseInput = document.getElementById('case-number');
   const caseNumber = caseInput.value;
   caseInput.value = parseFloat(caseNumber) - 1; */
  updateCaseNumber(false);
})