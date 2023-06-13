import React, { ReactNode } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const ContantsWrapper = styled(motion.header)<{ padding?: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => (padding ? padding : '0 25px')};

  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.03em;
`

interface Props {
  padding?: string
  previousContent?: ReactNode
  nextContent?: ReactNode
}

export const Header = ({ padding, previousContent, nextContent }: Props) => {
  return (
    <ContantsWrapper
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
      padding={padding}
    >
      {previousContent ? previousContent : <span />}
      {nextContent ? nextContent : <span />}
    </ContantsWrapper>
  )
}
