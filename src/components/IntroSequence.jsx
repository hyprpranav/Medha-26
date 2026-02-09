import { motion } from 'framer-motion'
import './IntroSequence.css'

export default function IntroSequence({ onComplete, onSkip }) {
  return (
    <motion.div
      className="intro-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Skip Button */}
      <motion.button
        className="skip-button"
        onClick={onSkip}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Skip Intro
      </motion.button>

      {/* Space Background */}
      <div className="intro-background">
        <div className="stars"></div>
        <div className="stars-2"></div>
      </div>

      {/* Satellite - Static position */}
      <motion.div
        className="satellite-container"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <img 
          src="/images/satellite.png" 
          alt="Satellite"
          className="satellite"
        />
      </motion.div>

      {/* Astronaut - Moving toward satellite */}
      <motion.div
        className="astronaut-container"
        initial={{ 
          x: '-100vw', 
          y: '50vh',
          scale: 0.3,
          opacity: 0,
          rotate: -15
        }}
        animate={{ 
          x: '0vw', 
          y: '0vh',
          scale: 1,
          opacity: 1,
          rotate: 0
        }}
        transition={{ 
          duration: 3.5,
          ease: [0.43, 0.13, 0.23, 0.96]
        }}
        onAnimationComplete={() => {
          setTimeout(onComplete, 500)
        }}
      >
        <img 
          src="/images/astronaut.png" 
          alt="Astronaut"
          className="astronaut"
        />
      </motion.div>

      {/* Signal initialization text */}
      <motion.div
        className="intro-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="signal-text">Initializing Signal...</span>
      </motion.div>
    </motion.div>
  )
}
