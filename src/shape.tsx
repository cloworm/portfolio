import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

interface Props {
  color?: string
}

const Shape: FunctionComponent<Props> = ({ color }) => {
  return (
    <motion.div
      animate={{  }}
      transition={{}}
      className={`h-24 w-24 rounded-full opacity-70 bg-theme_oceanBlue ${color ? 'radial-gradient-' + color : 'radial-gradient-purple'}`}
    />
  )
}

export default Shape
