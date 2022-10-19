import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const StyledButton = styled(motion.button)`
  background-color: ${theme.colors.black};
  width: 264px;
  height: 56px;
  color: white;
  display: inline-block;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
`

export default function Button({ children, onClick }: Props) {
  return (
    <StyledButton variants={fadeScaleVariant} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
