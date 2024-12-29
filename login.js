function validateForm() {
   const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    if ( !email ||  !password) {
        errorMessage.textContent = 'All fields must be filled.';
        return;
    }


    alert('Login successfull!');
    document.getElementById('loginForm').reset();
}