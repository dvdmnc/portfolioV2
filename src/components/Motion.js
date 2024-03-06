import React from 'react'

import { motion } from "framer-motion"

function Motion({children}) {
  return (
    <motion.div 
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity:1, y: 0, transition: {
            type: "spring",
            bounce: 0.6,
            duration: 1.2
          }}}
          >
            {children}
    </motion.div>
  )
}

export default Motion