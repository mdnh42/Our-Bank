
//Button Connect 
document.getElementById('login-submit').addEventListener('click', function(){
// Get User Email
const emailField = document.getElementById('user-email');
const userEmail = emailField.value;
// Get User Password
const passField = document.getElementById('user-password');
const userPass = passField.value;

// COndition User ID & Pass
    if(userEmail == 'admin' && userPass == '123'){
        window.location.href = 'banking.html';
    }
    else{
        alert('Wrong User & Pass Please type UserID: admin & pass: 123');
    }
})

//End Button Syle