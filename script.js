const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", checkSubmittedWord)

function getSubmittedWord() {
    const letterOne = document.getElementById("letterOne").value;
    const letterTwo = document.getElementById("letterTwo").value;
    const letterThree = document.getElementById("letterThree").value;
    const letterFour = document.getElementById("letterFour").value;
    const letterFive = document.getElementById("letterFive").value;
    const submittedWord = letterOne + letterTwo + letterThree + letterFour + letterFive
    const textInputs = document.querySelectorAll("input.letter")
    for (let i = 0; i < textInputs.length; i++) {
        textInputs[i].value = ""        
    }
    return submittedWord
}

function animateMessage(message) {
    message.style.display = "block";
    setTimeout(() => {
        message.style.display = "none";
      }, 1000);
}

function displayMessage(boolean) {
    const wordCheckTrue = document.getElementById("wordCheckTrue");
    const wordCheckFalse = document.getElementById("wordCheckFalse");
    if(boolean === true) {
        animateMessage(wordCheckTrue);
    }
    else {
        animateMessage(wordCheckFalse);
        const letters = document.getElementsByClassName("letter");
        for (let i = 0; i < letters.length; i++) {
            letters[i].classList.add("wrong-word");
        }
        setTimeout(() => {
            for (let i = 0; i < letters.length; i++) {
                letters[i].classList.remove("wrong-word");
            }
          }, 1000);
    }
}

async function checkSubmittedWord(event) {
    event.preventDefault();
    const word = getSubmittedWord();
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        if (data.title === "No Definitions Found" || word.length !== 5) {
            displayMessage(false)
        }
        else {
        displayMessage(true)
        }
    }
    catch(error) {
        console.log(error);
    }
}