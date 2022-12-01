import type { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import { Inter } from '@next/font/google'
import Button from 'components/common/button'
import HomePartyCard from 'components/main/card/homeparty'
import InvitationCard from 'components/main/card/invitation'
import MainFooter from 'components/main/footer'
import MainHeader from 'components/main/header'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const inter = Inter({})

const Container = styled(motion.div)`
  background-color: ${theme.colors.gray00};
  height: 100vh;
`

const Content = styled(motion.div)`
  height: auto;
  min-height: 100%;
`

const Banner = styled(motion.div)`
  padding: 100px 0 0;
  height: auto;
  text-align: center;
  white-space: pre-wrap;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
`

const Guide = styled(motion.div)`
  font-family: ${inter.style.fontFamily};
  position: absolute;
  bottom: 106px;
  width: 100%;
  overflow-y: scroll;
  background-color: ${theme.colors.gray00};
  @media screen and (max-height: 950px) {
    height: calc(100% - 200px);
  }
`

const GuideText = styled(motion.div)`
  font-family: 'Pretendard';
  font-weight: 800;
  font-size: 22px;
  line-height: 130%;
  margin: 40px 10px 10px;
`

const InvitationCardWrapper = styled(motion.div)`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  overflow-x: auto;
  div:first-of-type {
    margin-left: 15px;
  }
  div:last-of-type {
    margin-right: 15px;
  }
`

const HomePartyCardWrapper = styled(motion.div)``

const NumberOfInvitations = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 10px;
  height: 39px;
  border: 1px solid #c8c8c8;
  border-radius: 12px;
`

const Home: NextPage = () => {
  const pushCreate = () => {
    router.push(ROUTES.CREATE)
  }

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <Content variants={fadeScaleVariant}>
        <MainHeader />
        <Banner variants={fadeScaleVariant}>
          {'홈파티 초대장으로 소중한 사람을\n 초대해보세요'}
        </Banner>
        <Guide variants={fadeScaleVariant}>
          <Button onClick={pushCreate}>홈파티 초대장 만들기</Button>
          <GuideText variants={fadeScaleVariant}>인기 초대장</GuideText>
          <InvitationCardWrapper>
            <InvitationCard />
            <InvitationCard />
            <InvitationCard />
            <InvitationCard />
            <InvitationCard />
            <InvitationCard />
            <InvitationCard />
            <InvitationCard />
          </InvitationCardWrapper>
          <GuideText variants={fadeScaleVariant}>최근 홈파티</GuideText>
          <HomePartyCardWrapper>
            <HomePartyCard />
            <HomePartyCard />
            <HomePartyCard />
            <HomePartyCard />
            <NumberOfInvitations variants={fadeScaleVariant}>
              2,434개의 초대장이 만들어졌어요
            </NumberOfInvitations>
          </HomePartyCardWrapper>
        </Guide>
      </Content>
      <MainFooter />
    </Container>
  )
}

export default Home
