// Tab Switching Logic
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active classes
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked button and its corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// Link Creation Logic
const linkForm = document.getElementById('link-form');
const linksList = document.getElementById('links-list');

linkForm.addEventListener('submit', event => {
    event.preventDefault();

    // Get form data
    const linkTitle = document.getElementById('link-title').value;
    const linkURL = document.getElementById('link-url').value;

    // Validate inputs
    if (!linkTitle || !linkURL) {
        alert('Both fields are required!');
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <a href="${linkURL}" target="_blank">${linkTitle}</a>
        <button class="delete-btn">Delete</button>
    `;

    // Add delete functionality
    listItem.querySelector('.delete-btn').addEventListener('click', () => {
        listItem.remove();
    });

    // Append the new link to the list
    linksList.appendChild(listItem);

    // Clear the form
    linkForm.reset();
});

// Profile Tab (Optional Additional Functionality)
const profileForm = document.querySelector('.profile-form');
if (profileForm) {
    profileForm.addEventListener('submit', (event) => {
        event.preventDefault();

        // Example: Gather and log profile information
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const bio = document.getElementById('bio').value;

        console.log('Profile Updated:', { name, email, bio });
        alert('Profile updated successfully!');
    });
}
