import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Tracks.css'

export default function Tracks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const tracks = [
    {
      id: 1,
      title: "Track 1: Embedded & IoT",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z" fill="currentColor"/>
        </svg>
      ),
      domains: [
        "Automation & Control Systems",
        "Robotics & Smart Operations",
        "Smart Agriculture",
        "Smart Energy",
        "Smart Health",
        "Smart City Solutions"
      ],
      color: "#00d4ff"
    },
    {
      id: 2,
      title: "Track 2: Analytical / Simulation",
      icon: (
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z" fill="currentColor"/>
        </svg>
      ),
      domains: [
        "Model Simulation & Optimization",
        "SOLIDWORKS",
        "MATLAB / ANSYS",
        "Cadence / Mentor Graphics",
        "Machine Learning & Data Science"
      ],
      color: "#00a8cc"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const trackVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="tracks" className="tracks-section">
      <motion.div
        ref={ref}
        className="section-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <h2 className="section-title">Hackathon Tracks</h2>

        <div className="tracks-grid">
          {tracks.map((track) => (
            <motion.div
              key={track.id}
              className="track-card"
              variants={trackVariants}
              whileHover={{ 
                scale: 1.02,
                boxShadow: `0 0 30px ${track.color}40`
              }}
            >
              <div className="track-header">
                <span className="track-icon">{track.icon}</span>
                <h3 className="track-title">{track.title}</h3>
              </div>

              <ul className="track-domains">
                {track.domains.map((domain, index) => (
                  <li key={index} className="domain-item">
                    <span className="domain-bullet" style={{ background: track.color }}></span>
                    <span>{domain}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="tracks-note"
          variants={trackVariants}
        >
          <p>
            Choose the track that aligns with your team's expertise and develop innovative 
            solutions that address real-world sustainability challenges.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
