import React from "react";
import Orb from "./Orb";
import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";
import Timeline from "./Timeline";
const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const AboutHero = () => {
  const title = "Secure, Reliable, Scalable.";
  return (
    <div>
      <div className="bg-black w-full h-[100vh] relative">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
      <div className="absolute left-2 md:left-20 top-1/2 transform -translate-y-1/2 text-white max-w-3xl">
        <motion.div className="text-2xl md:text-6xl font-bold leading-tight flex space-x-1">
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.div>
        <GradientText
          colors={["#00f5a0", "#00d9f5", "#00f5a0", "#00d9f5", "#00f5a0"]}
          animationSpeed={10}
          showBorder={false}
          className="text-3xl md:text-5xl font-extrabold mt-4 leading-snug"
        >
          For over 10 years, we've delivered robust and secure infosystem
          solutions.
        </GradientText>
      </div>
    </div>
  );
};

export default AboutHero;
