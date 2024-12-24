import { motion } from 'framer-motion';
import NetworkBackground from './NetworkBackground';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "👨‍💻",
      skills: ["Java", "C#", "Python", "SQL"]
    },
    {
      title: "Frameworks & Technologies",
      icon: "🛠️",
      skills: ["Spring Boot", ".NET", "Hibernate", "RESTful APIs", "Maven"]
    },
    {
      title: "Database Technologies",
      icon: "🗄️",
      skills: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      title: "Version Control & Tools",
      icon: "🔧",
      skills: ["Git", "GitHub", "Jira", "BitBucket"]
    }
  ];

  return (
    <section id="skills" className="relative min-h-screen py-20 overflow-hidden">
      <NetworkBackground />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Skills
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Card */}
              <div className="relative bg-[#112240] rounded-2xl p-8 h-full border border-blue-500/20 backdrop-blur-sm transition-all duration-300">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Glowing Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl">{category.icon}</span>
                    <h3 className="text-2xl font-bold text-white">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skillIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: skillIdx * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          filter: "brightness(1.1)",
                        }}
                        className="relative"
                      >
                        <div className="relative overflow-hidden">
                          {/* Skill Card */}
                          <div className="px-4 py-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20 backdrop-blur-sm">
                            {/* Progress Bar Background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000" />
                            
                            {/* Skill Name */}
                            <p className="text-blue-400 font-medium text-center relative z-10">
                              {skill}
                            </p>
                          </div>

                          {/* Hover Glow Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 