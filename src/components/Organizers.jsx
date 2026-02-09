import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './Organizers.css'

export default function Organizers() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const staffCoordinators = [
    { name: "Dr. K. Sheikdavood", designation: "Assistant Professor, ECE", contact: "9865314886" },
    { name: "Mr. S. Mohanraj", designation: "Assistant Professor, ECE", contact: "9976775159" }
  ]

  const studentCoordinators = [
    { name: "Sujeeth T", contact: "7010003931" },
    { name: "Anuruth S", contact: "9361668624" },
    { name: "Yogeswaran S", contact: "9778584251" }
  ]

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

  return (
    <section id="organizers" className="organizers-section">
      <motion.div
        ref={ref}
        className="section-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <motion.h2 className="section-title" variants={fadeInUp}>
          Organizing Team
        </motion.h2>

        {/* Staff Coordinators */}
        <motion.div 
          className="coordinator-group"
          variants={staggerContainer}
        >
          <motion.h3 className="group-title" variants={fadeInUp}>
            Staff Coordinators
          </motion.h3>
          <div className="coordinators-grid">
            {staffCoordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                className="coordinator-card staff-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="coordinator-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" fill="currentColor"/>
                    <circle cx="12" cy="8" r="3" fill="currentColor" opacity="0.5"/>
                  </svg>
                </div>
                <h4 className="coordinator-name">{coordinator.name}</h4>
                <p className="coordinator-designation">{coordinator.designation}</p>
                <a 
                  href={`tel:+91${coordinator.contact}`}
                  className="coordinator-contact"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                  </svg>
                  +91 {coordinator.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Student Coordinators */}
        <motion.div 
          className="coordinator-group"
          variants={staggerContainer}
        >
          <motion.h3 className="group-title" variants={fadeInUp}>
            Student Coordinators
          </motion.h3>
          <div className="coordinators-grid">
            {studentCoordinators.map((coordinator, index) => (
              <motion.div
                key={index}
                className="coordinator-card student-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <div className="coordinator-icon">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" fill="currentColor"/>
                  </svg>
                </div>
                <h4 className="coordinator-name">{coordinator.name}</h4>
                <a 
                  href={`tel:+91${coordinator.contact}`}
                  className="coordinator-contact"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: '6px' }}>
                    <path d="M20.01 15.38C18.78 15.38 17.59 15.18 16.48 14.82C16.13 14.7 15.74 14.79 15.47 15.06L13.9 17.03C11.07 15.68 8.42 13.13 7.01 10.2L8.96 8.54C9.23 8.26 9.31 7.87 9.2 7.52C8.83 6.41 8.64 5.22 8.64 3.99C8.64 3.45 8.19 3 7.65 3H4.19C3.65 3 3 3.24 3 3.99C3 13.28 10.73 21 20.01 21C20.72 21 21 20.37 21 19.82V16.37C21 15.83 20.55 15.38 20.01 15.38Z" fill="currentColor"/>
                  </svg>
                  +91 {coordinator.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
