const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", checkSubmittedWord)

function getSubmittedWord() {
    const input = document.getElementById("word")
    const submittedWord = input.value
    input.value =  ""
    return submittedWord
}

async function checkSubmittedWord(event) {
    event.preventDefault()
    const word = getSubmittedWord()
    try {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    catch(error) {
        console.log(error);
        window.alert("This is not a real word!");
    }
}