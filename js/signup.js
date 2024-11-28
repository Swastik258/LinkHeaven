// Load the Google Identity Services library
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "830755299641-e04htsg54s8q7jpbq2cis9jc94vlbjeu.apps.googleusercontent.com",
        callback: handleCredentialResponse
    });

    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'), 
        { theme: "outline", size: "large" } // Customize button style
    );
};

function handleCredentialResponse(response) {
    // Decode the response and extract user information
    const payload = JSON.parse(atob(response.credential.split('.')[1]));

    console.log("User Info:", payload); // For debugging purposes

    // Save user info locally (optional)
    localStorage.setItem('userName', payload.name);
    localStorage.setItem('userEmail', payload.email)
    localStorage.setItem("user", JSON.stringify(payload));

    // Redirect to dashboard
    alert(`Welcome, ${payload.name}!`);
    window.location.href = "dashboard.html";
}
