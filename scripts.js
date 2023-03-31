

let quotelist = [["It's not the size of the dog in the fight, but the size of the fight in the dog.",'-Archie Griffen'],["Nothing lasts forever. Not even your troubles. ",'-Arnold H Glasgow'],
["There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle",'-Albert Einstein'],["Take chances, make mistakes. That's how you grow. Pain nourishes your courage. You have to fail in order to practice being brave.",'-Mary Tyler Moore'],
["Being strong means rejoicing in who you are, complete with imperfections.",'-Margaret Woodhouse'],["If you don’t go after what you want, you’ll never have it. If you don’t ask, the answer is always no. If you don’t step forward, you’re always in the same place.",'-Nora Roberts'],
["I've missed more than 9,000 shots in my career. I've lost almost 300 games. Twenty-six times I've been trusted to take the game-winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed. ",'-Michael Jordan'],["The only place you find success before work is in the dictionary.",'-May V Smith']]

let colorlist = []
function generateQuote(){
    let randomNumber = Math.floor(Math.random()*(quotelist.length));
    document.getElementById('quote-feild').innerHTML = quotelist[randomNumber][0]
    document.getElementById('author').innerHTML = quotelist[randomNumber][1]
}
