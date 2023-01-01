const inputs = document.querySelector(".inputs"),
    resetBtn = document.querySelector(".reset-Btn"),
    hint = document.querySelectorAll(".hint span"),
    typingInput = document.querySelectorAll(".typing-input");

let word;

const wordList = [{
        word: "Python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "linux",
        hint: "open source os"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "serves other computers"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a small image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "india",
        hint: "a democratic and religious country"
    }

];

function randomword() {
    // getting random object from wordlist
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word; // getting word of random object
    console.log(word);

    hint.innerText = ranObj.hint;

    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomword();

function initGame(e) {
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/)) {
        console.log(key);
        if (word.includes(key)) { // if user letter found in the word
            console.log("letter found")
        } else {
            console.log("letter not found")
        }

    }
}

resetBtn.addEventListener("click", randomword);
typingInput.addEventListener("input", () => initGame);
document.addEventListener("keydown", () => typingInput.focus());