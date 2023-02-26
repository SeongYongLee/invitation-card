import React from 'react'
import router from 'next/router'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const IconWrapper = styled(motion.header)`
  display: flex;
  justify-content: right;
  align-items: center;
  height: 86px;
`
const ProgressBar = styled(motion.div)`
  height: 1px;
  border-bottom: ${theme.colors.gray00};
  margin: 0 0 20px;
  transition: all 500ms ease;
`

interface Props {
  step: number
  totalStep: number
}

export const CreateHeader = ({ step, totalStep }: Props) => {
  const backPage = () => {
    router.back()
  }

  return (
    <>
      <IconWrapper
        onClick={backPage}
        initial="initial"
        animate="animate"
        variants={fadeScaleVariant}
      >
        닫기
      </IconWrapper>
      <ProgressBar
        initial={{
          width: `${((step - 1) / totalStep) * 100}%`,
        }}
        animate={{
          width: `${(step / totalStep) * 100}%`,
          transition: {
            easings: false,
          },
        }}
      />
    </>
  )
}
