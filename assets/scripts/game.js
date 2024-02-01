const game = document.querySelector(".game"),
    username = document.querySelector(".username"),
    score = document.querySelector(".score"),
    live = document.querySelector(".live"),
    timer = document.querySelector(".time"),
    popap = document.querySelector(".popap"),
    input = document.querySelector("#username"),
    btnStart = document.querySelector("#startGame");

let minute = 0,
    second = 0;
function gameTimer() {
    /** Функция таймера для игры */
    second++;
    if (second === 60){
        minute++;
        second = 0;
    }

    timer.textContent = `${minute < 10 ? "0"+minute: minute}:${second < 10 ? "0"+second: second}`
}

let basket = document.createElement("img");
basket.classList.add("basket");
basket.src = "./assets/images/basket.png";
game.appendChild(basket)

function draw() {
    game.addEventListener("mousemove", (event) => {
        mouseX = event.offsetX;
        basket.style.left = mouseX + "px";
        if (parseFloat(basket.style.left) <= basket.width/2){
            basket.style.left = basket.width/2 + "px"
        } else if (parseFloat(basket.style.left) >= game.offsetWidth - basket.width/2){
            basket.style.left = basket.style.left - basket.width*2 + "px"
        }
    });
}


btnStart.addEventListener("click", () => {
    popap.remove();
    username.textContent = input.value;
    let time = setInterval(gameTimer, 1000);
    let drawGame = setInterval(draw, 1000);
});
