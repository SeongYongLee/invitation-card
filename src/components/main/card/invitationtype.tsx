import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 99px;
  min-height: 34px;

  background: #323232;
  border: 1px solid #323232;
  border-radius: 40px;
  color: white;

  font-family: 'Pretendard';
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
`

const InvitationTypeCard = () => (
  <Wrapper variants={fadeScaleVariant}>
    <div>집들이</div>
  </Wrapper>
)

export default InvitationTypeCard
