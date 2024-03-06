import React from 'react'
import { useScroll } from "framer-motion"
import { motion } from "framer-motion"

function ScrollBar() {
    const { scrollYProgress } = useScroll()

  return (
    <motion.div id='progress-bar' style={{ scaleX: scrollYProgress }} />
  )
}

export default ScrollBar