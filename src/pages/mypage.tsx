import { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import { Title } from 'components/create/common/title'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Content = styled(motion.div)`
  margin: 16px;
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

const Profile = styled(motion.div)`
  margin: 10px 0;
  padding: 16px;
  background: #f7f8fa;
  border-radius: 12px;
`

const Icon = styled(motion.div)`
  min-width: 64px;
  height: 64px;
  background: #77aa77;
  border-radius: 32px;
`

const Detail = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 4px;

  margin: 0 10px;

  width: 100%;
`

const User = styled(motion.div)`
  display: flex;
`

const NameWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  width: 100%;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
`

const Email = styled(motion.div)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #000000;
  opacity: 0.4;
`

const EditIcon = styled(motion.div)`
  width: 16px;
  height: 16px;
  background: #77aa77;
`

const ManageDetail = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0 0;
  padding: 8.5px 12px;
  background: #000000;
  border-radius: 12px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: #ffffff;
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
    <Content
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <Header>
        <IconWrapper onClick={pushHome} variants={fadeScaleVariant}>
          {'<'}
        </IconWrapper>
        <div onClick={pushSetting}>설정</div>
      </Header>
      <Title text={'나의 랜선 홈'} horizontalmargin={0} />
      <Profile variants={fadeScaleVariant}>
        <User variants={fadeScaleVariant}>
          <Icon />
          <Detail>
            <NameWrapper>
              꿈틀희
              <EditIcon />
            </NameWrapper>
            <Email>dvsvp@kakao.com</Email>
          </Detail>
        </User>
        <ManageDetail variants={fadeScaleVariant}>
          <div>예정된 홈파티가 없어요</div>
          <ManagementText>{'초대장 관리 >'}</ManagementText>
        </ManageDetail>
      </Profile>
    </Content>
  )
}

export default MyPage
