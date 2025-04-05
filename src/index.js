import "./css/style.css";

var coll = document.querySelector(".collapsible");

coll.addEventListener("click", function() {
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
});


document.getElementById('likeButton').addEventListener('click', function() {
    const heart = document.createElement('div');
    heart.className = 'heart';

    const randomTrajectory = getRandomTrajectory();
    const startX = randomTrajectory[0] * 50;
    const endX = randomTrajectory[2] * 50;

    heart.style.transform = `translate(${startX}px, 0)`;
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translate(${endX}px, -200px)`;
    }, 0);

    // Удаляем элемент после завершения анимации
    heart.addEventListener('transitionend', () => {
        heart.remove();
    });
});

function getRandomTrajectory() {
    const trajectories = [
        [0, 25, 50, 75, 100],
        [0, 25, 50, 75, 100],
        [0, 25, 50, 75, 100],
        [0, 25, 50, 75, 100],
    ];

    const randomIndex = Math.floor(Math.random() * trajectories.length);
    return trajectories[randomIndex].map(val => val / 100); // Нормируем значения
}
