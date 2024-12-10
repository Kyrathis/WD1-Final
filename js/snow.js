// JavaScript to handle the snowfall effect

let isSnowing = false; // Track if the snow effect is active

document.getElementById('snowfallButton').addEventListener('click', function() {
    if (isSnowing) {
        stopSnowfall();
    } else {
        startSnowfall();
    }
    isSnowing = !isSnowing;
    // Toggle button text
    this.textContent = isSnowing ? 'Stop Snowfall' : 'Start Snowfall';
});

function startSnowfall() {
    // Create a canvas for snowfall effect if not already present
    if (!document.getElementById('snowfallCanvas')) {
        let canvas = document.createElement('canvas');
        canvas.id = 'snowfallCanvas';
        document.body.appendChild(canvas);

        // Start the snowfall animation
        animateSnowfall(canvas);
    }
}

function stopSnowfall() {
    // Remove the canvas to stop the snowfall
    let canvas = document.getElementById('snowfallCanvas');
    if (canvas) {
        document.body.removeChild(canvas);
    }
}

function animateSnowfall(canvas) {
    const ctx = canvas.getContext('2d');
    const snowflakes = [];

    // Resize the canvas to fit the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Create Snowflake class
    class Snowflake {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = Math.random() * 4 + 1;
            this.speed = Math.random() * 1 + 0.5;
            this.alpha = Math.random() * 0.5 + 0.5;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
            ctx.fill();
        }

        update() {
            this.y += this.speed;
            if (this.y > canvas.height) {
                this.y = -this.radius; // Reset to top if snowflake reaches the bottom
            }
        }
    }

    // Generate snowflakes
    for (let i = 0; i < 200; i++) {
        snowflakes.push(new Snowflake());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let flake of snowflakes) {
            flake.update();
            flake.draw();
        }
        requestAnimationFrame(animate);
    }

    animate();
}
