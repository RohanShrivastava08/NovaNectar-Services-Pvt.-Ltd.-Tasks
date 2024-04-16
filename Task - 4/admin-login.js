// Function to handle form submission
document.getElementById('adminLoginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get admin ID and password from the form
    const adminId = document.getElementById('adminId').value;
    const password = document.getElementById('password').value;

    // Dummy admin ID and password (replace with your actual authentication logic)
    const validAdminId = "admin123";
    const validPassword = "password123";

    // Check if the entered credentials match the valid ones
    if (adminId === validAdminId && password === validPassword) {
        alert('Login successful! Redirecting to admin panel...');
        // Redirect to the admin panel page
        window.location.href = 'admin-panel.html';
    } else {
        alert('Invalid admin ID or password. Please try again.');
    }
});

// Function to handle registration link click
document.getElementById('registerLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Redirect to the registration page
    window.location.href = 'admin-register.html';
});
