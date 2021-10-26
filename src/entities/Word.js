var marvelCharacters = [
    "ironman",
    "captainamerica",
    "thor",
    "hulk",
    "blackwidow",
    "spiderman",
    "captainmarvel",
    "scarletwitch",
    "vision",
    "antman",
    "starlord",
    "gamora",
    "doctorstrange",
    "loki",
    "thanos",
    "groot",
    "blackpanther",
    "falcon",
    "warmachine",
    "deadpool"
]

function randomWord(){
    return marvelCharacters[Math.floor(Math.random() * marvelCharacters.length)]
}

export {randomWord}