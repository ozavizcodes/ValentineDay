import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";

import loveStoryMusic from "/public/love-story-music.mp3";


const CountdownTimer = () => {
    //set the target date as feb 14 for valentines day;
    const valentineDay = new Date("February 14, 2025 00:00:00").getTime();

    //calculate the time left between now and valentine day;
    function calculateTimeLeft() {
        const now = new Date().getTime();

        const difference = valentineDay - now;

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };

    }

    //store the values for countdown in state;
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isValentinesDay, setIsValentinesDay] = useState(false);
    const [showConfetti, setShowConfetti] = useState(false);
    const [audio] = useState(new Audio(loveStoryMusic));

    useEffect(() => {

        const timer = setInterval(() => {
            const newTimeLeft = calculateTimeLeft();
            setTimeLeft(newTimeLeft);

            if (newTimeLeft.days === 0 && newTimeLeft.hours === 0 && newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
                setIsValentinesDay(true);
                setShowConfetti(true);
                playRomanticMusic();
            }
        }, 1000)

        return () => clearInterval(timer);
    }, [])


    const playRomanticMusic = () => {
        audio.loop = true; // Loop music
        audio.play().catch((error) => console.log("Music playback error:", error));
    };

    /// btn to test effects
    const testValentineEvent = () => {
        setIsValentinesDay(true);
        setShowConfetti(true);
        playRomanticMusic();
    };


    // return (
    //     <div className="flex flex-col items-center justify-center text-white text-center p-4 relative">
    //         {/* {showConfetti && <Confetti numberOfPieces={500} />} */}
    //         {showConfetti && (
    //             <div className="fixed inset-0 pointer-events-none">
    //                 <Confetti
    //                     numberOfPieces={500}
    //                     width={window.innerWidth}
    //                     height={window.innerHeight}
    //                 />
    //             </div>
    //         )}
    //         {isValentinesDay ? (
    //             <motion.div
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 1.5 }}
    //                 className="text-center"
    //             >
    //                 {/* {showConfetti && <Confetti numberOfPieces={500} />} */}
    //                 <h1 className="text-4xl md:text-5xl font-extrabold text-pink-300 neon-text glow">
    //                     💖 Happy Valentine's Day! 💖
    //                 </h1>
    //                 <p className="text-lg mt-4 italic max-w-2xl mx-auto" >Love comes in many forms — through friendship, laughter, and the special bond we share. 💖
    //                     Today, I celebrate you as i do always. You make my world brighter, and I’m grateful for you every day! ❤️  </p>
    //             </motion.div>
    //         ) : (
    //             <>
    //                 <motion.h1
    //                     className="text-4xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-red-700 to-purple-400 text-transparent bg-clip-text drop-shadow-lg mt-6 mb-2"
    //                     initial={{ opacity: 0, scale: 0.8 }}
    //                     animate={{ opacity: 1, scale: 1 }}
    //                     transition={{ duration: 1 }}
    //                 >
    //                     💖 Valentine is coming 💖
    //                 </motion.h1>

    //                 <motion.h2
    //                     className="text-l font-semibold mb-4 neon-text italic"
    //                     initial={{ opacity: 0, y: -10 }}
    //                     animate={{ opacity: 1, y: 0 }}
    //                     transition={{ duration: 1 }}
    //                 >
    //                     💘 Just a few more days until love takes over! 💘
    //                 </motion.h2>

    //                 <div className="flex space-x-4 text-lg font-bold">
    //                     {Object.entries(timeLeft).map(([unit, value], i) => (
    //                         <motion.div
    //                             key={unit}
    //                             className="p-4 w-20 h-20 flex flex-col items-center justify-center bg-pink-600 rounded-lg shadow-xl border-2 border-white text-lg md:text-xl pulse-animation"
    //                             initial={{ scale: 0.8, opacity: 0 }}
    //                             animate={{ scale: 1, opacity: 1 }}
    //                             transition={{ duration: 0.5, delay: i * 0.2 }}
    //                         >
    //                             <p className="text-4xl font-bold">{value}</p>
    //                             <span className="text-sm">{unit.toUpperCase()}</span>
    //                         </motion.div>
    //                     ))}
    //                 </div>
    //                 {/* <button
    //                     onClick={testValentineEvent}
    //                     className="mt-6 bg-red-500 px-4 py-2 rounded-full shadow-lg font-bold text-white hover:bg-red-600 transition"
    //                 >
    //                     🎉 Test Valentine’s Event
    //                 </button> */}
    //                 <div className="absolute top-16 left-10 animate-float">💖</div>
    //                 <div className="absolute top-20 right-16 animate-float">💘</div>
    //                 <div className="absolute bottom-10 left-14 animate-float">❤️</div>
    //                 <div className="absolute bottom-12 right-10 animate-float">💕</div>
    //             </>
    //         )}
    //     </div>
    // );

    return (
        <div className="flex flex-col items-center justify-center text-white text-center p-2 md:p-4 relative">
            {showConfetti && (
                <div className="fixed inset-0 pointer-events-none">
                    <Confetti numberOfPieces={500} width={window.innerWidth} height={window.innerHeight} />
                </div>
            )}
            {isValentinesDay ? (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                    className="text-center"
                >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-pink-300 neon-text glow">
                        💖 Happy Valentine's Day! 💖
                    </h1>

                    <p className="text-base md:text-lg mt-3 italic max-w-lg mx-auto">
                        Love comes in many forms — through friendship, laughter, and the special bond we share. 💖
                        Today, I celebrate you as I always do. You make my world brighter, and I’m grateful for you every day! ❤️
                    </p>
                </motion.div>
            ) : (
                <>
                    <motion.h1
                        className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-red-700 to-purple-400 text-transparent bg-clip-text drop-shadow-lg mt-4 mb-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                    >
                        💖 Valentine is coming 💖
                    </motion.h1>

                    <motion.h2
                        className="text-sm md:text-base lg:text-lg  font-semibold mb-3 neon-text italic"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                    >
                        💘 Just a few more days until love takes over! 💘
                    </motion.h2>

                    <div className="flex space-x-2 md:space-x-4 text-sm md:text-lg font-bold">
                        {Object.entries(timeLeft).map(([unit, value], i) => (
                            <motion.div
                                key={unit}
                                className="p-3 md:p-4 w-16 md:w-20 h-16 md:h-20 flex flex-col items-center justify-center bg-pink-600 rounded-lg shadow-xl border-2 border-white text-base md:text-xl pulse-animation"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, delay: i * 0.2 }}
                            >
                                <p className="text-2xl md:text-4xl font-bold">{value}</p>
                                <span className="text-xs md:text-sm">{unit.toUpperCase()}</span>
                            </motion.div>
                        ))}
                    </div>

                    <button
                        onClick={testValentineEvent}
                        className="mt-6 bg-red-500 px-4 py-2 rounded-full shadow-lg font-bold text-white hover:bg-red-600 transition"
                    >
                        🎉 Test Valentine’s Event
                    </button>

                    <div className="absolute top-16 left-10 animate-float text-sm md:text-lg">💖</div>
                    <div className="absolute top-20 right-16 animate-float text-sm md:text-lg">💘</div>
                    <div className="absolute bottom-10 left-14 animate-float text-sm md:text-lg">❤️</div>
                    <div className="absolute bottom-12 right-10 animate-float text-sm md:text-lg">💕</div>
                </>
            )}
        </div>
    );

}
export default CountdownTimer;