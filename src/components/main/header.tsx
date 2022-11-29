import React from 'react'
import router from 'next/router'
import styled from '@emotion/styled'
import { Roboto_Serif } from '@next/font/google'
import { ROUTES } from 'constants/routes'
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
  const pushMyPage = () => {
    router.push(ROUTES.MYPAGE)
  }

  return (
    <StyledHeader
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
    >
      <span>Dear.</span>
      <span onClick={pushMyPage}>USER</span>
    </StyledHeader>
  )
}

export default MainHeader
