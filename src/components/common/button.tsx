import React, { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(motion.button)`
  background-color: ${theme.colors.black};
  border-radius: 12px;
  width: 100%;
  height: 50px;
  margin: 0 16px;
  color: white;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
`

export default function Button({ children, onClick }: Props) {
  return (
    <Wrapper>
      <StyledButton variants={fadeScaleVariant} onClick={onClick}>
        {children}
      </StyledButton>
    </Wrapper>
  )
}
