import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { ContactForm } from '../types';
import { SOCIAL_LINKS } from '../utils/constants';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsSubmitting(false);
    reset();
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: SOCIAL_LINKS.email,
      href: `mailto:${SOCIAL_LINKS.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: SOCIAL_LINKS.phone,
      href: `tel:${SOCIAL_LINKS.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Ho Chi Minh City, Vietnam',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-accent rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 border-2 border-secondary rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/6 w-16 h-16 border border-accent rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-white mb-6">
            Get In <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-secondary mx-auto mb-8 rounded-full"></div>
          <p className="font-inter text-lg text-neutral-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-poppins font-bold text-2xl text-white mb-6">
                Let's Connect
              </h3>
              <p className="font-inter text-neutral-400 leading-relaxed mb-8">
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hello, feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  whileHover={{ scale: 1.02, x: 10 }}
                  href={info.href}
                  className="flex items-center gap-4 p-4 bg-neutral-900 border border-neutral-800 rounded-xl hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group hover:border-accent/30 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-accent/20 to-secondary/20 rounded-lg group-hover:from-accent/30 group-hover:to-secondary/30 transition-all duration-300">
                    <info.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <div className="font-inter font-semibold text-white group-hover:text-accent transition-colors duration-300">
                      {info.label}
                    </div>
                    <div className="font-inter text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-neutral-900 border border-neutral-800 p-8 rounded-xl backdrop-blur-sm"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-poppins font-bold text-xl text-white mb-2">
                  Message Sent!
                </h3>
                <p className="font-inter text-neutral-400">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-inter font-semibold text-white mb-2">
                      Name *
                    </label>
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder-neutral-500"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block font-inter font-semibold text-white mb-2">
                      Email *
                    </label>
                    <input
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                      type="email"
                      className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder-neutral-500"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-inter font-semibold text-white mb-2">
                    Subject *
                  </label>
                  <input
                    {...register('subject', { required: 'Subject is required' })}
                    type="text"
                    className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all text-white placeholder-neutral-500"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-red-400 text-sm mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label className="block font-inter font-semibold text-white mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register('message', { required: 'Message is required' })}
                    rows={6}
                    className="w-full px-4 py-3 bg-black border border-neutral-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none text-white placeholder-neutral-500"
                    placeholder="Tell me about your project or say hello..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                <motion.button
                  type="submit"
                  disabled={true}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-accent to-secondary hover:from-secondary hover:to-accent disabled:from-accent/50 disabled:to-secondary/50 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-accent/20"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
                <span className='text-red-400'>Please contact me by facebook or email!</span>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;