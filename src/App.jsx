import { motion } from 'framer-motion'
import Hero from './components/Hero'
import SignalFlow from './components/SignalFlow'
import About from './components/About'
import Tracks from './components/Tracks'
import Organizers from './components/Organizers'
import Register from './components/Register'
import HowToReach from './components/HowToReach'
import Contact from './components/Contact'
import FeedbackWidget from './components/FeedbackWidget'
import './App.css'

function App() {
  return (
    <div className="app">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <SignalFlow />
        <Hero />
        <About />
        <Tracks />
        <Organizers />
        <Register />
        <HowToReach />
        <Contact />
      </motion.main>
      <FeedbackWidget />
    </div>
  )
}

export default App
