import './App.css'
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import LoveQuotes from "./LoveQuotes";

const hearts = Array.from({ length: 15 });

const isValentinesDay = new Date().getMonth() === 1 && new Date().getDate() === 14;

console.log("isValentinesDay", isValentinesDay)


function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center
      bg-gradient-to-r from-pink-400 via-rose-200 to-purple-400 text-white p-6 
     relative overflow-hidden">

      {/* Floating Hearts Animation */}
      {hearts.map((_, index) => (
        <motion.div
          key={index}
          className="absolute text-red-500 text-3xl"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{ y: "-10vh", opacity: 1 }}
          transition={{
            duration: Math.random() * 4 + 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: Math.random() * 3,
          }}
          style={{
            left: `${Math.random() * 100}vw`,
          }}
        >
          ❤️
        </motion.div>
      ))}


      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <CountdownTimer />
        <LoveQuotes />
      </motion.div>
    </div>
  );
}

export default App;
