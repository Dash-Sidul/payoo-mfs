document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    // console.log(phoneNumber, pinNumber);
    if(phoneNumber === '01580657917' && pinNumber === '1626'){
        window.location.href = './home.html';
    }
    else{
        alert('failed to loging')
    }
})