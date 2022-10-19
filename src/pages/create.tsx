import { useState } from 'react'
import type { NextPage } from 'next'
import {
  CreateComplete,
  CreateFirst,
  CreateHeader,
  CreateSecond,
} from 'components/create'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Create: NextPage = () => {
  const [step, setStep] = useState(0)
  const nextStep = () => setStep(step + 1)
  const CreateContainers = [
    <CreateFirst key="first" nextStep={nextStep} />,
    <CreateSecond key="second" nextStep={nextStep} />,
    <CreateComplete key="complete" />,
  ]

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <CreateHeader />
      {CreateContainers[step]}
    </motion.div>
  )
}

export default Create
