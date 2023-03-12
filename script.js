const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", checkSubmittedWord)

function getSubmittedWord() {
    const input = document.getElementById("word");
    const submittedWord = input.value;
    input.value =  "";
    return submittedWord
}

async function checkSubmittedWord(event) {
    event.preventDefault();
    const word = getSubmittedWord();
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        const data = await response.json();
        if (data.title === "No Definitions Found") {
            console.log("false - no definition found")  
            return false;
        
        }
        if (word.length !== 5) {
            console.log("false - word length not 5")
            return false;
        }
        console.log("true")
        return true;
    }
    catch(error) {
        console.log(error);
    }
}