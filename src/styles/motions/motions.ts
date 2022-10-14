import { Variants } from 'framer-motion'

const defaultEasing = [0.6, -0.05, 0.01, 0.99]

export const defaultFadeInVariants: Variants = {
  hidden: {
    opacity: 0,
    transition: { duration: 0.6, ease: defaultEasing },
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: defaultEasing },
  },
}

export const defaultFadeInScaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.85,
    transition: { duration: 0.6, ease: defaultEasing },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: defaultEasing },
  },
}
