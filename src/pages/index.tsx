import type { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import Button from 'components/common/button'
import MainFooter from 'components/main/footer'
import MainHeader from 'components/main/header'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions/motions'
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
  height: 120px;
  background-color: ${theme.colors.gray02};
  margin: 10px 15px;
`

const GuideCardInner = styled(motion.div)`
  padding: 10px 15px;
`

const CardName = styled(motion.div)`
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

const CardText = styled(motion.div)`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
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
        <Banner>
          <BannerText variants={fadeScaleVariant}>
            초대장을 만들어보세요
          </BannerText>
          <Button onClick={pushCreate}>홈파티 초대장 만들기</Button>
        </Banner>
        <Guide>
          <NumberOfInvitations>
            HOMEPARTY가 만든 초대장 2,434개
          </NumberOfInvitations>
          <GuideText>초대장 이렇게 만들어보세요</GuideText>
          <GuideCard>
            <GuideCardInner>
              <CardName>HOMEPARTY 릴리즈 기념</CardName>
              <CardText>꿈틀희의 크리스마스파티</CardText>
              <span>2022/10/10 17:30</span>
              <span>댓글</span>
              <span>14</span>
            </GuideCardInner>
          </GuideCard>
        </Guide>
      </Content>
      <MainFooter />
    </Container>
  )
}

export default Home
