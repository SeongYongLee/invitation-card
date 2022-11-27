import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  background-color: ${theme.colors.white};
  margin: 10px 15px;
  padding: 10px;
`

const CardMainWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardTag = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 30px;
  padding: 0 10px;
  background: #ffffff;

  border: 1px solid #4d7af6;
  border-radius: 4px;
  font-size: 13px;
  line-height: 16px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 130%;
`

const CardName = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: #2d2d2d;
`

const CardSubWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  line-height: 19px;
`

const CardTime = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 130%;

  color: #696969;
`

const HomePartyCard = () => {
  return (
    <Wrapper variants={fadeScaleVariant}>
      <CardMainWrapper>
        <CardTag variants={fadeScaleVariant}>D-7</CardTag>
        <CardName variants={fadeScaleVariant}>꿈틀희의 크리스마스파티</CardName>
      </CardMainWrapper>
      <CardSubWrapper>
        <CardTime variants={fadeScaleVariant}>2022.10.10 17:30</CardTime>
      </CardSubWrapper>
    </Wrapper>
  )
}

export default HomePartyCard
