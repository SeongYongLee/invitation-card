import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const StyledHeader = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 22.5px;
  line-height: 27px;
  margin: 30px 0;
`

const MainHeader = () => {
  return (
    <StyledHeader
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
    >
      <span>HOMEPARTY</span>
      <span>사용자</span>
    </StyledHeader>
  )
}

export default MainHeader
