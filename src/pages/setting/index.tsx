import { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import Title from 'components/common/title'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Content = styled(motion.div)`
  margin: ${theme.margin.default}px;
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

const Menu = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 23px;

  padding: 0 10px;
`

const TitleWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  font-size: 20px;
`

const MyPage: NextPage = () => {
  const pushMypage = () => {
    router.push(ROUTES.MYPAGE)
  }
  const pushTerms = () => {
    router.push(ROUTES.TERMS)
  }
  const pushPolicy = () => {
    router.push(ROUTES.POLICY)
  }

  return (
    <Content
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <Header>
        <IconWrapper onClick={pushMypage} variants={fadeScaleVariant}>
          {'<'}
        </IconWrapper>
      </Header>
      <Menu>
        <Title text={'설정'} />
        <TitleWrapper onClick={pushTerms}>
          <Title text={'서비스 이용 약관'} />
          {'>'}
        </TitleWrapper>
        <TitleWrapper onClick={pushPolicy}>
          <Title text={'개인정보처리방침'} />
          {'>'}
        </TitleWrapper>
        <Title text={'만든 사람들'} />
        <Title text={'앱 평가하기'} />
      </Menu>
    </Content>
  )
}

export default MyPage
