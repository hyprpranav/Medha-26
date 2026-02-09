import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import './SignalFlow.css'

export default function SignalFlow() {
  const { scrollYProgress } = useScroll()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Transform scroll progress to signal position
  const signalY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const signalOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  return (
    <div className="signal-flow-container">
      {/* Subtle ripple effect as signal moves */}
      <motion.div 
        className="signal-ripple"
        style={{ 
          top: signalY,
          opacity: signalOpacity
        }}
      >
        <div className="ripple-wave ripple-1" />
        <div className="ripple-wave ripple-2" />
        <div className="ripple-wave ripple-3" />
      </motion.div>
    </div>
  )
}
