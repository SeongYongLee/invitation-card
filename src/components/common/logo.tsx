import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Wrapper = styled(motion.div)`
  margin-top: 20px;
  font-style: normal;
  font-weight: 800;
  font-size: 28.7078px;

  letter-spacing: -0.03em;

  color: ${theme.colors.white};
`

const Dot = styled(motion.span)`
  color: ${theme.colors.primary};
`

export default function Logo() {
  return (
    <Wrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <motion.span variants={fadeScaleVariant}>Dear</motion.span>
      <Dot variants={fadeScaleVariant}>.</Dot>
    </Wrapper>
  )
}
