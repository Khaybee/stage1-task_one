document.addEventListener('DOMContentLoaded', () => {
    // Update the time
    const utcTimeElement = document.getElementById('utcTime');

    // Function to format the date and time
    function formatDateTime(date) {
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dayOfWeek = daysOfWeek[date.getUTCDay()];
        const day = date.getUTCDate().toString().padStart(2, '0');
        const month = months[date.getUTCMonth()];
        const year = date.getUTCFullYear();
        const hours = date.getUTCHours().toString().padStart(2, '0');
        const minutes = date.getUTCMinutes().toString().padStart(2, '0');
        const seconds = date.getUTCSeconds().toString().padStart(2, '0');
        const milliseconds = date.getUTCMilliseconds().toString().padStart(3, '0');
        return `Current Time in UTC: ${dayOfWeek}, ${day} ${month} ${year} ${hours}:${minutes}:${seconds}.${milliseconds} GMT`;
    }

    // Update the time every millisecond
    setInterval(() => {
        const currentDate = new Date();
        const formattedTime = formatDateTime(currentDate);
        utcTimeElement.textContent = formattedTime;
    }, 1); // Update every millisecond

    // Get the current day and update it once
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[new Date().getUTCDay()];
    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDayOfWeek}`;
});
