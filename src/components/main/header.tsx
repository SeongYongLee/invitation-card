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
  padding: 30px 25px 50px;

  background-color: transparent;

  color: ${theme.colors.white};
`

const NumberOfInvitations = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-size: 12px;

  letter-spacing: -0.03em;

  margin-top: 6px;
`

const Text = styled(motion.span)`
  font-weight: 300;
`

const Number = styled(motion.span)`
  font-weight: 700;
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
      <div>
        <Title />
        <NumberOfInvitations>
          <Text variants={fadeScaleVariant}>
            만들어진 초대장
            <Number> 2,545개</Number>
          </Text>
        </NumberOfInvitations>
      </div>
      <div onClick={pushMyPage}>
        <Image src="/images/profile.svg" alt="profile" width={60} height={50} />
      </div>
    </StyledHeader>
  )
}

export default MainHeader
