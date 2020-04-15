const quotes = [
    {
        quote: "People say nothing is impossible, but I do nothing every day.",
        name: "A.A. Milne"
    },{
        quote: "Better to remain silent and be thought a fool than to speak out and remove all doubt.",
        name: "Abraham Lincoln"
    },{
        quote: "Light travels faster than sound. This is why some people appear bright until you hear them speak",
        name: "Alan Dundes"
    },{
        quote: "The difference between stupidity and genius is that genius has its limits",
        name: "Albert Einstein"
    },{
        quote: "But the fact that some geniuses were laughed at does not imply that all who are laughed at are geniuses. They laughed at Columbus, they laughed at Fulton, they laughed at the Wright Brothers. But they also laughed at Bozo the Clown.",
        name: "Carl Sagan"
    },{
        quote: "He who laughs last didn’t get the joke",
        name: "Charles de Gaulle"
    },{
        quote: "Do not take life too seriously. You will never get out of it alive.",
        name: "Emo Philips"
    },{
        quote: "A computer once beat me at chess, but it was no match for me at kick boxing..",
        name: "Alan Turing, Mathematician and Computer Scientist"
    },{
        quote: "You tried your best and you failed miserably. The lesson is ‘never try'.",
        name: "Homer Simpson"
    },{
        quote: "We are all here on earth to help others. What on earth the others are here for I don’t know.",
        name: "W. H. Auden"
]


function randomNumber(){
    return Math.floor(Math.random() * 10)
}



function generateRandomQuote(){    
    let randomQuote = quotes[randomNumber()];
    return '<p class="quote">' + randomQuote.quote + '</p><p class="name">' + randomQuote.name + '</p>';
}


$(".generate-quote").on("click", function () {
    $('#quote').html(generateRandomQuote())
});