import { Variants } from 'framer-motion'

const defaultSetting = {
  defaultFadeIn: {
    duration: 0.6,
    x: 300,
  },
  defaultFadeOut: {
    duration: 0.6,
    x: 300,
  },
  ease: [0.6, -0.1, 0.01, 0.99],
  staggerChildren: 0.1,
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
  initial: {
    scale: 1.3,
    ...fadeOut,
  },
}

const fadeScaleAnimate = {
  animate: {
    scale: 1,
    ...fadeIn,
  },
}

const fadeScaleExit = {
  exit: {
    scale: 0.7,
    ...fadeOut,
  },
}

const fadeLeftExit = {
  exit: {
    x: -defaultFadeOut.x,
    ...fadeOut,
  },
}

const fadeRightInitialAndAnimate = {
  initial: {
    x: defaultFadeIn.x,
    ...fadeOut,
  },
  animate: {
    x: 0,
    ...fadeIn,
  },
}

export const fadeVariant: Variants = {
  initial: fadeOut,
  animate: fadeIn,
  exit: fadeOut,
}

export const fadeScaleVariant: Variants = {
  ...fadeScaleInitial,
  ...fadeScaleAnimate,
  ...fadeScaleExit,
}

export const fadeScaleToLeftVariant: Variants = {
  ...fadeScaleInitial,
  ...fadeScaleAnimate,
  ...fadeLeftExit,
}

export const rightToLeftVariant: Variants = {
  ...fadeRightInitialAndAnimate,
  ...fadeLeftExit,
}

export const rightTofadeScaleVariant: Variants = {
  ...fadeRightInitialAndAnimate,
  ...fadeScaleExit,
}
