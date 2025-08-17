let btn= document.querySelector('#new-quote');
let quote= document.querySelector('.quote');
let person=document.querySelector('.person')

const quotes = [{
    quote: '"You only live once, but if you do it right, once is enough."' , 
    person: 'Mae West'
}, {
    quote: '"In three words I can sum up everything I\'ve learned about life: it goes on."' , 
    person: 'Robert Frost'
} , {
    quote: '"I\'ve learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."' , 
    person: 'Maya Angelou'
} , {
    quote: '"Always forgive your enemies; nothing annoys them so much."' , 
    person: 'Oscar Wilde'
} , {
    quote: '"I am so clever that sometimes I don\'t understand a single word of what I am saying."' , 
    person: 'Oscar Wilde'
} , {
    quote: '"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."' , 
    person: ' Ralph Waldo Emerson'
} , {
    quote: '"Insanity is doing the same thing, over and over again, but expecting different results."' , 
    person: 'Narcotics Anonymous'
} , {
    quote: '"I may not have gone where I intended to go, but I think I have ended up where I needed to be."' , 
    person: 'Douglas Adams'
} , {
    quote: '"Today you are You, that is truer than true. There is no one alive who is Youer than You."' , 
    person: 'Dr. Seuss'
} , {
    quote: '"Reality continues to ruin my life."' , 
    person: 'Bill Watterson'
} , {
    quote: '"All that glitters is not gold."' , 
    person: 'William Shakespeare'
} , {
    quote: '"Hell has no fury like a woman scorned."' , 
    person: 'William Congreve'
} , {
    quote: '"Hell is other people."' , 
    person: 'Jean-Paul Sartre'
} , {
    quote: '"If you want something said, ask a man; if you want something done, ask a woman."', 
    person: 'Margaret Thatcher'
} , {
    quote: '"No one can make you feel inferior without your consent."' , 
    person: 'Eleanor Roosevelt'
}];

btn.addEventListener('click',function(){
    let random= Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}) 

