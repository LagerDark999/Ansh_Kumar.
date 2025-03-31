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
document.addEventListener("mousemove", (e) => {
    createParticle(e.clientX, e.clientY);
});

function createParticle(x, y) {
    const particle = document.createElement("div");
    particle.classList.add("particle");
    document.body.appendChild(particle);

    // Set particle position
    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    // Randomize particle size and color
    const size = Math.random() * 10 + 5; // Random size between 5px and 15px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;

    const colors = ["rgba(255, 0, 0, 1)", "rgba(255, 255, 255, 1)", "rgba(211, 3, 3, 1)", "rgba(255, 69, 0, 1)"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = `radial-gradient(circle, ${randomColor} 0%, rgba(255, 255, 255, 0) 100%)`;

    // Remove particle after animation
    particle.addEventListener("animationend", () => {
        particle.remove();
    });
}