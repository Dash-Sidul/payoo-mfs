document.getElementById('btn-cash-out').addEventListener('click',function(event){
event.preventDefault();
const cashOutInput = document.getElementById('cash-out-input').value;
const cashOutInput2 = parseFloat(cashOutInput)
const cashOutPin = document.getElementById('cash-out-pin').value;
console.log(cashOutInput, cashOutPin);
if(cashOutPin === '1234'){
    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalance2 = parseFloat(accountBalance)
    const newCashOutBalance = accountBalance2 - cashOutInput2;
    document.getElementById('account-balance').innerText = newCashOutBalance;
}
else{
    alert('failed to cash out')
}
})