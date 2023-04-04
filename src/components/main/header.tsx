import React from 'react'
import Image from 'next/image'
import router from 'next/router'
import styled from '@emotion/styled'
import Title from 'components/common/title'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const StyledHeader = styled(motion.header)`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: auto;
  height: 60px;
  padding: 30px 25px 0;
  z-index: ${theme['z-index'].max};
  color: ${theme.colors.white};
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
      <Title />
      <Image
        onClick={pushMyPage}
        src="/images/profile.svg"
        alt="profile"
        width={60}
        height={50}
      />
    </StyledHeader>
  )
}

export default MainHeader
