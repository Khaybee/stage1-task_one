document.addEventListener("DOMContentLoaded", function () {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.toISOString().split("T")[1].split(".")[0];

    document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent = `Current Day: ${currentDayOfWeek}`;
    document.querySelector('[data-testid="currentUTCTime"]').textContent = `Current UTC Time: ${currentUTCTime}`;
});