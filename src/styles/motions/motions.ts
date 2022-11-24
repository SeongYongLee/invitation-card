import { Variants } from 'framer-motion'

const defaultSetting = {
  defaultFadeIn: {
    duration: 0.6,
    x: 300,
  },
  defaultFadeOut: {
    duration: 1,
    x: 300,
  },
  ease: [0.6, -0.1, 0.01, 0.99],
  staggerChildren: 0.2,
}
const { defaultFadeIn, defaultFadeOut, ease, staggerChildren } = defaultSetting

const fadeOut = {
  opacity: 0,
  transition: { duration: defaultFadeOut.duration, ease },
}

const fadeIn = {
  opacity: 1,
  transition: { duration: defaultFadeIn.duration, ease, staggerChildren },
}

const fadeScaleInitial = {
  scale: 0.7,
  ...fadeOut,
}

const fadeScaleAnimate = {
  scale: 1,
  ...fadeIn,
}

export const fadeVariant: Variants = {
  initial: fadeOut,
  animate: fadeIn,
  exit: fadeOut,
}

export const fadeScaleVariant: Variants = {
  initial: fadeScaleInitial,
  animate: fadeScaleAnimate,
  exit: fadeScaleInitial,
}
