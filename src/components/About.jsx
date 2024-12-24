import { motion } from 'framer-motion';
import NetworkBackground from './NetworkBackground';

const About = () => {
  const timelineData = [
    {
      type: "education",
      title: "BS in Computer Engineering",
      institution: "Eskişehir Technical University",
      date: "2020 – Present",
      details: "Computer Engineering (100% English)",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7" />
        </svg>
      )
    },
    {
      type: "experience",
      title: "Java Developer Intern",
      institution: "Detaysoft, Istanbul",
      date: "July - August 2024",
      details: [
        "Gained knowledge of SAP basic modules and business processes",
        "Developed an e-commerce website"
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/images/cv_mahmut .pdf';
    link.download = 'Mahmut_Sami_Yilmaz_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="about" className="min-h-screen relative overflow-hidden py-20">
      <NetworkBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
              About <span className="text-white">Me</span>
            </h2>
            <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Profile and Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            {/* Profile Image Side */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto lg:ml-0"
            >
              <div className="relative w-80 h-80">
                {/* Animated Background Elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 90, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [90, 0, 90],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl"
                />
                
                {/* Profile Frame */}
                <div className="absolute inset-4">
                  <div className="w-full h-full rounded-full border-2 border-blue-500/20 backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-blue-500/5" />
                </div>
                
                {/* Profile Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-br from-blue-500/5 to-blue-600/5 shadow-2xl"
                >
                  <img 
                    src="/images/image.jpeg" 
                    alt="Mahmut Sami Yılmaz" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm" />
                <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-blue-500/30 rounded-full blur-sm" />
                <div className="absolute top-1/2 -right-8 w-6 h-6 bg-blue-500/30 rounded-full blur-sm" />
              </div>
            </motion.div>

            {/* Introduction Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-white">
                Computer Engineering Student
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about software development and constantly learning new technologies.
                Currently focusing on web development and exploring various programming paradigms.
              </p>
              <motion.button
                onClick={handleDownloadCV}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -10px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 px-8 py-4 bg-blue-500 rounded-full text-white font-semibold overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10">Download CV</span>
                <svg className="w-6 h-6 relative z-10 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-1 h-full bg-blue-500/20 rounded-full" />
            </div>

            <div className="relative z-10 space-y-24">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}
                >
                  <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'}`}>
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                      }}
                      className="bg-[#112240] backdrop-blur-lg p-8 rounded-2xl border border-blue-500/20"
                    >
                      <div className="flex items-start gap-6">
                        <div className="w-16 h-16 flex items-center justify-center bg-blue-500/10 rounded-xl text-blue-500 shadow-lg">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2">
                            {item.title}
                          </h4>
                          <p className="text-lg text-blue-500 font-medium">
                            {item.institution}
                          </p>
                          <p className="text-base text-gray-400 mt-2">
                            {item.date}
                          </p>
                        </div>
                      </div>
                      {Array.isArray(item.details) ? (
                        <ul className="mt-6 space-y-3">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="w-6 h-6 flex-shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 text-sm">
                                ✓
                              </span>
                              <span className="text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="mt-6 text-gray-300">{item.details}</p>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;