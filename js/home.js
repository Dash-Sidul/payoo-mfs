//add money to the account

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('add-money-input').value;
    const addMoneyBalance = parseFloat(addMoneyInput);
    const addMoneyPin = document.getElementById('add-money-pin').value;
    if(addMoneyPin ==='1234'){
        const balance = document.getElementById('account-balance').innerText;
        const addBalance = parseFloat(balance);
        const newBalance = addBalance + addMoneyBalance;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to add money')
    }
});