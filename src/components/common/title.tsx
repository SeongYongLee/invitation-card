import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const TitleWrapper = styled(motion.div)`
  margin-top: 20px;
  font-family: 'LINESeedKR';
  font-style: normal;
  font-weight: 800;
  font-size: 28.7078px;

  letter-spacing: -0.03em;

  color: #ffffff;
`

const Text = styled(motion.span)``

const TitleDot = styled(motion.span)`
  color: #5007f6;
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
