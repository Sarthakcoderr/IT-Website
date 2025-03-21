import Particles from "./Particles";
import { motion } from "framer-motion";
import ShinyText from "./ShinyText";
import GradientText from "./GradientText";
import ClickSpark from './ClickSpark';

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

const HeroSection = () => {
  const title = "Dayal Infosystems"; // Text to animate

  return (
    
    <div className="relative w-full h-screen bg-black">
        <ClickSpark
  sparkColor='#999494'
  sparkSize={20}
  sparkRadius={40}
  sparkCount={14}
  duration={1200}
>
      {/* Particle Background */}
      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={1000}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Hero Content */}
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
          Transforming Ideas into Digital Excellence
        </GradientText>
        {/* <motion.h2
          className="text-4xl md:text-6xl font-extrabold mt-4 leading-snug"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Transforming Ideas into Digital Excellence
        </motion.h2> */}

        {/* <motion.p
          className="text-lg md:text-xl mt-6 leading-relaxed opacity-80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Empowering businesses with cutting-edge IT solutions, custom software, and innovative digital experiences.
        </motion.p> */}
        <ShinyText
          text="Empowering businesses with cutting-edge IT solutions, custom software, and innovative digital experiences."
          disabled={false}
          speed={4}
          className="custom-class text-md md:text-xl mt-6 "
        />
      </div>
      </ClickSpark>
    </div>
  );
};

export default HeroSection;
