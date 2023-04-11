import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 99px;
  min-height: 34px;

  background: ${theme.colors.primary};
  border: 1px solid ${theme.colors.primary};
  border-radius: 40px;
  color: white;

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
