const slider = document.querySelector('.slider');
const sliderTrack = document.querySelector('.slider-track');
const sliderThumb = document.querySelector('.slider-thumb');
const sliderValue = document.getElementById('slider-value');

let isDragging = false;

sliderThumb.addEventListener('mousedown', (e) => {
    isDragging = true;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseup', onMouseUp);

function onMouseMove(e) {
    if (!isDragging) return;

    const rect = slider.getBoundingClientRect();
    let x = e.clientX - rect.left;
    x = Math.max(0, Math.min(x, rect.width));

    const value = (x / rect.width) * 100;
    sliderTrack.style.width = `${value}%`;
    sliderThumb.style.left = `calc(${value}% - 10px)`;

    const sliderValueText = Math.round((value / 100) * 100);
    sliderValue.textContent = sliderValueText;
}

function onMouseUp() {
    isDragging = false;
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
}

