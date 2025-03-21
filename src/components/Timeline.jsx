import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Orb from "./Orb";
import GradientText from "./GradientText";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function TimelineCard({ year, title, description }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 20);

  return (
    <section className="h-[500px] flex justify-center items-center relative">
       
       <motion.div
      initial={{ opacity: 0, x: 300, y: 40, rotate: 15, rotateX: 90 }}
      whileInView={{ opacity: 1, x: 0, y: 0, rotate: 0, rotateX: 0 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      whileHover={{ scale: 1.07 }}
      className="w-[90%] md:w-[700px] h-auto rounded-2xl shadow-xl overflow-hidden"
    >
      <Card className="bg-gradient-to-br from-[#6a11cb] to-[#2575fc] text-white border-0">
        <CardHeader className="p-8">
          <CardTitle className="text-4xl font-bold tracking-wide">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-6 bg-white text-gray-800">
          <p className="text-lg leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>

      {/* Floating Year Label */}
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute text-[#4ff0b7] font-mono text-[80px] font-extrabold tracking-wider opacity-30 top-1/2 left-10 -translate-y-1/2 z-[-1]"
      >
        {year}
      </motion.h2>
      
    </section>
  );
}

export default function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"], // Smooth transition between sections
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const title = "Secure, Reliable, Scalable.";
  const journey = "Journey of Infosystem";

  const timelineData = [
    { year: "2016", title: "Foundation Year", description: "Launched the company and started with 5 employees, focusing on small-scale projects." },
    { year: "2017", title: "Expansion Phase", description: "Expanded to 3 new cities and onboarded 50+ clients." },
    { year: "2018", title: "Tech Upgrade", description: "Implemented cutting-edge technologies, increasing efficiency by 40%." },
    { year: "2019", title: "New Headquarters", description: "Moved to a new, larger office to accommodate the growing team." },
    { year: "2020", title: "Global Presence", description: "Achieved international partnerships and grew to a team of 200+ members." }
  ];

  return (
    <div className="relative w-full min-h-screen">
      {/* Fixed Background Orb */}
      <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-black">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Intro Section */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center">
        <motion.div className="text-2xl md:text-6xl font-bold leading-tight flex space-x-1 text-white">
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
          For over 10 years, we've delivered robust and secure infosystem solutions.
        </GradientText>
      </div>

      {/* Journey Section */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
        <motion.div className="text-2xl md:text-6xl font-bold leading-tight flex space-x-1 text-white">
          {journey.split("").map((char, i) => (
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
      </div>

      {/* Timeline Section */}
      <div ref={containerRef} className="relative z-10">
        {timelineData.map((item, index) => (
          <TimelineCard
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
}
