import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Wrapper = styled(motion.div)<{ horizontalmargin?: number }>`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 800;
  font-size: 22px;
  line-height: 130%;
  margin: ${({ horizontalmargin }) =>
    `0 ${horizontalmargin !== 0 ? `${horizontalmargin}px` : 0}`};
`

interface Props {
  text: string
  secondText?: string
  horizontalmargin?: number
}

export const Title = ({ text, secondText, horizontalmargin }: Props) => {
  return (
    <Wrapper
      horizontalmargin={horizontalmargin}
      initial="hidden"
      animate="visible"
      variants={fadeScaleVariant}
    >
      <div>{text}</div>
      <div>{secondText}</div>
    </Wrapper>
  )
}
