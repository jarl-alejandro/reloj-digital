"use strict";
;(() => {

    const canvas = document.getElementById('clockCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth - 200;
    canvas.height = (window.innerHeight / 2) - 80;
    const font = " system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

    function drawClock() {
        const now = new Date();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const day = now.getDate();
        const month = now.toLocaleString('default', { month: 'long' });
        const year = now.getFullYear();

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Dibujar la hora
        ctx.font = `bold 240px ${font}`;
        ctx.fillStyle = '#eeeeee';
        const timeText = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        const timeTextWidth = ctx.measureText(timeText).width;
        const xTime = (canvas.width - timeTextWidth) / 2;
        ctx.fillText(timeText, xTime, 200);

        ctx.font = `bold 36px ${font}`;
        const dateText = `${day} de ${month} del ${year}`;
        const dateTextWidth = ctx.measureText(dateText).width;
        const xDate = canvas.width - dateTextWidth - 20;
        const yDate = canvas.height - 20;
        ctx.fillText(dateText, xDate, yDate);
    }

    setTimeout(() => {
        setInterval(drawClock, 1000); // Actualizar cada segundo
        drawClock();
    }, 500)


})();
