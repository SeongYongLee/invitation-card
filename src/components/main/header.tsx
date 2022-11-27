import React from 'react'
import styled from '@emotion/styled'
import { Roboto_Serif } from '@next/font/google'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const robotoSerif = Roboto_Serif({})

const StyledHeader = styled(motion.header)`
  font-family: ${robotoSerif.style.fontFamily};
  position: relative;
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 20px;
  padding: 30px 16px 0;
  font-weight: 800;
  font-size: 20px;
  line-height: 27px;
`

const MainHeader = () => {
  return (
    <StyledHeader
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
    >
      <span>Dear.</span>
      <span>USER</span>
    </StyledHeader>
  )
}

export default MainHeader
