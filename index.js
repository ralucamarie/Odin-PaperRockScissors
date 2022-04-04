//Event Listners

const displayResult = document.querySelector(".results");
pairs = {
  paper: "rock",
  rock: "scissors",
  scissors: "paper",
};
const playBtn = document.querySelector(".play-btn");
const score = document.querySelector(".score");
const humanScore = document.querySelector(".human-score");
const computerScore = document.querySelector(".computer-score");
const finalScore = document.querySelector(".final-score");
const alert = document.querySelector(".alert");
const finalAlert = document.querySelector(".final-alert");
// const finalScore = document.querySelector(".final-score");

const humanOptionButtons = document.querySelectorAll(".option");
const humanOptions = document.querySelector(".human-options");

let initialHumanScore = 0;
let initialComputerScore = 0;
let round = 0;
let finalHumanScore = 0;
let finalComputerScore = 0;

humanScore.innerHTML = `<p>Your score: ${initialHumanScore}</p>`;
computerScore.innerHTML = `<p>Computer score: ${initialComputerScore}</p>`;
finalScore.innerHTML = `No winner yet!`;

// playBtn.addEventListener("click", game);

humanOptionButtons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    if (playBtn.hasAttribute("disabled")) {
      const humanOption = e.currentTarget.dataset.id;
      const computerOption = computerPlay();
      displayAlert(playRound(computerOption, humanOption), "success");
      reloadScore();

      if (round === 5) {
        finalHumanScore = initialHumanScore;
        finalComputerScore = initialHumanScore;
        finalAlert.innerHTML = `Last game score - ${displayWinner(
          finalHumanScore,
          finalComputerScore
        )}`;
        finalScore.innerHTML = "Game Over!";
        resetGame();
        humanScore.innerHTML = ``;
        computerScore.innerHTML = ``;
        // reloadScore();
        playBtn.toggleAttribute("disabled");
      }
    } else displayAlert("Please click PLAY to start the game!", "danger");
  });
});

playBtn.addEventListener("click", function () {
  playBtn.toggleAttribute("disabled");
  resetGame();
});

function resetGame() {
  initialHumanScore = 0;
  initialComputerScore = 0;
  round = 0;
}

function computerPlay() {
  const options = ["paper", "rock", "scissors"];
  const random = Math.floor(Math.random() * options.length);
  return options[random];
}

function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  //remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

function reloadScore() {
  humanScore.innerHTML = `<p>Your score: ${initialHumanScore}</p>`;
  computerScore.innerHTML = `<p>Computer score: ${initialComputerScore}</p>`;
  finalScore.innerHTML = `Round ${round} of 5 / ${displayWinner(
    initialHumanScore,
    initialComputerScore
  )}`;
}

// function game() {
//   //   score.classList.toggle("show-score");

//   for (let i = 1; i <= 5; i++) {
//     round++;
//     humanOptionButtons.forEach(function (btn) {
//       btn.addEventListener("click", function (e) {
//         const humanOption = e.currentTarget.dataset.id;
//         const computerOption = computerPlay();
//         displayAlert(playRound(computerOption, humanOption), "success");
//         reloadScore();
//         // e.currentTarget.classList.toggle("option-selected");
//       });
//     });
//   }
//   resetGame();
//   reloadScore();
// }

// function resetGame() {
//   initialHumanScore = 0;
//   initialComputerScore = 0;
//   round = 0;
// }

// // functions;
// function computerPlay() {
//   const options = ["paper", "rock", "scissors"];
//   const random = Math.floor(Math.random() * options.length);
//   //   console.log(options[random]);
//   return options[random];
// }

// function humanPlay() {
//   humanOptionButtons.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       return e.currentTarget.dataset.id;
//     });
//   });
// }

function displayWinner(initialHumanScore, initialComputerScore) {
  if (initialHumanScore === initialComputerScore) {
    return `Equal score: ${initialHumanScore} : ${initialComputerScore}`;
  } else if (initialHumanScore > initialComputerScore) {
    return `You lead: ${initialHumanScore} : ${initialComputerScore}`;
  } else {
    return `Computer leads: ${initialComputerScore} : ${initialHumanScore}`;
  }
}

function playRound(computerSelection, humanSelection) {
  round++;
  if (computerSelection === humanSelection) {
    return `Nobody wins, you both selected ${humanSelection.toUpperCase()} `;
  } else if (pairs[humanSelection] === computerSelection) {
    initialHumanScore++;
    return `You win! The ${humanSelection.toUpperCase()} beats ${computerSelection.toUpperCase()}`;
  } else {
    initialComputerScore++;
    return `Computer wins! ${computerSelection.toUpperCase()} beats ${humanSelection.toUpperCase()}`;
  }
}

//   humanOptionButtons.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//       if (score.classList.contains("show-score")) {
//         // e.currentTarget.classList.toggle("option-selected");
//         const humanOption = e.currentTarget.dataset.id;
//         const computerOption = computerPlay();
//         displayAlert(playRound(computerOption, humanOption), "success");
//         reloadScore();
//         // e.currentTarget.classList.toggle("option-selected");
//         if (round === 5) {
//           //   alert.innerHTML = `Total rounds: 5. ${displayWinner(
//           //     initialHumanScore,
//           //     initialComputerScore
//           //   )}`;
//           //   alert.classList.add("success");
//           resetGame();
//         }
//       } else displayAlert("Please click PLAY to start the game!", "danger");
//     });
//   });
