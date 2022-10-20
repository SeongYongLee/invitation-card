import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const StyledHeader = styled(motion.header)`
  background-color: ${theme.colors.red};
  height: 50px;
`

export const CreateHeader = () => {
  return (
    <StyledHeader
      initial="hidden"
      animate="visible"
      variants={fadeScaleVariant}
    >
      초대장 생성 페이지 Header
    </StyledHeader>
  )
}
