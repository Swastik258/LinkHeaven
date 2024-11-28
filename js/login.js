document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve the user data from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the user exists and the password matches
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // Store user info in sessionStorage or localStorage for the current session
        sessionStorage.setItem('currentUser', JSON.stringify(user));

        // Redirect to the dashboard page
        window.location.href = "dashboard.html";  // Redirect to the dashboard page
    } else {
        alert("Invalid email or password!");
    }
});
