import { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import { Title } from 'components/create/common/title'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Container = styled(motion.div)`
  background-color: ${theme.colors.bg00};
  color: ${theme.colors.white};
  height: 100vh;
`

const PurpleArea = styled(motion.div)`
  position: absolute;
  height: 309px;
  width: 100%;
  top: 0;
  background-color: ${theme.colors.tertiary};
`

const Content = styled(motion.div)`
  position: relative;
  padding: 16px;
`

const Header = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 86px;
`

const IconWrapper = styled(motion.div)`
  margin: 0 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;

  width: 20px;
  height: 48px;
`

const Email = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: ${theme.colors.black};
  opacity: 0.4;
`

const ManageDetail = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0 0;
  padding: 8.5px 12px;
  background: ${theme.colors.ctamypage};
  border-radius: 12px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: ${theme.colors.black};
`

const ManagementText = styled(motion.div)`
  font-weight: 700;
`

const MyPage: NextPage = () => {
  const pushHome = () => {
    router.push(ROUTES.HOME)
  }
  const pushSetting = () => {
    router.push(ROUTES.SETTING)
  }

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <PurpleArea />
      <Content>
        <Header>
          <IconWrapper onClick={pushHome} variants={fadeScaleVariant}>
            {'<'}
          </IconWrapper>
          <div onClick={pushSetting}>설정</div>
        </Header>
        <Title
          text={'꿈틀희의'}
          secondText={'파티 공간'}
          horizontalmargin={0}
        />
        <ManageDetail variants={fadeScaleVariant}>
          <Email>www.homeparty/Gumtelhee</Email>
          <ManagementText>{'프로필 수정 >'}</ManagementText>
        </ManageDetail>
      </Content>
    </Container>
  )
}

export default MyPage
