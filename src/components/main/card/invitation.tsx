import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Wrapper = styled(motion.div)`
  flex: 0 0 auto;
  height: 212px;
  width: 134px;
  background-color: ${theme.colors.gray00};
  border-radius: 17px;
`

const InvitationCard = () => <Wrapper variants={fadeScaleVariant} />

export default InvitationCard
