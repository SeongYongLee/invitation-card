import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Wrapper = styled(motion.div)<{ horizontalMargin?: number }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 130%;
  margin: ${({ horizontalMargin }) =>
    `0 ${horizontalMargin !== 0 ? `${horizontalMargin}px` : 0}`};
`

interface Props {
  text: string
  secondText?: string
  horizontalMargin?: number
}

export const Title = ({ text, secondText, horizontalMargin }: Props) => {
  return (
    <Wrapper
      horizontalMargin={horizontalMargin}
      initial="hidden"
      animate="visible"
      variants={fadeScaleVariant}
    >
      <div>{text}</div>
      <div>{secondText}</div>
    </Wrapper>
  )
}
