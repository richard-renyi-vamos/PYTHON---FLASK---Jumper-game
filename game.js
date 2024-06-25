// static/js/game.js
document.addEventListener('DOMContentLoaded', () => {
    const player = document.getElementById('player');
    const obstacle = document.getElementById('obstacle');
    let isJumping = false;

    function jump() {
        if (isJumping) return;
        isJumping = true;
        let position = 0;
        const intervalUp = setInterval(() => {
            if (position >= 150) {
                clearInterval(intervalUp);
                const intervalDown = setInterval(() => {
                    if (position <= 0) {
                        clearInterval(intervalDown);
                        isJumping = false;
                    } else {
                        position -= 5;
                        player.style.bottom = position + 'px';
                    }
                }, 20);
            } else {
                position += 5;
                player.style.bottom = position + 'px';
            }
        }, 20);
    }

    document.addEventListener('keydown', event => {
        if (event.code === 'Space') {
            jump();
        }
    });

    setInterval(() => {
        const playerBottom = parseInt(window.getComputedStyle(player).getPropertyValue('bottom'));
        const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));

        if (obstacleLeft < 50 && obstacleLeft > 0 && playerBottom <= 50) {
            alert('Game Over!');
            location.reload();
        }
    }, 10);
});
