import React from 'react'
import Image from 'next/image'
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
  margin: 10px 25px;
  padding: 15px 20px;
  border-radius: 12px;

  font-style: normal;
`

const CardMainWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const CardTagWrapper = styled(motion.div)`
  display: flex;
  justify-content: start;
  gap: 6px;
`

const CardTag = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: fit-content;
  height: 25px;
  padding: 0px 10px;
  background: rgba(108, 99, 129, 0.1);
  border-radius: 16px;

  font-size: 13px;
  line-height: 16px;

  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;

  color: ${theme.colors.primary};
`

const CardName = styled(motion.div)`
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;

  letter-spacing: -0.03em;

  color: ${theme.colors.gray00};
`

const CardSubWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 13px;
  line-height: 19px;
`

const CardTime = styled(motion.div)`
  font-weight: 500;
  font-size: 14px;
  line-height: 130%;

  color: ${theme.colors.text.main.homepartytime};
`

const Reaction = styled(motion.div)`
  display: flex;
  gap: 14px;
`

const ReactionType = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 8px;
`

const HomePartyCard = () => {
  return (
    <Wrapper variants={fadeScaleVariant}>
      <CardMainWrapper>
        <CardTagWrapper variants={fadeScaleVariant}>
          <CardTag variants={fadeScaleVariant}>D-7</CardTag>
          <CardTag variants={fadeScaleVariant}>집들이</CardTag>
        </CardTagWrapper>
        <CardName variants={fadeScaleVariant}>꿈틀희의 크리스마스파티</CardName>
      </CardMainWrapper>
      <CardSubWrapper>
        <CardTime variants={fadeScaleVariant}>12월 28일</CardTime>
        <Reaction>
          <ReactionType>
            <Image src="/images/heart.svg" alt="heart" width={24} height={24} />
            <div>14</div>
          </ReactionType>
          <ReactionType>
            <Image
              src="/images/comment.svg"
              alt="comment"
              width={18}
              height={18}
            />
            <div>7</div>
          </ReactionType>
        </Reaction>
      </CardSubWrapper>
    </Wrapper>
  )
}

export default HomePartyCard
