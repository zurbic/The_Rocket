const character = document.getElementById("character");
const block = document.getElementById("block");
const score = document.getElementById("score");
const alien = document.getElementById("alien");
const pirat = document.getElementById("pirat");
const startbutton = document.getElementById("startbutton");
const staartscreen = document.getElementById("startscreen");
let gameStarted = false;

function jump() {
    character.classList.add('jump-animation');
    setTimeout(() => {
        character.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if (!character.classList.contains('jump-animation')) {
        jump();
    }

});
startbutton.addEventListener("click", function () {
    startscreen.style.display = 'none';
    startGameLoop();
});

function startGameLoop() {
    gameStarted = true;
}

setInterval(() => {
    const blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 0) {
        block.style.display = 'none';
    } else {
        block.style.display = '';
    }

    if (gameStarted) {
        const characterTop = parseInt(window.getComputedStyle(character)
            .getPropertyValue('top'));

        if (blockLeft < 100 && blockLeft > 0 && characterTop >= 300) {
            alert(`Game over!\n\nDein Score ist:  ${score.innerText}\n\nwillst du es nochmal versuchen?`);
            location.reload();
        }
        score.innerText++;
    }

}, 50);

alien.addEventListener("click", function () {
    character.classList.remove('version2');
});
pirat.addEventListener("click", function () {
    character.classList.add('version2');
});
