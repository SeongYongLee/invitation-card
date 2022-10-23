import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const StyledHeader = styled(motion.header)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 20px;
  padding: 30px 16px 0;
  font-weight: 700;
  font-size: 22.5px;
  line-height: 27px;
`

const MainHeader = () => {
  return (
    <StyledHeader
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
    >
      <span>HOMEPARTY</span>
      <span>USER</span>
    </StyledHeader>
  )
}

export default MainHeader
