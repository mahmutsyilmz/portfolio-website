import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import NetworkBackground from './NetworkBackground';

const Hero = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const name = "Mahmut Sami Yılmaz".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <NetworkBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Animated Name */}
          <motion.div
            initial="hidden"
            animate="visible"
            className="flex justify-center flex-wrap mb-6"
          >
            {name.map((letter, idx) => (
              <motion.span
                key={idx}
                variants={letterVariants}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-5xl sm:text-7xl font-bold text-white inline-block"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Profession with Gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl sm:text-4xl font-semibold">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Junior Software Engineer
              </span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto mb-12"
          >
            Passionate about creating innovative solutions and learning new technologies
          </motion.p>

          {/* Buttons Container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.1 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            {/* View My Work Button */}
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group relative"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full overflow-hidden shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </Link>

            {/* Contact Me Button */}
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="group relative"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-8 py-4 bg-transparent text-white font-semibold rounded-full overflow-hidden border-2 border-blue-500 hover:border-blue-400 transition-colors duration-300"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute top-1/4 -left-12 w-24 h-24 bg-blue-500/10 rounded-full blur-xl" />
          <div className="absolute bottom-1/4 -right-12 w-32 h-32 bg-purple-500/10 rounded-full blur-xl" />
          <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-400/10 rounded-full blur-lg" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 