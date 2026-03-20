import { m } from 'framer-motion';
import { Radar, MonitorPlay, Trophy, Map, Mail } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "RIVM Fishing Monitor",
      icon: <Radar size={24} />,
      description: "Led the frontend architecture building a geographic polygon boundaries mapper & real-time analytics monitoring tool to flag vessel spatial violations across designated maritime zones.",
      tech: ["React", "GeoJSON", "SCSS", "Jest", "SonarQube"]
    },
    {
      title: "Proctorview Dashboard",
      icon: <MonitorPlay size={24} />,
      description: "Refactored proof-of-concept software into fully scaled concurrency architectures utilizing WebRTC and Socket.io for fully synchronized high-volume grid rendering and stream alerts overlay frames.",
      tech: ["React", "Node.js", "Socket.io", "TypeScript"]
    },
    {
      title: "Champ Sports Booking",
      icon: <Trophy size={24} />,
      description: "Developed a comprehensive sports booking platform with highly responsive layout schedules and real-time scheduling grid mechanics.",
      tech: ["Angular", "Node.js", "TypeScript"]
    },
    {
      title: "Swooz Tracking",
      icon: <Map size={24} />,
      description: "Developed core features for the mobile application and main corporate homepage, building dashboard interfaces and tracking metrics for padel sports activity.",
      tech: ["React", "Flutter", "TypeScript"]
    },
    {
      title: "MailBlue CRM Workspace",
      icon: <Mail size={24} />,
      description: "Engineered high-throughput dashboard layouts and modular interfaces scaling custom automation triggers and workflow layouts.",
      tech: ["React", "TypeScript", "Node.js"]
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured <span>Projects</span>
        </m.h2>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <m.article 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02, y: -5, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="project-card"
            >
              <div className="project-content">
                <div className="project-header">
                  <div className="project-links">
                    <span className="project-icon">{project.icon}</span>
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                </div>
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}
