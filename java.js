document.addEventListener('DOMContentLoaded', () => {
    // Get the current date and time
    const currentDate = new Date();
    
    // Update the day of the week and UTC time
    const dayOfWeekElement = document.getElementById('dayOfWeek');
    const utcTimeElement = document.getElementById('utcTime');
    
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.toUTCString();
    
    dayOfWeekElement.textContent = currentDayOfWeek;
    utcTimeElement.textContent = currentUTCTime;
});