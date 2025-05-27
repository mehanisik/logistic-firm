"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2Icon } from "lucide-react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
       <motion.div
       className="z-50 h-screen w-screen flex items-center justify-center bg-black text-white"
       initial={{ opacity: 1 }}
       animate={{ opacity: 0 }}
       transition={{ delay: 2.5, duration: 1 }}
       onAnimationComplete={() => setShow(false)}
     >
       <motion.svg
         width="150"
         height="150"
         viewBox="0 0 100 100"
         initial={{ scale: 0 }}
         animate={{ scale: 1, rotate: 360 }}
         transition={{ duration: 2 }}
       >
         <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="5" fill="transparent" />
         <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="20">
           MEHA
         </text>
       </motion.svg>
     </motion.div>
      )}
    </AnimatePresence>
  );
} 