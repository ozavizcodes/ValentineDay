import './App.css'
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";
import LoveQuotes from "./LoveQuotes";

const hearts = Array.from({ length: 20 });

function App() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-red-400 to-purple-600 text-white p-6 relative overflow-hidden">

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

      {/* Valentine's Day Message */}
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg mt-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        ❤️ Happy Valentine's Day ❤️
      </motion.h1>

      {/* Countdown Timer & Love Quotes */}
      {/* <CountdownTimer />
      <LoveQuotes /> */}
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

// import CountdownTimer from './CountdownTimer'
// import LoveQuotes from './LoveQuotes'
// import { motion } from "framer-motion";


// function App() {

//   return (
//     <div className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-red-300 to-purple-600 text-white p-6 overflow-hidden">

//       {/* Floating Hearts Animation */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute text-red-400 text-3xl"
//             initial={{ opacity: 0, y: 0, x: Math.random() * 100 - 50 }}
//             animate={{
//               opacity: [0, 1, 1, 0],
//               y: [50, -300],
//               x: [Math.random() * 200 - 100, Math.random() * 200 - 100]
//             }}
//             transition={{
//               duration: 6 + Math.random() * 3,
//               repeat: Infinity,
//               delay: Math.random() * 3
//             }}
//             style={{ left: `${Math.random() * 100}%` }}
//           >
//             ❤️
//           </motion.div>
//         ))}
//       </div>

//       {/* Valentine's Day Title */}
//       <motion.h1
//         className="text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-pink-400 via-red-500 to-purple-600 text-transparent bg-clip-text drop-shadow-lg mt-6"
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//       >
//         ❤️ Happy Valentine's Day ❤️
//       </motion.h1>

//       {/* Countdown Timer & Love Quotes */}
//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, delay: 0.5 }}
//       >
//         <CountdownTimer />
//         <LoveQuotes />
//       </motion.div>

//     </div>
//   );
// }

// export default App
