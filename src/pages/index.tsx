import type { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import Button from 'components/common/button'
import HomePartyCard from 'components/main/card/homeparty'
import InvitationCard from 'components/main/card/invitation'
import InvitationTypeCard from 'components/main/card/invitationtype'
import MainFooter from 'components/main/footer'
import MainHeader from 'components/main/header'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Container = styled(motion.div)`
  background-color: ${theme.colors.bg00};
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
  height: auto;
  min-height: 100%;
`

const Guide = styled(motion.div)`
  position: absolute;
  bottom: 153px;
  height: calc(100vh - 153px - 120px);
  width: 100%;
  overflow-y: scroll;
`

const GuideContent = styled(motion.div)`
  width: 100%;
`

const CreateArea = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 330px;
  margin: 0 25px;
  padding: 35px 20px;
  background-color: ${theme.colors.white};
  border-radius: 12px;

  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: ${theme.colors.gray00};
`

const GuideText = styled(motion.div)`
  font-weight: 800;
  font-size: 22px;
  line-height: 130%;
  margin: 25px 25px 15px;
`

const HomePartyCardWrapper = styled(motion.div)``

const InvitationCardTypeWrapper = styled(motion.div)`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  overflow-x: auto;
  div:first-of-type {
    margin-left: 25px;
  }
  div:last-of-type {
    margin-right: 25px;
  }
`

const InvitationCardWrapper = styled(motion.div)`
  display: flex;
  gap: 8px;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin: 20px 0;

  div:first-of-type {
    margin-left: 25px;
  }
  div:last-of-type {
    margin-right: 25px;
  }
`

const Divider = styled(motion.div)`
  height: 60px;
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
      <PurpleArea />
      <Content>
        <MainHeader />
        <Guide>
          <GuideContent variants={fadeScaleVariant}>
            <CreateArea variants={fadeScaleVariant}>
              <div>
                <div>소중한</div>
                <div>사람을 위한</div>
                <div>초대장을 만들어 보세요!</div>
              </div>
              <Button onClick={pushCreate} height={44}>
                초대장 만들기
              </Button>
            </CreateArea>
            <GuideText variants={fadeScaleVariant}>다가오는 파티</GuideText>
            <HomePartyCardWrapper variants={fadeScaleVariant}>
              <HomePartyCard />
              <HomePartyCard />
              <HomePartyCard />
              <HomePartyCard />
            </HomePartyCardWrapper>
            <GuideText variants={fadeScaleVariant}>
              이런 초대장은 어때요?
            </GuideText>
            <InvitationCardTypeWrapper variants={fadeScaleVariant}>
              <InvitationTypeCard />
              <InvitationTypeCard />
              <InvitationTypeCard />
              <InvitationTypeCard />
              <InvitationTypeCard />
              <InvitationTypeCard />
              <InvitationTypeCard />
            </InvitationCardTypeWrapper>
            <InvitationCardWrapper variants={fadeScaleVariant}>
              <InvitationCard />
              <InvitationCard />
              <InvitationCard />
              <InvitationCard />
              <InvitationCard />
              <InvitationCard />
              <InvitationCard />
              <InvitationCard />
            </InvitationCardWrapper>
            <Divider />
          </GuideContent>
        </Guide>
      </Content>
      <MainFooter />
    </Container>
  )
}

export default Home
