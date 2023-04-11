import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const TitleWrapper = styled(motion.div)`
  margin-top: 20px;
  font-style: normal;
  font-weight: 800;
  font-size: 28.7078px;

  letter-spacing: -0.03em;

  color: ${theme.colors.white};
`

const Text = styled(motion.span)``

const TitleDot = styled(motion.span)`
  color: ${theme.colors.primary};
`

const Title = () => {
  return (
    <TitleWrapper
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <Text variants={fadeScaleVariant}>Dear</Text>
      <TitleDot variants={fadeScaleVariant}>.</TitleDot>
    </TitleWrapper>
  )
}

export default Title
