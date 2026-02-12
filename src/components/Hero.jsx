import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'
import { motion } from 'framer-motion'
import './Hero.css'

function SpaceBackground() {
  return (
    <>
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={1.2}
      />
    </>
  )
}

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <section id="hero" className="hero-section">
      {/* Three.js Space Background */}
      <div className="hero-canvas-container">
        <Canvas camera={{ position: [0, 0, 1] }}>
          <Suspense fallback={null}>
            <SpaceBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Satellite Image - Animated entrance */}
      <motion.div 
        className="hero-satellite"
        initial={{ 
          opacity: 0, 
          scale: 0.3,
          x: -200,
          y: -200,
          rotate: -45
        }}
        animate={{ 
          opacity: 0.6, 
          scale: 1,
          x: [0, 4, -3, 4, 0],
          y: [0, -5, 3, -4, 0],
          rotate: [0, 1, -0.5, 1, 0]
        }}
        transition={{ 
          duration: 2.5, 
          delay: 0.3,
          ease: [0.43, 0.13, 0.23, 0.96],
          x: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          },
          y: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          },
          rotate: {
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.5
          }
        }}
      >
        <img src="/images/satellite.png" alt="Satellite" />
      </motion.div>

      {/* Floating Meteorites */}
      <motion.div
        className="meteorite meteorite-1"
        animate={{
          x: [0, 100, 0],
          y: [0, -80, 0],
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="meteorite meteorite-2"
        animate={{
          x: [0, -120, 0],
          y: [0, 100, 0],
          rotate: [360, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      {/* Content Overlay */}
      <motion.div 
        className="hero-content"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        {/* Institution Header */}
        <motion.div className="institution-header" variants={fadeInUp}>
          <img 
            src="/images/mkce_logo.png" 
            alt="MKCE Logo" 
            className="logo-mkce"
          />
          <div className="institution-text">
            <h3>M. Kumarasamy College of Engineering</h3>
            <p>(Autonomous), Karur</p>
          </div>
          <img 
            src="/images/mkce_25_years_logo.png" 
            alt="MKCE 25 Years" 
            className="logo-25years"
          />
        </motion.div>

        {/* Department Info */}
        <motion.div className="department-info" variants={fadeInUp}>
          <h4>Department of Electronics and Communication Engineering</h4>
        </motion.div>

        {/* Association */}
        <motion.div className="association-info" variants={fadeInUp}>
          <p>In association with</p>
          <div className="association-logos">
            <img src="/images/eminence_logo.png" alt="Eminence Association" />
            <span>&</span>
            <img src="/images/iete_logo.png" alt="IETE Students Forum" />
          </div>
        </motion.div>

        {/* Main Title */}
        <motion.h1 className="hero-title" variants={fadeInUp}>
          MEDHA'26
        </motion.h1>

        {/* Subtitle */}
        <motion.h2 className="hero-subtitle" variants={fadeInUp}>
          24-Hour National Level Hackathon
        </motion.h2>

        {/* Theme */}
        <motion.div className="hero-theme" variants={fadeInUp}>
          <span className="theme-label">Theme:</span>
          <span className="theme-text">Engineering Solutions for Sustainable Development</span>
        </motion.div>

        {/* Event Details */}
        <motion.div className="hero-details" variants={fadeInUp}>
          <div className="detail-item">
            <span className="detail-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 3H18V1H16V3H8V1H6V3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V9H19V19ZM19 7H5V5H19V7Z" fill="currentColor"/>
              </svg>
            </span>
            <span>26 & 27 February 2026</span>
          </div>
          <div className="detail-item">
            <span className="detail-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z" fill="currentColor"/>
              </svg>
            </span>
            <span>Team Size: 3–5 Members</span>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.a 
          href="#register"
          className="hero-cta"
          variants={fadeInUp}
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
          Register Now
        </motion.a>
      </motion.div>
    </section>
  )
}
