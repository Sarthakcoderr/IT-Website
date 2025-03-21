"use client";

import { Infinity, MessagesSquare, Zap, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";

const feature = [
  {
    title: "Quality",
    description:
      "We prioritize delivering top-notch solutions, ensuring precision, consistency, and exceptional results in every project.",
    icon: <ZoomIn className="size-6" />,
  },
  {
    title: "Innovative Solutions",
    description:
      "We specialize in delivering customized IT solutions that streamline your business processes, enhance efficiency, and drive growth.",
    icon: <Zap className="size-6" />,
  },
  {
    title: "Customer Support",
    description:
      "Our support team is committed to providing timely assistance, ensuring smooth operations and effective issue resolution.",
    icon: <MessagesSquare className="size-6" />,
  },
  {
    title: "Reliable",
    description:
      "With a focus on stability, security, and scalability, we deliver robust, dependable, and high-performing solutions that guarantee consistent and seamless operations.",
    icon: <Infinity className="size-6" />,
  },
];

const FeatureSection = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeInOut",
      },
    }),
  };

  // Icon hover animation
  const iconHover = {
    whileHover: { rotate: 15, scale: 1.1, transition: { duration: 0.3 } },
    whileTap: { scale: 0.9 },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="container">
        {/* Header Section */}
        <motion.div
         
          variants={sectionVariants}
          className="flex w-full flex-col items-center"
        >
          <div className="flex flex-col items-center space-y-4 text-center sm:space-y-6 md:max-w-3xl md:text-center">
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm text-muted-foreground"
            >
              WHY CHOOSE US
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl font-medium md:text-5xl"
            >
              Empowering Your Business with Excellence
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-muted-foreground md:max-w-2xl"
            >
              We specialize in delivering tailored solutions that enhance efficiency, optimize performance, and drive your business forward with cutting-edge technology and exceptional support.
            </motion.p>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="mx-auto mt-20 grid max-w-5xl gap-6 md:grid-cols-2">
          {feature.map((item, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={idx}
              className="flex flex-col justify-between rounded-lg bg-accent p-6 md:min-h-[300px] md:p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Animated Icon */}
              <motion.span
                {...iconHover}
                className="mb-6 flex size-11 items-center justify-center rounded-full bg-background"
              >
                {item.icon}
              </motion.span>

              <div>
                <h3 className="text-lg font-medium md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-2 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export { FeatureSection };
