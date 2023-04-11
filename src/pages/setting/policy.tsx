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

  height: 100%;
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

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  height: calc(100% - 172px);
`

const Policy: NextPage = () => {
  const pushSetting = () => {
    router.push(ROUTES.SETTING)
  }

  return (
    <Content
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <Header>
        <IconWrapper onClick={pushSetting} variants={fadeScaleVariant}>
          {'<'}
        </IconWrapper>
      </Header>
      <Wrapper>
        <Title text={'개인정보처리방침'} />
      </Wrapper>
    </Content>
  )
}

export default Policy
