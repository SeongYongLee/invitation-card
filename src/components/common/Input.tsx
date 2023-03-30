import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled(motion.input)<{ width?: number; height?: number }>`
  background-color: ${theme.colors.ctasp};
  border-radius: 12px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '50px')};
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
`

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  placeholder?: string
  width?: number
  height?: number
}

export default function Input({ children, placeholder, width, height }: Props) {
  return (
    <Wrapper initial="initial" animate="animate" variants={fadeScaleVariant}>
      <StyledInput
        variants={fadeScaleVariant}
        placeholder={placeholder}
        width={width}
        height={height}
      >
        {children}
      </StyledInput>
    </Wrapper>
  )
}
