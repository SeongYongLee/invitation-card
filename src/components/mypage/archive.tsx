import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Wrapper = styled(motion.div)``

const Letter = styled(motion.div)`
  display: flex;
  justify-content: space-between;

  background: #f7f8fa;
  border-radius: 12px;
  padding: 7.5px 12px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: #000000;
`

const LetterTitle = styled(motion.div)`
  display: flex;
`

const LetterIcon = styled(motion.div)`
  margin: 0 9px 0 0;
  width: 22px;
  height: 16px;
  background: #77aa77;
`

const LetterArrayIcon = styled(motion.div)`
  width: 20px;
  height: 20px;
  background: #77aa77;
`

const AttachedImage = styled(motion.div)`
  background: #aa7777;
  margin: 10px 0 12px;

  height: 212px;
  border: 1px solid #f4f4f4;
  border-radius: 12px;
`

const Title = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;

  letter-spacing: -0.03em;
`

const Date = styled(motion.div)`
  margin: 4px 0;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: #000000;

  opacity: 0.4;
`

const Active = styled(motion.div)`
  display: flex;
  justify-content: right;
  align-items: center;
`

const Clap = styled(motion.div)`
  padding: 0 20px;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 9px;
`

const ClapIcon = styled(motion.div)`
  width: 16px;
  height: 16px;
  background: #77aa77;
`

const ClapCount = styled(motion.div)``

const Comment = styled(motion.div)`
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 9px;
`

const CommentIcon = styled(motion.div)`
  width: 16px;
  height: 16px;
  background: #77aa77;
`

const CommentCount = styled(motion.div)``

const Archive = () => {
  return (
    <Wrapper variants={fadeScaleVariant}>
      <Letter variants={fadeScaleVariant}>
        <LetterTitle>
          <LetterIcon />
          꿈틀희네 러브러브 하우스
        </LetterTitle>
        <LetterArrayIcon />
      </Letter>
      <AttachedImage variants={fadeScaleVariant} />
      <Title variants={fadeScaleVariant}>초대장팀과 함께한 꿈틀희 홈파티</Title>
      <Date variants={fadeScaleVariant}>2022.10.10. 17:30</Date>
      <Active>
        <Clap variants={fadeScaleVariant}>
          <ClapIcon />
          <ClapCount>14</ClapCount>
        </Clap>
        <Comment variants={fadeScaleVariant}>
          <CommentIcon />
          <CommentCount>7</CommentCount>
        </Comment>
      </Active>
    </Wrapper>
  )
}

export default Archive
