// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// document.addEventListener("keypress", function() {
//     if(started == false) {
//         console.log("game is started");
//         started = true;

//         levelUp();
//     }
// });


// function gameFlash(btn) {
//    btn.classList.add("flash");
//    setTimeout(function() {
//     btn.classList.remove("flash");
//    }, 250);
// }



// function userFlash(btn) {
//    btn.classList.add("userflash");
//    setTimeout(function() {
//     btn.classList.remove("userflash");
//    }, 250);
// }


// function levelUp() {
//    userSeq = [];
//    level++;
//    h2.innerText = `Level ${level}`;

//    let randIdx = Math.floor(Math.random() * 3);
//    let randColor = btns[randIdx];
//    let randbtn = document.querySelector(`.${randColor}`);
// //    console.log(randIdx);
// //    console.log(randColor);
// //    console.log(randbtn);
//    gameSeq.push(randColor);
//    console.log(gameSeq);
//    gameFlash(randbtn);
// }


// function checkAns(idx) {

//     if(userSeq[idx] === gameSeq[idx]) {
//         if(userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b> ${level} </b> <br> Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function() {
//         document.querySelector("body").style.backgroundColor = "white";
//         }, 150);
//         reset();
//     }
// }


// function btnPress() {
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }


// let allBtns = document.querySelectorAll(".btn");
// for(btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }


// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }



// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;
// let score = 0;

// let acceptingInput = false;

// let bestScore = localStorage.getItem("simonBestScore") || 0;


// // ELEMENTS

// let h2 = document.querySelector("#message");
// let subMessage = document.querySelector("#sub-message");

// let levelDisplay = document.querySelector("#level");
// let scoreDisplay = document.querySelector("#score");
// let bestScoreDisplay = document.querySelector("#best-score");

// let startBtn = document.querySelector("#start-btn");

// let allBtns = document.querySelectorAll(".btn");


// // SHOW BEST SCORE

// bestScoreDisplay.innerText = bestScore;


// // START GAME

// function startGame() {

//     if (started) {
//         return;
//     }

//     started = true;

//     gameSeq = [];
//     userSeq = [];

//     level = 0;
//     score = 0;

//     levelDisplay.innerText = level;
//     scoreDisplay.innerText = score;

//     h2.innerText = "Watch carefully 👀";
//     subMessage.innerText = "Remember the sequence";

//     startBtn.innerText = "↻ Restart";

//     levelUp();
// }


// // KEYBOARD START

// document.addEventListener("keydown", function(event) {

//     if (!started) {
//         startGame();
//     }

// });


// // START BUTTON

// startBtn.addEventListener("click", function() {

//     if (started) {

//         reset();

//     }

//     startGame();

// });


// // COMPUTER FLASH

// function gameFlash(btn) {

//     btn.classList.add("flash");

//     playSound(btn.dataset.color);

//     setTimeout(function() {

//         btn.classList.remove("flash");

//     }, 350);
// }


// // USER FLASH

// function userFlash(btn) {

//     btn.classList.add("userflash");

//     playSound(btn.dataset.color);

//     setTimeout(function() {

//         btn.classList.remove("userflash");

//     }, 180);
// }


// // LEVEL UP

// function levelUp() {

//     userSeq = [];

//     level++;

//     levelDisplay.innerText = level;

//     h2.innerText = `Level ${level}`;

//     subMessage.innerText = "Watch the sequence...";

//     acceptingInput = false;


//     // RANDOM COLOR

//     let randIdx = Math.floor(
//         Math.random() * btns.length
//     );

//     let randColor = btns[randIdx];

//     let randBtn = document.querySelector(
//         `#${randColor}`
//     );


//     gameSeq.push(randColor);


//     console.log("Game Sequence:", gameSeq);


//     // SHOW COMPLETE SEQUENCE

//     showSequence();

// }


// // SHOW SEQUENCE ONE BY ONE

// function showSequence() {

//     let i = 0;


//     let interval = setInterval(function() {

//         let color = gameSeq[i];

//         let btn = document.querySelector(
//             `#${color}`
//         );

//         gameFlash(btn);

//         i++;


//         if (i >= gameSeq.length) {

//             clearInterval(interval);

//             setTimeout(function() {

//                 acceptingInput = true;

//                 h2.innerText = `Your turn — Level ${level}`;

//                 subMessage.innerText =
//                     "Repeat the pattern";

//             }, 400);

//         }

//     }, 600);

// }


// // CHECK ANSWER

// function checkAns(idx) {

//     if (
//         userSeq[idx] === gameSeq[idx]
//     ) {

//         // COMPLETE LEVEL

//         if (
//             userSeq.length === gameSeq.length
//         ) {

//             score = level * 100;

//             scoreDisplay.innerText = score;


//             if (score > bestScore) {

//                 bestScore = score;

//                 bestScoreDisplay.innerText =
//                     bestScore;

//                 localStorage.setItem(
//                     "simonBestScore",
//                     bestScore
//                 );

//             }


//             acceptingInput = false;

//             h2.innerText = "Perfect! 🔥";

//             subMessage.innerText =
//                 "Next level coming...";


//             setTimeout(function() {

//                 levelUp();

//             }, 1000);

//         }

//     }

//     else {

//         gameOver();

//     }

// }


// // BUTTON PRESS

// function btnPress() {

//     if (!started || !acceptingInput) {
//         return;
//     }


//     let btn = this;

//     userFlash(btn);


//     let userColor =
//         btn.getAttribute("data-color");


//     userSeq.push(userColor);


//     checkAns(userSeq.length - 1);

// }


// // ADD CLICK EVENTS

// for (let btn of allBtns) {

//     btn.addEventListener(
//         "click",
//         btnPress
//     );

// }


// // GAME OVER

// function gameOver() {

//     started = false;

//     acceptingInput = false;


//     if (score > bestScore) {

//         bestScore = score;

//         bestScoreDisplay.innerText =
//             bestScore;

//         localStorage.setItem(
//             "simonBestScore",
//             bestScore
//         );

//     }


//     h2.innerHTML =
//         `Game Over 💥`;

//     subMessage.innerHTML =
//         `You reached Level ${level}. Score: ${score}`;


//     document.querySelector(".game")
//         .classList.add("game-over");


//     setTimeout(function() {

//         document.querySelector(".game")
//             .classList.remove("game-over");

//     }, 500);


//     startBtn.innerText =
//         "▶ Play Again";


//     // ERROR SOUND

//     playGameOverSound();

// }


// // RESET

// function reset() {

//     started = false;

//     acceptingInput = false;

//     gameSeq = [];

//     userSeq = [];

//     level = 0;

//     score = 0;

//     levelDisplay.innerText = 0;

//     scoreDisplay.innerText = 0;

// }


// // SOUND SYSTEM

// function playSound(color) {

//     let audioContext =
//         new (
//             window.AudioContext ||
//             window.webkitAudioContext
//         )();


//     let oscillator =
//         audioContext.createOscillator();


//     let gain =
//         audioContext.createGain();


//     let frequencies = {

//         red: 220,

//         yellow: 330,

//         green: 440,

//         purple: 550

//     };


//     oscillator.frequency.value =
//         frequencies[color];


//     oscillator.type = "sine";


//     gain.gain.setValueAtTime(
//         0.15,
//         audioContext.currentTime
//     );


//     gain.gain.exponentialRampToValueAtTime(
//         0.001,
//         audioContext.currentTime + 0.25
//     );


//     oscillator.connect(gain);

//     gain.connect(audioContext.destination);


//     oscillator.start();

//     oscillator.stop(
//         audioContext.currentTime + 0.25
//     );

// }


// // GAME OVER SOUND

// function playGameOverSound() {

//     let audioContext =
//         new (
//             window.AudioContext ||
//             window.webkitAudioContext
//         )();


//     let oscillator =
//         audioContext.createOscillator();


//     let gain =
//         audioContext.createGain();


//     oscillator.type = "sawtooth";

//     oscillator.frequency.value = 120;


//     gain.gain.setValueAtTime(
//         0.2,
//         audioContext.currentTime
//     );


//     gain.gain.exponentialRampToValueAtTime(
//         0.001,
//         audioContext.currentTime + 0.5
//     );


//     oscillator.connect(gain);

//     gain.connect(audioContext.destination);


//     oscillator.start();

//     oscillator.stop(
//         audioContext.currentTime + 0.5
//     );

// }





let gameSeq = [];
let userSeq = [];

let btns = [
    "yellow",
    "red",
    "purple",
    "green"
];

let started = false;

let level = 0;

let score = 0;

let acceptingInput = false;


// BEST SCORE

let bestScore =
    localStorage.getItem("simonBestScore") || 0;


// ELEMENTS

let h2 =
    document.querySelector("#message");

let subMessage =
    document.querySelector("#sub-message");

let levelDisplay =
    document.querySelector("#level");

let scoreDisplay =
    document.querySelector("#score");

let bestScoreDisplay =
    document.querySelector("#best-score");

let startBtn =
    document.querySelector("#start-btn");

let allBtns =
    document.querySelectorAll(".btn");


// SHOW BEST SCORE

bestScoreDisplay.innerText =
    bestScore;


// START GAME

function startGame() {

    if (started) {
        return;
    }


    started = true;

    gameSeq = [];

    userSeq = [];

    level = 0;

    score = 0;


    levelDisplay.innerText = level;

    scoreDisplay.innerText = score;


    h2.innerText =
        "Watch carefully 👀";

    subMessage.innerText =
        "Remember the new color";


    startBtn.innerText =
        "↻ Restart";


    levelUp();
}


// KEYBOARD START

document.addEventListener(
    "keydown",
    function () {

        if (!started) {

            startGame();

        }

    }
);


// START / RESTART BUTTON

startBtn.addEventListener(
    "click",
    function () {

        if (started) {

            reset();

        }

        startGame();

    }
);


// COMPUTER FLASH

function gameFlash(btn) {

    btn.classList.add("flash");


    playSound(
        btn.dataset.color
    );


    setTimeout(
        function () {

            btn.classList.remove("flash");

        },
        300
    );
}


// USER FLASH

function userFlash(btn) {

    btn.classList.add("userflash");


    playSound(
        btn.dataset.color
    );


    setTimeout(
        function () {

            btn.classList.remove("userflash");

        },
        180
    );
}


// LEVEL UP

function levelUp() {

    userSeq = [];

    level++;


    levelDisplay.innerText =
        level;


    h2.innerText =
        `Level ${level}`;


    subMessage.innerText =
        "Watch the new color...";


    acceptingInput = false;


    // RANDOM INDEX

    let randIdx =
        Math.floor(
            Math.random() * btns.length
        );


    // RANDOM COLOR

    let randColor =
        btns[randIdx];


    // BUTTON

    let randBtn =
        document.querySelector(
            `#${randColor}`
        );


    // ADD NEW COLOR

    gameSeq.push(randColor);


    console.log(
        "Game Sequence:",
        gameSeq
    );


    // IMPORTANT:
    // ONLY NEW COLOR FLASHES

    gameFlash(randBtn);


    // NOW USER CAN PLAY

    setTimeout(
        function () {

            acceptingInput = true;


            h2.innerText =
                `Your turn — Level ${level}`;


            subMessage.innerText =
                "Repeat the complete pattern";

        },
        500
    );
}


// CHECK ANSWER

function checkAns(idx) {


    // CORRECT CLICK

    if (
        userSeq[idx] ===
        gameSeq[idx]
    ) {


        // COMPLETE SEQUENCE

        if (
            userSeq.length ===
            gameSeq.length
        ) {


            // SCORE

            score =
                level * 100;


            scoreDisplay.innerText =
                score;


            // BEST SCORE

            if (
                score > bestScore
            ) {

                bestScore =
                    score;


                bestScoreDisplay.innerText =
                    bestScore;


                localStorage.setItem(
                    "simonBestScore",
                    bestScore
                );

            }


            acceptingInput = false;


            h2.innerText =
                "Perfect! 🔥";


            subMessage.innerText =
                "Next level...";


            // NEXT LEVEL

            setTimeout(
                function () {

                    levelUp();

                },
                800
            );

        }

    }


    // WRONG CLICK

    else {

        gameOver();

    }

}


// USER BUTTON PRESS

function btnPress() {


    // DON'T ALLOW CLICK
    // WHEN GAME IS NOT RUNNING

    if (
        !started ||
        !acceptingInput
    ) {

        return;

    }


    let btn = this;


    // FLASH

    userFlash(btn);


    // GET COLOR

    let userColor =
        btn.getAttribute(
            "data-color"
        );


    // ADD TO USER SEQUENCE

    userSeq.push(userColor);


    // CHECK

    checkAns(
        userSeq.length - 1
    );

}


// ADD CLICK EVENT TO ALL BUTTONS

for (
    let btn of allBtns
) {

    btn.addEventListener(
        "click",
        btnPress
    );

}


// GAME OVER

function gameOver() {


    started = false;

    acceptingInput = false;


    h2.innerText =
        "Game Over 💥";


    subMessage.innerText =
        `You reached Level ${level} • Score ${score}`;


    // SHAKE EFFECT

    document
        .querySelector(".game")
        .classList.add("game-over");


    setTimeout(
        function () {

            document
                .querySelector(".game")
                .classList.remove(
                    "game-over"
                );

        },
        500
    );


    startBtn.innerText =
        "▶ Play Again";


    // SOUND

    playGameOverSound();

}


// RESET

function reset() {

    started = false;

    acceptingInput = false;


    gameSeq = [];

    userSeq = [];


    level = 0;

    score = 0;


    levelDisplay.innerText =
        0;

    scoreDisplay.innerText =
        0;
}


// =====================
// SOUND
// =====================

function playSound(color) {


    let AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    let audioContext =
        new AudioContext();


    let oscillator =
        audioContext.createOscillator();


    let gain =
        audioContext.createGain();


    let frequencies = {

        red: 220,

        yellow: 330,

        green: 440,

        purple: 550

    };


    oscillator.frequency.value =
        frequencies[color];


    oscillator.type =
        "sine";


    gain.gain.setValueAtTime(
        0.15,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.25
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.25
    );
}


// GAME OVER SOUND

function playGameOverSound() {


    let AudioContext =
        window.AudioContext ||
        window.webkitAudioContext;


    let audioContext =
        new AudioContext();


    let oscillator =
        audioContext.createOscillator();


    let gain =
        audioContext.createGain();


    oscillator.type =
        "sawtooth";


    oscillator.frequency.value =
        120;


    gain.gain.setValueAtTime(
        0.2,
        audioContext.currentTime
    );


    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.5
    );


    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );


    oscillator.start();


    oscillator.stop(
        audioContext.currentTime + 0.5
    );
}