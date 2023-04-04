import type { NextPage } from 'next'
import Image from 'next/image'
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
`

const PurpleArea = styled(motion.div)`
  position: absolute;
  height: 209px;
  width: 100%;
  background-color: ${theme.colors.tertiary};
  z-index: 0;
`

const Guide = styled(motion.div)`
  position: relative;
  height: calc(100vh - 90px);
  width: 100%;
  overflow-y: scroll;
`

const CreateArea = styled(motion.div)`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 290px;
  margin: 20px 25px;
  padding: 85px 20px 30px;
  border-radius: 12px;
  background: url(${'/images/main_card.svg'}) no-repeat center;
  background-color: ${theme.colors.white};
  color: ${theme.colors.text.main};

  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 130%;
  letter-spacing: -0.03em;
`

const ImageWrapper = styled.div`
  position: absolute;
  top: -10px;
  margin: -10px;
`

const NumberOfInvitations = styled(motion.div)`
  font-style: normal;
  font-size: 16px;
  line-height: 130%;
  letter-spacing: -0.03em;
  margin-top: 6px;
`

const Text = styled(motion.span)`
  font-weight: 300;
`

const Number = styled(motion.span)`
  font-weight: 700;
  color: ${theme.colors.primary};
`

const GuideText = styled(motion.div)`
  font-weight: 700;
  font-size: 20px;
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
      <MainHeader />
      <Guide>
        <CreateArea variants={fadeScaleVariant}>
          <ImageWrapper>
            <Image
              src="/images/balloon.svg"
              alt="balloon"
              width={100}
              height={100}
            />
          </ImageWrapper>
          <div>
            <div>소중한 사람을 위한</div>
            <div>초대장을 만들어 보세요!</div>
            <NumberOfInvitations>
              <Text variants={fadeScaleVariant}>
                만들어진 초대장
                <Number> 2,545개</Number>
              </Text>
            </NumberOfInvitations>
          </div>
          <Button
            onClick={pushCreate}
            kind={'special'}
            label={'초대장 만들기'}
          />
        </CreateArea>
        <GuideText variants={fadeScaleVariant}>다가오는 파티</GuideText>
        <HomePartyCardWrapper variants={fadeScaleVariant}>
          <HomePartyCard />
          <HomePartyCard />
          <HomePartyCard />
          <HomePartyCard />
        </HomePartyCardWrapper>
        <GuideText variants={fadeScaleVariant}>이런 초대장은 어때요?</GuideText>
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
        <MainFooter />
      </Guide>
    </Container>
  )
}

export default Home
