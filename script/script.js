 //Create add event listner 
 document.getElementById('login-submit').addEventListener('click', function(){
    // call email input
    const emailFied = document.getElementById('user-email').value;
    
    // call pass input
    const passFied = document.getElementById('user-password').value;
    
    if(emailFied == 'admin' && passFied == '123'){
        window.location.href='banking.html';
    }
    else{
        alert('You ID & Pass Wrong. Please type: admin & 123');
    }
    
})


