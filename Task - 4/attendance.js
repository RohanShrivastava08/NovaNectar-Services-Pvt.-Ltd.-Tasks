// Define an array to store attendance data
let attendanceData = [];

// Function to handle form submission
document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const studentId = document.getElementById('studentId').value;
    const date = document.getElementById('date').value;
    const status = document.getElementById('status').value;

    // Add attendance data to the array
    attendanceData.push({ studentId, date, status });

    // You can perform further processing such as storing data in a database, etc.
    alert('Attendance submitted successfully!');
});

// Function to generate attendance report
document.getElementById('generateReport').addEventListener('click', function() {
    // Dummy implementation: log attendance report
    console.log('Attendance Report:');
    console.log(attendanceData);
});
