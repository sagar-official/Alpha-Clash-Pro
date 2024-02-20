// function playNow() {
//   const hideElement = document.getElementById("home");
//   hideElement.classList.add("hidden");

//   const showElement = document.getElementById("play-ground");
//   showElement.classList.remove("hidden");
// }

//------------------- OR ----------------------
function handleKeyboardKeyUpEvent(event) {
  const playerPress = event.key;

  if (playerPress === "Escape") {
    gameOver();
  }
  //get the excepted to press
  const currentAlphabetElement = document.getElementById("current-word");
  const currentAlphabet = currentAlphabetElement.innerText;
  const exceptedAlphabet = currentAlphabet.toLocaleLowerCase();
  console.log(playerPress, exceptedAlphabet);

  // chack the alphabets
  if (playerPress === exceptedAlphabet) {
    console.log("you  get a point ");
    const currentScore = getTextElementValueById("current-score");
    const updatedScore = currentScore + 1;
    setTextElementValueById("current-score", updatedScore);
    //------------------------------------------------------------
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScoreText);

    // const newScore = currentScore + 1;

    // currentScoreElement.innerText = newScore;

    removeBackgroundColorById(exceptedAlphabet);
    continueGame();
  } else {
    console.log("you loss the point");
    const currentLife = getTextElementValueById("current-life");
    const updatedLife = currentLife - 1;
    setTextElementValueById("current-life", updatedLife);

    //-------------------------------------------------
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currenLife = parseInt(currentLifeText);

    // const newLife = currenLife - 1;

    // currentLifeElement.innerText = newLife;
    if (updatedLife === 0) {
      gameOver();
    }
  }
}

document.addEventListener("keyup", handleKeyboardKeyUpEvent);

function continueGame() {
  const alphabet = getARendomAlphabet();
  // console.log(alphabet);

  const currentWord = document.getElementById("current-word");
  currentWord.innerText = alphabet;

  //set background color of the current word
  setBackgroundColorById(alphabet);
}

function playNow() {
  //hide everything show only the playground
  hideElementById("home");
  hideElementById("final-score");
  showElementById("play-ground");
  // reset score and life
  setTextElementValueById("current-life", 5);
  setTextElementValueById("current-score", 0);

  continueGame();
}

function gameOver() {
  hideElementById("play-ground");
  showElementById("final-score");

  const lastScore = getTextElementValueById("current-score");
  console.log(lastScore);
  setTextElementValueById("last-score", lastScore);

  const currentAlphabet = getElementTextById("current-word");
  // console.log(currentAlphabet);
  removeBackgroundColorById(currentAlphabet);
}
