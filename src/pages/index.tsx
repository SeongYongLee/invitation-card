import type { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import { Inter } from '@next/font/google'
import Button from 'components/common/button'
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
`

const BannerText = styled(motion.div)`
  font-family: 'Pretendard';
  padding: 20px 0 0;
  white-space: pre-wrap;
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

const InvitationCard = styled(motion.div)`
  flex: 0 0 auto;
  height: 212px;
  width: 134px;
  background-color: ${theme.colors.black};
`

const HomePartyCardWrapper = styled(motion.div)``

const GuideCard = styled(motion.div)`
  height: 100px;
  background-color: ${theme.colors.white};
  margin: 10px 15px;
  padding: 10px;
`

const GuideCardInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const CardMainWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardTag = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 30px;
  padding: 0 10px;
  background: #ffffff;

  border: 1px solid #4d7af6;
  border-radius: 4px;
  font-size: 13px;
  line-height: 16px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
`

const CardName = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: #2d2d2d;
`

const CardSubWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  line-height: 19px;
`

const CardTime = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  color: #696969;
`

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
          <BannerText variants={fadeScaleVariant}>
            {'홈파티 초대장으로 소중한 사람을\n 초대해보세요'}
          </BannerText>
        </Banner>
        <Guide variants={fadeScaleVariant}>
          <Button onClick={pushCreate}>홈파티 초대장 만들기</Button>
          <GuideText variants={fadeScaleVariant}>인기 초대장</GuideText>
          <InvitationCardWrapper>
            <InvitationCard variants={fadeScaleVariant}></InvitationCard>
            <InvitationCard variants={fadeScaleVariant}></InvitationCard>
            <InvitationCard variants={fadeScaleVariant}></InvitationCard>
            <InvitationCard variants={fadeScaleVariant}></InvitationCard>
          </InvitationCardWrapper>
          <GuideText variants={fadeScaleVariant}>최근 홈파티</GuideText>
          <HomePartyCardWrapper>
            <GuideCard variants={fadeScaleVariant}>
              <GuideCardInner variants={fadeScaleVariant}>
                <CardMainWrapper>
                  <CardTag variants={fadeScaleVariant}>D-7</CardTag>
                  <CardName variants={fadeScaleVariant}>
                    꿈틀희의 크리스마스파티
                  </CardName>
                </CardMainWrapper>
                <CardSubWrapper variants={fadeScaleVariant}>
                  <CardTime variants={fadeScaleVariant}>
                    2022.10.10 17:30
                  </CardTime>
                </CardSubWrapper>
              </GuideCardInner>
            </GuideCard>
            <GuideCard variants={fadeScaleVariant}>
              <GuideCardInner variants={fadeScaleVariant}>
                <CardMainWrapper>
                  <CardTag variants={fadeScaleVariant}>이벤트</CardTag>
                  <CardName variants={fadeScaleVariant}>
                    꿈틀희의 크리스마스파티
                  </CardName>
                </CardMainWrapper>
                <CardSubWrapper variants={fadeScaleVariant}>
                  <CardTime variants={fadeScaleVariant}>
                    2022.10.10 17:30
                  </CardTime>
                </CardSubWrapper>
              </GuideCardInner>
            </GuideCard>
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
