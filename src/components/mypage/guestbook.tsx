import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Wrapper = styled(motion.div)`
  width: 158px;
  height: 182px;

  background: #f4f4f4;
`

const AttachedImage = styled(motion.div)`
  margin: 14px;
  width: 130px;
  height: 130px;

  background: #22ff22;
`

const Text = styled(motion.div)`
  margin: 0 14px;
  display: flex;
  justify-content: space-between;
`

const Name = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 15px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: #000000;
`

const Date = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: #000000;

  opacity: 0.4;
`

const GuestBook = () => {
  return (
    <Wrapper variants={fadeScaleVariant}>
      <AttachedImage variants={fadeScaleVariant} />
      <Text>
        <Name>꿈틀꿈틀</Name>
        <Date>3주 전</Date>
      </Text>
    </Wrapper>
  )
}

export default GuestBook
