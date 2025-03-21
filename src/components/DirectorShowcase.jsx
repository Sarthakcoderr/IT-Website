"use client";
import { motion } from "framer-motion";
import Director from "../assets/images/aman-dayal.jpg";

const DirectorShowcase = () => {
  return (
    <section className="pb-32">
      <div className="container flex flex-col items-center text-center">
       
        <motion.h1
          className="my-9 text-3xl font-medium md:text-5xl"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Our Director
        </motion.h1>

       
        <motion.div
          className="flex justify-center items-center mt-4"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <motion.img
            src={Director}
            alt="Aman Dayal"
            className="rounded-full w-48 h-48 object-cover border-4 border-gray-300 shadow-lg"
            
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

       
        <motion.h2
          className="mt-6 text-xl font-semibold lg:text-2xl"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          Aman Dayal
        </motion.h2>

       
        <motion.p
          className="mt-4 max-w-2xl text-muted-foreground leading-relaxed lg:text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
        >
          Aman Dayal is the visionary leader behind our company. With years of
          experience in the industry, he is dedicated to driving innovation,
          fostering growth, and delivering excellence in all our products.
        </motion.p>
      </div>
      
    </section>
  );
};

export { DirectorShowcase };
