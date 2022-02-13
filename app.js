 // update function number 
function updateProductNumber (product, price, isIncreasing){
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
   if(isIncreasing == true){
    productNumber = parseFloat(productNumber) +1;
   }
   else if( productNumber > 0){
    productNumber = parseFloat(productNumber) - 1;
   }
   productInput.value = productNumber;
   //  update total
   const productTotal = document.getElementById( product + '-total');
    productTotal.innerText = productNumber * price;

        //calculation total
        calculetTotal();
}

function getInputValue (product){
    const phoneInput = document.getElementById( product + '-number');
    const phoneNumber = parseFloat (phoneInput.value);
    return phoneNumber;
}

function calculetTotal(){
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseFloat (phoneInput.value);
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal/10;
    const totalPrice = subtotal + tax;
    // update sub total
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    

}


function getInputValue (product){
    // const phoneInput = document.getElementById(product,'phone-number');
    const phoneInput = document.getElementById('phone-number')
    const productNumber = parseInt(phoneInput.value);
    return productNumber;
}

//handel phone increase dicrease event 
document.getElementById('phone-plus').addEventListener('click', function(){
   updateProductNumber('phone', 1219, true)
});

document.getElementById('phone-minus').addEventListener('click', function(){
    updateProductNumber('phone', 1219, false);
    
})



// handel case increase dicrease event

document.getElementById('case-plus').addEventListener('click', function(){
    /* const caseInput = document.getElementById('case-number');
    const caseNumber = caseInput.value;
    caseInput.value = parseFloat(caseNumber) +1;  */
    updateProductNumber('case', 59, true);
    
});
document.getElementById('case-minus').addEventListener('click', function(){
  /*   const caseInput = document.getElementById('case-number');
   const caseNumber = caseInput.value;
   caseInput.value = parseFloat(caseNumber) - 1; */
  updateProductNumber('case',59, false);
});

