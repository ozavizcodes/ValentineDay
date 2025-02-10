import { useState } from "react";

// some example love quotes or use external api;
const loveQuotes = [
    "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.",
    "You are my today and all of my tomorrows.",
    "In your smile, I see something more beautiful than the stars.",
    "Every love story is beautiful, but ours is my favorite.",
    "You are the source of my joy, the center of my world, and the whole of my heart.",
    "I love you more than words can express, more than actions can show, and more than life itself.",
    "The best thing to hold onto in life is each other.",
    "You are my sun, my moon, and all of my stars.",
    "I fell in love with you not for how you look, but for who you are.",
    "With you, every moment is a beautiful adventure.",
    "Love is not finding someone to live with. It’s finding someone you can’t live without.",
    "You are my heart, my life, my one and only thought.",
    "I could never say how much I like you and just how special you are to me.",
    "The best love is the kind that awakens the soul and makes us reach for more.",
    "I would rather spend one lifetime with you than face all the ages of this world alone.",
    "You are my paradise, and I would happily get lost in you forever.",
    "The moment I met you, my heart whispered, 'That’s the one.'",
    "When I look into your eyes, I know I have found the mirror of my soul.",
    "You make my heart smile in ways I never thought possible.",
    "I love you not because of who you are, but because of who I am when I am with you.",
    "Every time I see you, I fall in love all over again.",
    "Your love is like the wind, I can't see it, but I can feel it.",
    "If I know what love is, it is because of you.",
    "I want all of my lasts to be with you.",
    "No matter what happens, where we are, or what we do, I will always love you.",
    "A hundred hearts would be too few to carry all my love for you.",
    "You are the most beautiful thing I keep inside my heart.",
    "You are my dream come true, my love at first sight, and my forever.",
    "My love for you is a journey, starting at forever and ending at never.",
    "You are the missing piece I’ve been trying to find.",
    "I love you, not only for what you are but for what I am when I am with you.",
    "You are the best thing that has ever been mine.",
    "To love and be loved is to feel the sun from both sides.",
    "I have found the one whom my soul loves.",
    "Loving you was never an option. It was a necessity.",
    "You are the poem I never knew how to write and this life is the story I have always wanted to tell.",
    "If kisses were snowflakes, I’d send you a blizzard.",
    "I am in you and you in me, mutual in divine love.",
    "I swear I couldn’t love you more than I do right now, and yet I know I will tomorrow.",
    "Your love shines in my heart as the sun shines upon the earth.",
    "You are the reason I believe in love.",
    "Love is when the other person's happiness is more important than your own.",
    "I love you, and I will love you until I die, and if there is a life after that, I’ll love you then.",
    "You’re my favorite place to go to when my mind searches for peace.",
    "Love doesn’t make the world go round. Love is what makes the ride worthwhile.",
    "I love you, not only for what you have made of yourself, but for what you are making of me.",
    "You are the one I’ve been waiting for my whole life.",
    "You are the reason my heart beats a little faster every day.",
    "Being deeply loved by someone gives you strength while loving someone deeply gives you courage.",
];

const LoveQuotes = () => {
    //set the index for the current value
    const [index, setIndex] = useState(0);

    //fnx to move to the next quote
    const nextQuote = () => {
        setIndex((prevIndex) => (prevIndex + 1) % loveQuotes.length);
    };

    return (
        <div className="flex flex-col items-center justify-center text-white text-center p-4">
            <p className="text-lg italic bg-pink-700 p-4 rounded-lg shadow-lg">{loveQuotes[index]}</p>
            <button onClick={nextQuote} className="mt-4 px-4 py-2 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 transition">Next </button>

        </div>
    )



}
export default LoveQuotes;