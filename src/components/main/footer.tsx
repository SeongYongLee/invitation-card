import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const StyledFooter = styled(motion.footer)`
  background-color: ${theme.colors.gray};
  height: 106px;
  position: relative;
  transform: translateY(-100%);
`

const MainFooter = () => {
  return (
    <StyledFooter
      initial="hidden"
      animate="visible"
      variants={fadeScaleVariant}
    >
      <span>FOOTER</span>
    </StyledFooter>
  )
}

export default MainFooter
