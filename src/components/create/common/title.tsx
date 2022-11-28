import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Wrapper = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 130%;
  margin: 0 10px;
`

interface Props {
  text: string
  secondText?: string
}

export const Title = ({ text, secondText }: Props) => {
  return (
    <Wrapper initial="hidden" animate="visible" variants={fadeScaleVariant}>
      <div>{text}</div>
      <div>{secondText}</div>
    </Wrapper>
  )
}
