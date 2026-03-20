import { m } from 'framer-motion';

export default function About() {
  const skills = [
    "React & Redux", "TypeScript", "Node.js", "Next.js", 
    "GraphQL & REST APIs", "Playwright / Cypress / Jest", 
    "Frontend Architecture", "Team Leadership & Mentoring"
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          About <span>Me</span>
        </m.h2>
        <div className="about-content">
          <m.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="about-text"
          >
            <p>I am a Senior Software Engineer with a passion for designing and building highly scalable, resilient web applications.</p>
            <p>Over the years, I've helped maintain and scale core platforms at <strong>bol</strong>, <strong>VodafoneZiggo</strong>, and <strong>LeasePlan</strong>. I take pride in making Technical decisions that keep high-traffic systems running smoothly for millions of users while maintaining clean, readable, and highly reusable codebases with flawless component structures.</p>
            <p>My goal is to combine robust underlying architecture with excellent user experiences.</p>
          </m.div>
          <m.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="about-skills"
          >
            <h3>Core Competencies</h3>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <m.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="skill-tag"
                >
                  {skill}
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
