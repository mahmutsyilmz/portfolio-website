import { motion } from 'framer-motion';
import NetworkBackground from './NetworkBackground';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description: "This e-commerce website project is a Spring Boot platform for managing products, orders, and payments.",
      tools: ["Java", "Spring", "Thymeleaf"],
      icon: "🛍️",
      color: "from-green-500 to-emerald-500",
      github: "https://github.com/mahmutsyilmz/e-commerce-website"
    },
    {
      title: "The Pneumonia Detector",
      description: "Python project that uses deep learning to analyze chest X-rays for pneumonia detection, aiding healthcare professionals in swift diagnosis.",
      tools: ["Python", "Matplotlib", "Tensorflow"],
      icon: "🔬",
      color: "from-blue-500 to-cyan-500",
      github: "https://github.com/mahmutsyilmz/pneumonia-detector"
    },
    {
      title: "The Student Management System",
      description: "Streamlines school administration by managing records for students, teachers, classes, and parents with role-based access.",
      tools: ["Java", "Spring"],
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      github: "https://github.com/mahmutsyilmz/student-management-system"
    }
  ];

  return (
    <section id="projects" className="relative min-h-screen py-20 overflow-hidden">
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
            Projects
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative bg-[#112240] rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
                
                {/* Glowing Border */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-start">
                    {/* Project Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl">{project.icon}</span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                        {project.title}
                      </h3>
                    </div>

                    {/* View Project Button */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
                    >
                      <span className="relative z-10 text-blue-400 font-medium group-hover/btn:text-white transition-colors duration-300">
                        View Project
                      </span>
                      <svg 
                        className="w-5 h-5 text-blue-400 group-hover/btn:text-white transition-colors duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tools Used */}
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool, toolIdx) => (
                      <motion.span
                        key={toolIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (idx * 0.2) + (toolIdx * 0.1) }}
                        className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-white border border-blue-500/20`}
                      >
                        {tool}
                      </motion.span>
                    ))}
                  </div>

                  {/* Hover Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/0 to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 