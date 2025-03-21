import { FaBolt, FaGlobe, FaHeart, FaChartLine, FaUsers } from "react-icons/fa"; // Icons
import { motion } from "framer-motion"; // Framer Motion

const StatsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, delay:0.2,duration: 0.8, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ( { opacity: 1, y: 0, transition: { duration: 0.8,delay:0.4*index, ease: "easeOut" } })
  };

  return (
    <motion.div
      className="bg-white py-8 px-6 md:px-20"
      initial="hidden"
      whileInView="visible"
      
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-medium"
          variants={containerVariants}
        >
          We only deliver results.
        </motion.h2>
        <motion.p
          className="text-muted-foreground mt-4 text-base"
          variants={containerVariants}
        >
          Our commitment is to drive real growth through measurable outcomes,
          without shortcuts or empty promises.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-12"
          variants={containerVariants}
        >
          {[ 
            { icon: <FaHeart className="text-5xl text-red-500 mx-auto mb-4" />, value: "99%", label: "Customer Satisfaction Rate", description: "Our clients love us! With a 99% satisfaction rate, we prioritize customer happiness and trust." },
            { icon: <FaUsers className="text-5xl text-blue-500 mx-auto mb-4" />, value: "15+", label: "Powerful Modules", description: "Our platform offers 15+ robust modules designed to streamline your operations and enhance productivity." },
            { icon: <FaGlobe className="text-5xl text-purple-500 mx-auto mb-4" />, value: "100+", label: "Businesses Empowered", description: "We’ve helped over 100 businesses scale efficiently, boosting their productivity and revenue." },
            { icon: <FaChartLine className="text-5xl text-orange-500 mx-auto mb-4" />, value: "110X", label: "Efficiency Level", description: "Our solutions deliver 110X faster performance, enabling you to achieve more in less time." }
          ].map((stat, index) => (
            <motion.div key={index} className="text-center" variants={cardVariants} custom={index}>
              {stat.icon}
              <h3 className="text-5xl font-medium">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-600 mt-2">{stat.label}</p>
              <p className="text-muted-foreground mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default StatsSection;
