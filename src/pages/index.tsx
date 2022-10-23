import type { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import Button from 'components/common/button'
import MainFooter from 'components/main/footer'
import MainHeader from 'components/main/header'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant, rightToLeftVariant } from 'styles/motions/motions'
import theme from 'styles/theme'

const Container = styled(motion.div)`
  height: 100vh;
  background-color: ${theme.colors.gray02};
`

const Content = styled(motion.div)`
  height: auto;
  min-height: 100%;
`

const Banner = styled(motion.div)`
  padding: 100px 0;
  height: auto;
  text-align: center;
`

const BannerText = styled(motion.div)`
  padding: 50px 0 200px;
`

const Guide = styled(motion.div)`
  font-family: 'Inter';
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 350px;
  background-color: ${theme.colors.white};
`

const NumberOfInvitations = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px auto 25px;
  width: 281px;
  height: 39px;
  border: 1px solid #000000;
  border-radius: 38px;
`

const GuideText = styled(motion.div)`
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin: 0 15px;
`

const GuideCard = styled(motion.div)`
  height: 100px;
  background-color: ${theme.colors.gray02};
  margin: 10px 15px;
  padding: 10px;
`

const GuideCardInner = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const CardTextWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardTag = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 164px;
  height: 21px;

  border: 1px solid #000000;
  border-radius: 63px;
  font-size: 13px;
  line-height: 16px;
`

const CardName = styled(motion.div)`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`

const CardTimeWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  line-height: 19px;
`

const Comment = styled(motion.div)`
  display: flex;
  gap: 14px;
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
            초대장을 만들어보세요
          </BannerText>
          <Button onClick={pushCreate}>홈파티 초대장 만들기</Button>
        </Banner>
        <Guide variants={fadeScaleVariant}>
          <NumberOfInvitations variants={fadeScaleVariant}>
            HOMEPARTY가 만든 초대장 2,434개
          </NumberOfInvitations>
          <GuideText variants={rightToLeftVariant}>
            초대장 이렇게 만들어보세요
          </GuideText>
          <GuideCard variants={rightToLeftVariant}>
            <GuideCardInner variants={rightToLeftVariant}>
              <CardTextWrapper>
                <CardTag variants={rightToLeftVariant}>
                  HOMEPARTY 릴리즈 기념
                </CardTag>
                <CardName variants={rightToLeftVariant}>
                  꿈틀희의 크리스마스파티
                </CardName>
              </CardTextWrapper>
              <CardTimeWrapper variants={rightToLeftVariant}>
                <span>2022.10.10 17:30</span>
                <Comment>
                  <span>댓글</span>
                  <span>14</span>
                </Comment>
              </CardTimeWrapper>
            </GuideCardInner>
          </GuideCard>
        </Guide>
      </Content>
      <MainFooter />
    </Container>
  )
}

export default Home
