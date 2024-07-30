document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateLoginForm();
    });

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        validateSignupForm();
    });

    function validateLoginForm() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (username === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Login successful!');
        }
    }

    function validateSignupForm() {
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        if (username === '' || email === '' || password === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Signup successful!');
        }
    }
});
