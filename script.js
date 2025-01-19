// Data do início do namoro
const startDate = new Date('2024-10-04T00:00:00');

// Atualiza as contagens
function updateCounter() {
    const now = new Date();
    const elapsed = now - startDate;

    // Calcular meses, dias, horas, e segundos
    const months = Math.floor(elapsed / (1000 * 60 * 60 * 24 * 30.44));
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24)) % 30.44;
    const totalDays = Math.floor(elapsed / (1000 * 60 * 60 * 24));
    const hours = Math.floor(elapsed / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(elapsed / (1000 * 60)) % 60;
    const seconds = Math.floor(elapsed / 1000) % 60;

    // Atualizar elementos
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = Math.floor(days);
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('total-days').textContent = totalDays;

    // Atualizar progresso para um ano
    updateProgressToYear(totalDays);
}

// Atualiza o progresso para um ano
function updateProgressToYear(totalDays) {
    const daysInYear = 365;
    const daysRemaining = daysInYear - totalDays;
    const percentage = Math.min((totalDays / daysInYear) * 100, 100);

    document.getElementById('days-to-year').textContent = daysRemaining;
    document.getElementById('progress-fill').style.width = `${percentage}%`;
}

// Mostrar a barra de progresso
document.getElementById('show-progress').addEventListener('click', () => {
    document.getElementById('progress-bar-container').classList.toggle('hidden');
});

// Atualizar contadores e barra de progresso a cada segundo
setInterval(updateCounter, 1000);
updateCounter();




