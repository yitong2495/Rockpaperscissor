function game() {
    //score board
    let pScore = 0;
    let cScore = 0;

    //intro
    function startGame() {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const matchScreen = document.querySelector(".match");

        playBtn.addEventListener("click", function () {
            introScreen.classList.add("fadeOut");
            matchScreen.classList.add("fadeIn");
        });
    }
    //Match
    function playMatch() {
        const winner = document.querySelector(".winner");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const options = document.querySelectorAll(".options button");
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(function (choice) {
            choice.addEventListener("click", function () {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                compare(this.textContent, computerChoice);

                playerHand.src = `/assets/${this.textContent}.png`;
                computerHand.src = `/assets/${computerChoice}.png`;
            });
        });

        //Score
        function updateScore() {
            const playerScore = document.querySelector(".player-score p");
            const computerScore = document.querySelector(".computer-score p");

            playerScore.textContent = pScore;
            computerScore.textContent = cScore;
        }

        //compare
        function compare(playerChoice, computerChoice) {
            if (playerChoice === computerChoice) {
                winner.textContent = "It is a tie";
                return;
            }
            if (playerChoice === "rock") {
                if (computerChoice === "paper") {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                }
            }
            if (playerChoice === "paper") {
                if (computerChoice === "scissors") {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                }
            }
            if (playerChoice === "scissors") {
                if (computerChoice === "paper") {
                    winner.textContent = "Player Wins";
                    pScore++;
                    updateScore();
                    return;
                } else {
                    winner.textContent = "Computer Wins";
                    cScore++;
                    updateScore();
                    return;
                }
            }
        }
    }

    startGame();
    playMatch();
}
game();
