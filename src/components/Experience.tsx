import { useState } from 'react';
import { m } from 'framer-motion';

export default function Experience() {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      role: "Senior Frontend Engineer", company: "bol",
      date: "Nov 2025 - Present",
      bullets: [
        "Spearheaded the evolution of mission-critical e-commerce web applications serving millions of daily visitors across the Benelux.",
        "Architected and maintained performance-driven architectures utilizing Next.js, React, and SSR (Server-Side Rendering) paradigms to optimize Core Web Vital metrics (LCP, CLS) and user conversions.",
        "Drove robust design pattern scalability and type-safe codebase structures within large, multi-disciplinary agile teams."
      ]
    },
    {
      role: "Frontend Developer (Checkout Team)", company: "VodafoneZiggo (via iO)",
      date: "Dec 2024 - Nov 2025",
      bullets: [
        "Maintained high-security, high-throughput checkout pipelines ensuring 0% downtime across millions of peak traffic transactions.",
        "Engineered API handlers, asynchronous Redux/RTK data triggers, and modular component flows to safeguard transactional integrity.",
        "Supported critical payment gateway layouts ensuring optimal uptime and seamless asynchronous form validation."
      ]
    },
    {
      role: "Frontend Developer", company: "Vitestro (via iO)",
      date: "Apr 2024 - Dec 2024",
      bullets: [
        "Developed intuitive, patient-facing and clinical user interfaces utilizing rigorous state-driven components for an autonomous blood drawing robotic system.",
        "Implemented robust, type-safe frontend architectures complying with strict medical device software standards (ISO/CE marking contexts).",
        "Engineered accessible, high-integrity interfaces enabling flawless data synchronization grids for health specialists."
      ]
    },
    {
      role: "Frontend Developer | Personal Development Manager", company: "iO",
      date: "Mar 2024 - Nov 2025",
      bullets: [
        "Delivered scaled frontend solutions utilizing modular React arrays and API layout integrations for enterprise clients.",
        "Acted as Personal Development Manager for the consultant team, driving career metrics and technical talent growth frameworks."
      ]
    },
    {
      role: "Frontend Team Lead", company: "Auruscent (via Rebels)",
      date: "Aug 2023 - Mar 2024",
      bullets: [
        "Led engineering teams in architecting high-quality web apps, scalable e-commerce solutions, and complex payment platform integrations.",
        "Directed critical technical decisions and application thresholds to secure seamless, zero-downtime continuous delivery (CI/CD) software rollouts.",
        "Mentored developers on advanced asynchronous logic, component modularity, and TypeScript architecture standards."
      ]
    }
  ];

  const hiddenExperiences = [
    {
      role: "Frontend Developer", company: "LeasePlan (via Rebels)",
      date: "May 2022 - Mar 2024",
      bullets: [
        "Engineered predictive maintenance application pipelines parsing real-time telemetry grid data streams.",
        "Developed a seamless, login-free appointment booking pipeline securing rapid workflow triggers.",
        "Mentored developers on robust component structures alongside automated grid tests."
      ]
    },
    {
      role: "Frontend Developer", company: "Rebels",
      date: "May 2022 - Mar 2024",
      bullets: ["Consulted for various enterprise clients utilizing full-stack React, Node.js, and strict asynchronous logic modules."]
    },
    {
      role: "Frontend Developer", company: "Bending the Rules",
      date: "Nov 2019 - May 2022",
      bullets: [
        "Built sports booking platforms with high-density layouts utilizing Angular frameworks and Flutter components.",
        "Developed advanced layout calculation architectures utilizing granular state trigger streams in React.js.",
        "Architected platforms utilizing WebRTC and Socket.io frameworks for high-concurrency stream data overloads."
      ]
    },
    {
      role: "Software Engineer", company: "Rodeo",
      date: "Feb 2019 - Aug 2019",
      bullets: [
        "Started as an intern and progressed to Software Engineer.",
        "Developed features for the React-Native mobile application."
      ]
    },
    {
      role: "Software Engineer Internship", company: "Pernexus",
      date: "Feb 2018 - Jun 2018",
      bullets: ["Contributed to the development of robust Laravel PHP applications."]
    },
    {
      role: "Customer Support Agent", company: "Solcon",
      date: "Sep 2017 - Jan 2018",
      bullets: [
        "Provided frontline assistance, developing a strong customer-focused mindset.",
        "Cultivated communication and problem-solving skills crucial for user-centric software design."
      ]
    }
  ];

  const certifications = [
    { title: "Software Architect Foundational Skills", org: "iSAQB®", date: "Dec 2024" },
    { title: "Rapid Developer", org: "Mendix", date: "Feb 2024" },
    { title: "Datadog 101: Developer", org: "Datadog", date: "Sep 2023" },
    { title: "Business English Certificate Vantage", org: "University of Cambridge", date: "Jun 2017" }
  ];

  return (
    <section id="experience" className="section bg-alt">
      <div className="container">
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          My <span>Experience</span>
        </m.h2>
        
        <m.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.15 }}
          className="timeline"
        >
          {experiences.map((exp, idx) => (
            <m.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, x: -30 },
                visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <span className="timeline-date">{exp.date}</span>
                <ul className="timeline-details">
                  {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>
              </div>
            </m.div>
          ))}

          {hiddenExperiences.map((exp, idx) => (
            <m.div 
              key={`hidden-${idx}`}
              initial={{ height: 0, opacity: 0, overflow: 'hidden' }}
              animate={{ 
                height: showAll ? 'auto' : 0, 
                opacity: showAll ? 1 : 0,
                overflow: showAll ? 'visible' : 'hidden'
              }}
              transition={{ duration: 0.3, delay: showAll ? idx * 0.05 : 0 }}
              className="timeline-item"
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.role}</h3>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <span className="timeline-date">{exp.date}</span>
                <ul className="timeline-details">
                  {exp.bullets.map((bullet, i) => <li key={i}>{bullet}</li>)}
                </ul>
              </div>
            </m.div>
          ))}
        </m.div>

        <div className="experience-actions" style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <button 
            data-tracking="experience-toggle"
            onClick={() => {
              if (showAll) {
                const experienceSection = document.getElementById('experience');
                const navHeight = document.getElementById('navbar')?.getBoundingClientRect().height || 80;
                window.scrollTo({
                  top: (experienceSection?.getBoundingClientRect().top || 0) + window.scrollY - navHeight,
                  behavior: 'smooth'
                });
                setTimeout(() => setShowAll(false), 300);
              } else {
                setShowAll(true);
              }
            }} 
            className="btn btn-secondary"
          >
            {showAll ? 'Show Less' : 'Show All Experience'}
          </button>
        </div>

        <div className="certifications">
          <m.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Licenses & Certifications
          </m.h3>
          <div className="cert-grid">
            {certifications.map((cert, idx) => (
              <m.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="cert-card"
              >
                <h4>{cert.title}</h4>
                <p className="cert-info"><span>{cert.org}</span> {cert.date && <span className="timeline-date" style={{ marginLeft: 'auto', fontSize: '0.85rem', opacity: 0.8 }}>{cert.date}</span>}</p>
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
