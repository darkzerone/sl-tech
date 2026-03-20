import { m } from 'framer-motion';
import GridTracers from './GridTracers';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <GridTracers />
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>
      </div>
      <div className="container hero-content">
        <div className="hero-text">
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="greeting"
          >
            Hello, I'm
          </m.p>
          <m.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="title"
          >
            Steven Leunk
          </m.h1>
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="subtitle"
          >
            Senior <span className="highlight">Software Engineer</span>
          </m.h2>
          <m.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="description"
          >
            I build high-performance web applications with a focus on React, TypeScript, and scalable software architectures.
          </m.p>
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hero-actions"
          >
            <a href="#projects" data-tracking="hero-projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" data-tracking="hero-contact" className="btn btn-secondary">Get in Touch</a>
          </m.div>
        </div>
      </div>
      <m.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="scroll-indicator"
      >
        <a href="#about">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
        </a>
      </m.div>
    </section>
  );
}
