import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { defaultFadeInScaleVariants } from 'styles/motions'
import theme from 'styles/theme'

export interface Props {
  children?: React.ReactNode
}

const StyledButton = styled(motion.button)`
  color: ${theme.colors.black};
`

const Button = ({ children }: Props) => {
  return (
    <StyledButton
      initial="hidden"
      animate="visible"
      variants={defaultFadeInScaleVariants}
    >
      {children}
    </StyledButton>
  )
}

export default Button
