import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './About.css'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  }

  return (
    <section id="about" className="about-section">
      <motion.div 
        ref={ref}
        className="section-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInUp}
      >
        <h2 className="section-title">About MEDHA'26</h2>
        
        <div className="about-content">
          <p className="about-text">
            <strong>MEDHA'26</strong> is a premier 24-hour National Level Hackathon organized by the 
            Department of Electronics and Communication Engineering at M. Kumarasamy College of 
            Engineering (Autonomous), Karur. This flagship event brings together innovative minds 
            from across the nation to tackle real-world challenges through engineering excellence.
          </p>

          <p className="about-text">
            Centered on the theme <strong>"Engineering Solutions for Sustainable Development"</strong>, 
            MEDHA'26 challenges participants to develop impactful solutions that address critical 
            sustainability issues. From embedded systems and IoT innovations to advanced analytical 
            simulations, this hackathon provides a platform for students to showcase their technical 
            prowess and creative problem-solving abilities.
          </p>

          <p className="about-text">
            As a department-led initiative in association with the Eminence Association and IETE 
            Students Forum, MEDHA'26 emphasizes academic credibility, innovation, and collaborative 
            learning. Participants will engage in intensive development sessions, receive mentorship 
            from industry experts, and compete for a prize pool of <strong>₹65,000</strong>.
          </p>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L4.5 20.29L5.21 21L12 18L18.79 21L19.5 20.29L12 2Z" fill="currentColor"/>
                  <circle cx="12" cy="12" r="3" fill="currentColor"/>
                </svg>
              </div>
              <h4>Innovation Focus</h4>
              <p>Cutting-edge solutions for sustainable development</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V9C3 10.65 4.34 12 6 12C6 14.21 7.79 16 10 16H11V19H5V21H19V19H13V16H14C16.21 16 18 14.21 18 12C19.66 12 21 10.65 21 9V7C21 5.9 20.1 5 19 5ZM5 9V7H7V10.82C5.84 10.4 5 9.3 5 9ZM14 14H10C8.9 14 8 13.1 8 12V5H16V12C16 13.1 15.1 14 14 14ZM19 9C19 9.3 18.84 10.4 17 10.82V7H19V9Z" fill="currentColor"/>
                </svg>
              </div>
              <h4>National Platform</h4>
              <p>Compete with the best minds across India</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 21C9 21.55 9.45 22 10 22H14C14.55 22 15 21.55 15 21V20H9V21ZM12 2C8.14 2 5 5.14 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.14 15.86 2 12 2Z" fill="currentColor"/>
                </svg>
              </div>
              <h4>Expert Mentorship</h4>
              <p>Guidance from industry professionals and faculty</p>
            </div>
            <div className="highlight-item">
              <div className="highlight-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V18C1 18.55 1.45 19 2 19H14C14.55 19 15 18.55 15 18V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V18C17 18.35 16.93 18.69 16.82 19H22C22.55 19 23 18.55 23 18V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
                </svg>
              </div>
              <h4>Team Collaboration</h4>
              <p>Build solutions in teams of 3-5 members</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
