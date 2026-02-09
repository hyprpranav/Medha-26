import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Contact.css'

export default function Contact() {
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

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const studentCoordinators = [
    { name: "Sujeeth T", contact: "7010003931", email: "sujeeth@example.com" },
    { name: "Anuruth S", contact: "9361668624", email: "anuruth@example.com" },
    { name: "Yogeswaran S", contact: "9778584251", email: "yogeswaran@example.com" }
  ]

  return (
    <section id="contact" className="contact-section">
      {/* Background Image with Overlay */}
      <div className="contact-background">
        <div className="contact-overlay"></div>
        <img 
          src="/static/images/mkce_drone_view.png" 
          alt="MKCE Campus" 
          className="contact-bg-image"
        />
      </div>

      <motion.div
        ref={ref}
        className="section-content contact-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 className="section-title contact-title" variants={fadeInUp}>
          Contact Us
        </motion.h2>

        {/* Institution Details */}
        <motion.div className="institution-details" variants={fadeInUp}>
          <h3>Department of Electronics and Communication Engineering</h3>
          <p className="institution-name">
            M. Kumarasamy College of Engineering (Autonomous)
          </p>
          <p className="institution-address">
            Karur - 639 113, Tamil Nadu, India
          </p>
        </motion.div>

        {/* Student Coordinators */}
        <motion.div className="contact-coordinators" variants={fadeInUp}>
          <h4>Reach Out to Student Coordinators</h4>
          <div className="contact-cards">
            {studentCoordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                className="contact-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="contact-name">{coordinator.name}</div>
                <a 
                  href={`tel:+91${coordinator.contact}`}
                  className="contact-link"
                >
                  📞 +91 {coordinator.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div className="contact-footer" variants={fadeInUp}>
          <div className="footer-logos">
            <img src="/static/images/mkce_logo.png" alt="MKCE" />
            <img src="/static/images/eminence_logo.png" alt="Eminence" />
            <img src="/static/images/iete_logo.png" alt="IETE" />
          </div>
          <p className="footer-text">
            © 2026 MEDHA'26 | Department of ECE, MKCE
          </p>
          <p className="footer-tagline">
            Engineering Solutions for Sustainable Development
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
