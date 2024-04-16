// JavaScript for handling attendance form submission
document.querySelector('.attendance form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Fetch student ID and attendance value from the form
    const studentId = document.getElementById('studentId').value;
    const attendance = document.getElementById('attendance').value;


    // Create an object with the attendance data
    const attendanceData = {
        studentId: studentId,
        attendance: attendance
    };

    // Make a POST request to the backend server to store attendance data
    fetch('/attendance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(attendanceData)
    })
    .then(response => {
        if (response.ok) {
            // Reset form fields if the request was successful
            document.getElementById('studentId').value = '';
            document.getElementById('attendance').value = 'present'; // Reset to default value
            alert('Attendance submitted successfully!');
        } else {
            // Display error message if request failed
            alert('Failed to submit attendance. Please try again.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
});
