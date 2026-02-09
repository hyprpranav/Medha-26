import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Register.css'

export default function Register() {
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
        staggerChildren: 0.2
      }
    }
  }

  const registrationDetails = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13.41 18.09V20H10.74V18.07C9.14 17.71 7.76 16.75 7.56 14.85H9.38C9.55 15.99 10.26 16.54 11.89 16.54C13.75 16.54 14.29 15.72 14.29 14.97C14.29 14.03 13.75 13.38 11.62 12.91C9.07 12.35 7.56 11.28 7.56 9.44C7.56 7.77 8.86 6.66 10.74 6.24V4H13.41V6.26C15.38 6.69 16.4 8.12 16.47 9.88H14.65C14.59 8.66 13.97 8.04 12.08 8.04C10.38 8.04 9.58 8.61 9.58 9.5C9.58 10.38 10.25 10.85 12.31 11.3C14.37 11.75 16.31 12.59 16.31 14.91C16.3 16.72 15.11 17.76 13.41 18.09Z" fill="currentColor"/>
        </svg>
      ),
      label: "Registration Fee",
      value: "₹500 per head"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
        </svg>
      ),
      label: "Team Size",
      value: "3–5 Members"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5H17V3H7V5H5C3.9 5 3 5.9 3 7V9C3 10.65 4.34 12 6 12C6 14.21 7.79 16 10 16H11V19H5V21H19V19H13V16H14C16.21 16 18 14.21 18 12C19.66 12 21 10.65 21 9V7C21 5.9 20.1 5 19 5ZM5 9V7H7V10.82C5.84 10.4 5 9.3 5 9ZM14 14H10C8.9 14 8 13.1 8 12V5H16V12C16 13.1 15.1 14 14 14ZM19 9C19 9.3 18.84 10.4 17 10.82V7H19V9Z" fill="currentColor"/>
        </svg>
      ),
      label: "Prize Pool",
      value: "₹65,000"
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7ZM7 11H12V16H7V11Z" fill="currentColor"/>
        </svg>
      ),
      label: "Submission Deadline",
      value: "14 February 2026"
    }
  ]

  return (
    <section id="register" className="register-section">
      <motion.div
        ref={ref}
        className="section-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 className="section-title" variants={fadeInUp}>
          Registration
        </motion.h2>

        <motion.div className="register-content" variants={fadeInUp}>
          {/* Registration Details Grid */}
          <div className="registration-grid">
            {registrationDetails.map((detail, index) => (
              <motion.div
                key={index}
                className="registration-detail"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="detail-icon-large">{detail.icon}</div>
                <h4 className="detail-label">{detail.label}</h4>
                <p className="detail-value">{detail.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Important Info */}
          <motion.div className="important-info" variants={fadeInUp}>
            <h3>Important Information</h3>
            <ul>
              <li>Form teams of 3-5 members before registration</li>
              <li>All team members must register individually</li>
              <li>Registration fee is non-refundable</li>
              <li>Complete your problem statement submission by the deadline</li>
              <li>Selected teams will be notified via email</li>
            </ul>
          </motion.div>

          {/* CTA Button */}
          <motion.div className="register-cta-container" variants={fadeInUp}>
            <motion.a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdPmCQomvSawplEvqxjR4XkgxVy0Tajv3Y4VzwCFXUV-mbmhg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="register-button"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="button-text">Register Now</span>
              <span className="button-arrow">→</span>
            </motion.a>
            <p className="cta-note">
              Secure your spot for MEDHA'26 before registrations close!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
