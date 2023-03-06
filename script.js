const submitButton = document.getElementById("submit")
submitButton.addEventListener("click", checkSubmittedWord)

function getSubmittedWord(event) {
    event.preventDefault()
    const input = document.getElementById("word")
    const submittedWord = input.value
    input.value =  ""
    return submittedWord
}

