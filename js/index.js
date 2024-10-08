alert("Please Give Your Response");

const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let maxX;
let maxY;

function updateMaxValues() {
    const noBtnRect = noBtn.getBoundingClientRect();
    maxX = window.innerWidth - noBtnRect.width;
    maxY = window.innerHeight - noBtnRect.height;
}

updateMaxValues();

window.addEventListener("resize", updateMaxValues);

yesBtn.addEventListener("click", () => {
    question.innerHTML = "Yay, see you tomorrow! ❤️❤️";
    gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

noBtn.addEventListener("mouseenter", () => {
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

function playSound(audioName) {
    let audio = new Audio(audioName);
    audio.play();
}

playSound("alertsong.mp3");
