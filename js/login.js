document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // get user password 
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret'){
        window.location.href = 'index.html'
    }
    else {
        alert('something went wrong');
    }
})


