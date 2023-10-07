// 
// Function to update the date and time
// 
function updateDateTime() {
    const dateElement = document.querySelector('.date');
    const timeElement = document.querySelector('.time');

    // Get the current date and time
    const now = new Date();

    // Format the date and time
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = now.toLocaleDateString(undefined, options);
    const formattedTime = now.toLocaleTimeString();

    // Update the HTML elements with the formatted date and time
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();



