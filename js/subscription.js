// Function to upgrade current plan
function upgradePlan() {
    alert("Upgrade options are available below!");
}

// Function to subscribe to a new plan
function subscribePlan(planName) {
    alert(`You have selected the ${planName} plan. Redirecting to payment gateway...`);
    // Implement payment gateway logic here
}

// Function to save billing information
function saveBillingInfo() {
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    if (!cardNumber || !expiryDate || !cvv) {
        alert('Please fill out all billing information.');
        return;
    }

    alert('Billing information saved successfully.');
    // Implement API call to save billing info
}
