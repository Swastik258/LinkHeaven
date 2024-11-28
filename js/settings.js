// Function to handle saving settings
function saveSettings() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const notifications = document.getElementById('notifications').value;

    if (!email || !password || !confirmPassword) {
        alert('Please fill out all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    // Here, you can implement API calls to save these settings
    alert(`Settings saved:\nEmail: ${email}\nNotifications: ${notifications}`);
}

// Function to handle account deletion
function deleteAccount() {
    const confirmation = confirm('Are you sure you want to delete your account? This action cannot be undone.');
    if (confirmation) {
        // Here, you can implement API calls to delete the account
        alert('Account deleted successfully.');
        window.location.href = 'logout.html'; // Redirect to logout or home page
    }
}
