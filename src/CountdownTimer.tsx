import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

    //update the countdown evry second with a useeffect
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);

    }, [])

    return (
        <div className="flex flex-col items-center justify-center text-white text-center p-4">
            {/* <h2 className="text-2xl font-semibold mb-2">Countdown to Valentine</h2> */}
            <motion.h2
                className="text-1xl font-semibold mb-4 neon-text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Countdown to Valentine's Day 💖
            </motion.h2>
            <div className="flex space-x-4 text-lg font-bold">
                <div className="p-4 bg-pink-600 rounded-lg shadow-lg">{timeLeft.days} <span>Days</span></div>
                <div className="p-4 bg-pink-600 rounded-lg shadow-lg">{timeLeft.hours} <span>hours</span></div>
                <div className="p-4 bg-pink-600 rounded-lg shadow-lg">{timeLeft.minutes} <span>minutes</span></div>
                <div className="p-4 bg-pink-600 rounded-lg shadow-lg">{timeLeft.seconds} <span>seconds</span></div>

            </div>
        </div>
    );





}
export default CountdownTimer;