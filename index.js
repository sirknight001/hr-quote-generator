const btn = document.getElementById("new-quote")
const qtn = document.getElementById("quote")
const ath = document.getElementById("author")
const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
]
const quotes = [
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        author: "Albus Dumbledore"
    },
    {
        quote: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.",
        author: "Hermione Granger"
    },
    {
        quote: "You're a little scary sometimes, you know that? Brilliant... but scary.",
        author: "Ron Weasley"
    },
    {
        quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        author: "Albus Dumbledore"
    },
    {
        quote: "The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.",
        author: "Albus Dumbledore"
    },
    {
        quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
        author: "Albus Dumbledore"
    },
    {
        quote: "I’ll be in my bedroom, making no noise and pretending I’m not there.",
        author: "Harry Potter"
    },
    {
        quote: "It is impossible to manufacture or imitate love.",
        author: "Horace Slughorn"
    },
    {
        quote: "Being different isn't a bad thing. I mean that you are brave enough to be yourself.",
        author: "Luna Lovegood"
    },
    {
        quote: "If you want to know what a man’s like, take a good look at how he treats his inferiors, not his equals.",
        author: "Sirius Black"
    },
    {
        quote: "Never trust anything that can think for itself if you can’t see where it keeps its brain.",
        author: "Arthur Weasley"
    },
    {
        quote: "Every human life is worth the same, and worth saving.",
        author: "Kingsley Shacklebolt"
    },
    {
        quote: "Happiness can be found even in the darkest of times if one only remembers to turn on the light.",
        author: "Albus Dumbledore"
    },
    {
        quote: "Socks are Dobby’s favorite, favorite clothes, sir!",
        author: "Dobby"
    },
    {
        quote: "Fame is a fickle friend, Harry. Celebrity is as celebrity does. Remember that.",
        author: "Gilderoy Lockhart"
    }
]

const newQuote = () => {
    const randomColor = Math.floor(Math.random()*colors.length)
    const randomColorGen = colors[randomColor]
    document.body.style.backgroundColor = randomColorGen
    newText()
}

btn.addEventListener('click', newQuote)

const newText = () => {
    const randomText = Math.floor(Math.random()*quotes.length)
    qtn.innerText = quotes[randomText].quote
    ath.innerText = quotes[randomText].author
}