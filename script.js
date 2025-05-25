function hamburg(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(0px)"
}
function cancel(){
    const navbar = document.querySelector(".dropdown")
    navbar.style.transform  = "translateY(-500px)"
}

// Typewriter effect
const texts = ["DEVELOPER", "YOUTUBER", "GAMER", "ETHICAL HACKER"];
let speed = 100;
let textIndex = 0;
let charcterIndex = 0;

const textElements = document.querySelector(".typewriter-text");
if (textElements) {
    function typeWriter() {
        if (charcterIndex < texts[textIndex].length) {
            textElements.innerHTML += texts[textIndex].charAt(charcterIndex);
            charcterIndex++;
            setTimeout(typeWriter, speed);
        } else {
            setTimeout(eraseText, 1000);
        }
    }

    function eraseText() {
        if (textElements.innerHTML.length > 0) {
            textElements.innerHTML = textElements.innerHTML.slice(0, -1);
            setTimeout(eraseText, 50);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            charcterIndex = 0;
            setTimeout(typeWriter, 500);
        }
    }

    window.onload = typeWriter;
} else {
    console.error("Typewriter element not found in the DOM.");
}

// Particle effect for the cursor
document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;

    // Randomize particle size
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    // Randomize particle movement direction
    const xDirection = Math.random() > 0.5 ? 1 : -1;
    const yDirection = Math.random() > 0.5 ? 1 : -1;
    particle.style.setProperty('--x', xDirection);
    particle.style.setProperty('--y', yDirection);

    // Randomize particle color
    const colors = [
        'rgb(255, 0, 0)', // Red-Orange
        'rgba(255, 140, 0, 0.94)', // Orange
        'rgba(255, 255, 0, 0.86)', // Yellow
        'rgba(0, 191, 255, 0.8)', // Light Blue
        'rgba(17, 0, 255, 0.8)', // Pink
        'rgba(0, 255, 0, 0.84)', // Light Green
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = `radial-gradient(circle, rgba(255, 255, 255, 1) 0%, ${color} 50%, rgba(0, 0, 0, 0) 100%)`;

    // Randomize animation duration
    const duration = Math.random() * 1.5 + 0.5; // Random duration between 0.5s and 2s
    particle.style.animationDuration = `${duration}s`;

    document.body.appendChild(particle);

    // Remove the particle after the animation ends
    setTimeout(() => {
        particle.remove();
    }, duration * 1000);
});

// Snow falling animation
function createSnowflake() {
    const snow = document.createElement('div');
    snow.className = 'snowflake';
    snow.style.left = Math.random() * 100 + 'vw';
    snow.style.animationDuration = (3 + Math.random() * 3) + 's';
    snow.style.opacity = 0.5 + Math.random() * 0.5;
    snow.style.width = snow.style.height = (6 + Math.random() * 6) + 'px';
    // Assign random color (red, blue, black, white, green)
    const snowColors = [
        'rgba(255,0,0,0.9)',    // Red
        'rgba(0,0,255,0.9)',    // Blue
        'rgba(0,0,0,0.8)',      // Black
        'rgba(255,255,255,0.95)', // White
        'rgba(0,255,0,0.9)'     // Green
    ];
    const color = snowColors[Math.floor(Math.random() * snowColors.length)];
    snow.style.background = `radial-gradient(circle, ${color} 60%, transparent 100%)`;
    document.getElementById('snow-container').appendChild(snow);
    setTimeout(() => snow.remove(), 7000);
}
setInterval(createSnowflake, 150);