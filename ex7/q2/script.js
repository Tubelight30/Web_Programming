document.addEventListener("DOMContentLoaded", function() {
    const ball = document.getElementById("ball");

    function animateBall() {
        ball.animate([
            { transform: 'translate(0, 0) rotate(0deg) skew(0deg, 0deg)' },
            { transform: 'translate(100px, -50px) rotate(45deg) skew(10deg, 10deg)' },
            { transform: 'translate(200px, 0) rotate(90deg) skew(0deg, 0deg)' },
            { transform: 'translate(100px, 50px) rotate(135deg) skew(-10deg, -10deg)' },
            { transform: 'translate(0, 0) rotate(180deg) skew(0deg, 0deg)' }
        ], {
            duration: 3000,
            iterations: Infinity
        });
    }

    animateBall();
});