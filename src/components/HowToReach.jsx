import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import './HowToReach.css'

export default function HowToReach() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  // MKCE Google Maps Link
  const mapsLink = "https://maps.app.goo.gl/7CoY36rVMfVe2Ykt6"

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

  return (
    <section id="how-to-reach" className="reach-section">
      <motion.div
        ref={ref}
        className="section-content"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
      >
        <motion.h2 className="section-title" variants={fadeInUp}>
          How to Reach Us
        </motion.h2>

        <motion.p className="reach-description" variants={fadeInUp}>
          Navigate to M. Kumarasamy College of Engineering, Karur
        </motion.p>

        {/* Location Card with Satellite View */}
        <motion.div 
          className="location-card"
          variants={fadeInUp}
        >
          <div className="satellite-view">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.7326!2d78.0434527!3d11.0548604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2c5940c36779%3A0x638aea1962e8ae96!2sM.Kumarasamy%20College%20of%20Engineering%2C%20Autonomous!5e1!3m2!1sen!2sin!4v1707495600000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MKCE Location"
            ></iframe>
          </div>

          <motion.a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="open-maps-button"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Open in Google Maps</span>
          </motion.a>
        </motion.div>

        {/* Address & Directions */}
        <motion.div className="location-details" variants={fadeInUp}>
          <div className="detail-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>Address</h3>
            <p>
              M. Kumarasamy College of Engineering (Autonomous)<br />
              Thalavapalayam Post, Karur - 639 113<br />
              Tamil Nadu, India
            </p>
          </div>

          <div className="detail-card">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5H6.5C5.84 5 5.28 5.42 5.08 6.01L3 12V20C3 20.55 3.45 21 4 21H5C5.55 21 6 20.55 6 20V19H18V20C18 20.55 18.45 21 19 21H20C20.55 21 21 20.55 21 20V12L18.92 6.01ZM6.5 16C5.67 16 5 15.33 5 14.5C5 13.67 5.67 13 6.5 13C7.33 13 8 13.67 8 14.5C8 15.33 7.33 16 6.5 16ZM17.5 16C16.67 16 16 15.33 16 14.5C16 13.67 16.67 13 17.5 13C18.33 13 19 13.67 19 14.5C19 15.33 18.33 16 17.5 16ZM5 11L6.5 6.5H17.5L19 11H5Z" fill="currentColor"/>
              </svg>
            </div>
            <h3>How to Get There</h3>
            <p>
              <strong>By Road:</strong> Well connected via NH-67<br />
              <strong>By Rail:</strong> Karur Junction (5 km)<br />
              <strong>By Air:</strong> Trichy Airport (90 km)
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
