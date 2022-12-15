let tryButton = document.querySelector(".screen1 button")
let playAgainButton = document.querySelector(".screen2 button")
let numberInput = document.querySelector(".screen1 input")
let screenOne = document.querySelector(".screen1")
let screenTwo = document.querySelector(".screen2")
let screenTwoText = document.querySelector(".screen2 h1")

let randomNumber = Math.round((Math.random() * 10))

let attempts = 0;

tryButton.onclick = (event) => {
    event.preventDefault()
    if(Number(numberInput.value) > -1 && Number(numberInput.value < 11)) {
        attempts++
        if(Number(numberInput.value) === randomNumber) {
            screenOne.classList.add("hide")
            screenTwo.classList.remove("hide")
            screenTwoText.innerText = `Acertou em ${attempts} tentativas!`
        }
        numberInput.value = ""
    } else {
        alert("Número inválido!! Insira um Número de 0 a 10!!")
        numberInput.value = ""
    }
}

playAgainButton.onclick = () => {
    document.location.reload(true)
}