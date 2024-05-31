import { useState, useEffect } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/intro.jpg";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const titles = [
  "Full Stack Developer",
  "Front End Developer",
  "Back End Developer",
  "Software Developer",
];

const Hero = () => {
  const [currentTitle, setCurrentTitle] = useState(titles[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const changeTitle = () => {
      setIndex((prevIndex) => (prevIndex + 1) % titles.length);
    };

    const intervalId = setInterval(changeTitle, 2000); // Change title every 2 seconds

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    setCurrentTitle(titles[index]);
  }, [index]);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h2
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Akhila Mora
            </motion.h2>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              {currentTitle}
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
              style={{ textAlign: "justify" }}
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.a
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              href="/resume.pdf"
              download="Akhila Mora.pdf"
              className="mt-4 mb-4 inline-block rounded bg-indigo-500 px-6 py-3 text-white"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="profilepic"
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
