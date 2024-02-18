// let firstCard = 5,
//     secondCard = 11,
//     sum = firstCard + secondCard;
// // console.log(sum)
// if (sum < 21) {
//     console("Do you want to draw a new card")
// } else if (sum === 21) {
//     console.log("You're got blackjack!")
// } else {
//     console.log("You're out of game!")
// }

// let age = 22;
// if (age <= 20) {
//     console.log(`Welcome!`)
// }
// else {
//     console.log(`You are not allowed!`)
// }

// let age = 100;
// if (age < 100) {
//     console.log(`you're not elegible `)
// } else if (age === 100) {
//     console.log(`here is your birthday card from king!`)
// }
// else {
//     console.log(`You already have gotten one`)
// }
// let myExperience = ['software development', 'frontend development', 'nothing']
// let self = ['software development', 2, true]
// console.log(myExperience[0])
// console.log(myExperience[1])
// console.log(myExperience[2])
// let messages = [
//     "Hey, how's it going?",
//     "I'm great, How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop()
// console.log(messages)

// for (let count = 1; count < 11; count++) {
//     console.log(count)
// }
// for (let count = 10; count < 101; count++) {
//     console.log(count)
// }

// let num = [7, 3, 9]
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }

// let sentence = ["Hello", "my", "name", "is", "Per"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i = 0; i < sentence.length; i++) {
//     greetingEl.textContent += sentence[i] + ' ';
//     console.log(sentence[i]);
// }
// let raceTime1 = 4;
// let raceTime2 = 3;
// function getRaceTime() {
//     return raceTime1 + raceTime2
// }
// let totalRaceTime = getRaceTime()
// console.log(totalRaceTime)
// let randomNumber = Math.floor(Math.random() * 7) // Math.floor(Math.random() * 6) + 1
// console.log(randomNumber)
// function rollDice() {
//     return Math.floor(Math.random() * 6) + 1
// }
// let rdm = rollDice()
// console.log(rdm)

// let hasSolvedChallenge = false,
//     hasHintsLeft = false;
// if (hasSolvedChallenge === false && hasHintsLeft === false) {
//     showSolution();
// }
// function showSolution() {
//     console.log("Showing the Solution....")
// }
// let likeDocumentaries = false,
//     likeStartups = true;
// if (likeDocumentaries === false || likeStartups === true) {
//     recommendMovies();
// }
// function recommendMovies() {
//     console.log("hey, check out this new film!")
// }
// let airBnB = {
//     isHomeAvailabe: true,
//     address: [' street99', ' NewYork', 22],
//     cont: 123143242,
// }
// console.log(airBnB.address, airBnB.cont)


// let Person = {
//     name: 'User',
//     age: 23,
//     country: "Pakistan"
// }
// function logData() {
//     console.log(`${Person.name} is ${Person.age} years old and lives in ${Person.country}`)
// }
// logData();

// let age = 67;
// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child Discount")
// } else if (age < 27) {
//     console.log("Student Discount")
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen Discount ")
// }

// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// for (let i = 0; i < 5; i++) {
//     console.log(largeCountries[i]);
// }
// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]
// largeCountries.shift()
// // largeCountries.shift("Monaco")
// largeCountries.unshift("China")
// console.log(largeCountries)
// largeCountries.pop()
// console.log(largeCountries)
// largeCountries.push("Pakistan")
// console.log(largeCountries)

// let dayOfMonth = 31,
//     weekDay = "Friday";

// if (dayOfMonth === 31 && weekDay === "Friday") {
//     console.log("Spooky Face")
// }

let hands = ["rock", "paper", "scissor"]
function getHand() {

    let mhand = Math.floor(Math.random() * 3);
    // console.log(mhand)
    return hands[mhand]
}

console.log(getHand())





let player = {
    name: 'User',
    chips: 100
}
let playerEl = document.getElementById('player-el')
playerEl.textContent = player.name + ": $" + player.chips;

let fCard,
    sCard,
    sum = 0,
    cards = [],
    hasBlackJack = false,
    isAlive = false,
    message = "",
    messageEl = document.getElementById("message-el"),
    sumEl = document.getElementById("sum-el"),
    cardEl = document.getElementById("card-el");


function getRandomCard() {
    let mRandom = Math.floor(Math.random() * 13) + 1;

    if (mRandom === 1) {
        return 11;
    } else if (mRandom > 10) {
        return 10;
    } else {
        return mRandom;
    }
}

function renderGame() {
    if (sum <= 20) {
        message = `Do you want to draw a new card?`
    } else if (sum === 21) {
        message = `You got BlackJack!`
        hasBlackJack = true;
    }
    else {
        message = `You're out of game!`
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = 'Sum: ' + sum;
    cardEl.textContent = 'Cards: ';
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' ';
    }
}

function startGame() {
    isAlive = true;
    fCard = getRandomCard();
    sCard = getRandomCard();
    cards = [fCard, sCard]
    sum = fCard + sCard;
    // return sum
    // console.log(sum)
    renderGame();
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        thirdCard = getRandomCard()
        sum += thirdCard;
        // console.log("drawing new card")
        cards.push(thirdCard);
        renderGame();
    }
    // console.log(cards)
}
