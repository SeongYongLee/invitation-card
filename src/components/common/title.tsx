import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

interface WrapperProps {
  horizontalMargin?: number
}

const Wrapper = styled(motion.div, {
  shouldForwardProp: (props) => props !== 'horizontalMargin',
})<WrapperProps>`
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 130%;
  margin: ${({ horizontalMargin }) =>
    `0 ${horizontalMargin !== 0 ? `${horizontalMargin}px` : 0}`};
`

interface Props {
  text: string
  secondLineText?: string
  horizontalMargin?: number
}

export default function Title({
  text,
  secondLineText,
  horizontalMargin,
}: Props) {
  return (
    <Wrapper
      horizontalMargin={horizontalMargin}
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
    >
      <div>{text}</div>
      <div>{secondLineText}</div>
    </Wrapper>
  )
}
