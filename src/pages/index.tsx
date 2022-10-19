import type { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import Button from 'components/common/button'
import MainFooter from 'components/main/footer'
import MainHeader from 'components/main/header'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions/motions'

const Container = styled(motion.div)`
  height: 100vh;
  text-align: center;
`
const Content = styled(motion.div)`
  height: auto;
  min-height: 100%;
`
const MainText = styled(motion.div)`
  padding: 100px 0;
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
      <MainHeader />
      <Content variants={fadeScaleVariant}>
        <MainText variants={fadeScaleVariant}>초대장을 만들어보세요</MainText>
        <Button onClick={pushCreate}>홈파티 초대장 만들기</Button>
        <div>HOMEPARTY가 만든 초대장 2,434개</div>
      </Content>
      <MainFooter />
    </Container>
  )
}

export default Home
