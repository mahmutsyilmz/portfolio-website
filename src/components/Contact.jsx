import { motion } from 'framer-motion';
import NetworkBackground from './NetworkBackground';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    emailjs.init("sxYQU6tJOvLtEgaSm"); // EmailJS public key'inizi buraya ekleyin
  }, []);

  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      await emailjs.sendForm(
        'service_hxp6hx3', // EmailJS servis ID
        'template_m5kis0i', // EmailJS template ID
        formRef.current
      );
      setSuccess(true);
      formRef.current.reset();
    } catch (error) {
      console.error('Error:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = "w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent";

  return (
    <section id="contact" className="min-h-screen relative overflow-hidden py-20">
      <NetworkBackground />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Contact Me
          </h2>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                className={inputStyles}
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                className={inputStyles}
                placeholder="Your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className={inputStyles}
                placeholder="Your message"
              ></textarea>
            </div>
            
            <div className="text-center space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={loading}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </motion.button>

              {success && (
                <p className="text-green-500 dark:text-green-400">
                  Message sent successfully!
                </p>
              )}

              {error && (
                <p className="text-red-500 dark:text-red-400">
                  Failed to send message. Please try again.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Email</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm break-all">mahmut14sami15@gmail.com</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Location</h3>
            <p className="text-gray-600 dark:text-gray-300">Istanbul, Turkey</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center"
          >
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Social</h3>
            <div className="flex justify-center space-x-4">
              <a 
                href="https://github.com/mahmutsyilmz" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/mahmutsamiyilmaz/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 