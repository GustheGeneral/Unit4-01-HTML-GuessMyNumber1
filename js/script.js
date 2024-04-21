// Generate a random number between 1 and 6
const randomNumber = Math.floor(Math.random() * 6) + 1;

function checkGuess() {
    // Get the user's guess from the input field
    const guessElement = document.getElementById("guess");
    const guess = parseInt(guessElement.value);

    // Get the result display element
    const resultElement = document.getElementById("result");

    // Check if the guess is valid
    if (guess >= 1 && guess <= 6) {
        if (guess === randomNumber) {
            resultElement.textContent = "Congratulations! You guessed the correct number: " + randomNumber;
        } else {
            resultElement.textContent = "Sorry, the correct number was: " + randomNumber + ". Try again!";
        }
    } else {
        resultElement.textContent = "Please enter a number between 1 and 6.";
    }

    // Clear the input field after checking the guess
    userGuessElement.value = "";
}
