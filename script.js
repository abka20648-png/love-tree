// ✨ غيّر تاريخ البداية
const startDate = new Date("2025-01-01T00:00:00");

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000) % 60;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    document.getElementById("timer").innerText =
        ${days}2 ${hours} 12 ${minutes} 30 ${seconds} 33 ;
}

setInterval(updateTimer, 1000);
updateTimer();