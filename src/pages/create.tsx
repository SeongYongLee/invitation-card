import { useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import router from 'next/router'
import styled from '@emotion/styled'
import { Header } from 'components/common/header'
import {
  CreateComplete,
  CreateFirst,
  CreateFooter,
  CreateFourth,
  CreateSecond,
  CreateThird,
} from 'components/create'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const totalStep = 5

interface ContainerProps {
  isDarkMode: boolean
}

const Container = styled(motion.div, {
  shouldForwardProp: (props) => props !== 'isDarkMode',
})<ContainerProps>`
  height: 100vh;

  background-color: ${({ isDarkMode }) =>
    isDarkMode ? theme.colors.bgdark : 'transparent'};
  color: ${({ isDarkMode }) =>
    isDarkMode ? theme.colors.white : theme.colors.black};

  transition: background-color 0.3s;
`

const ContentWrapper = styled(motion.div)`
  height: 100vh;
`

const Create: NextPage = () => {
  const [step, setStep] = useState(3)
  const nextStep = () => {
    if (totalStep === step) {
      router.push(ROUTES.HOME)
      return
    }

    setStep(step + 1)
  }

  const previousStep = () => {
    if (step === 1) {
      router.back()
      return
    }

    setStep(step - 1)
  }

  const isDarkMode = step === 2

  const CreateContainers = [
    <CreateFirst key="first" />,
    <CreateSecond key="second" />,
    <CreateThird key="third" />,
    <CreateFourth key="fourth" />,
    <CreateComplete key="complete" />,
  ]

  return (
    <Container
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
      isDarkMode={isDarkMode}
    >
      <ContentWrapper
        initial="initial"
        animate="animate"
        variants={fadeScaleVariant}
      >
        <Header
          padding={`40px ${theme.margin.default}px 30px`}
          previousContent={
            <Image
              src={
                isDarkMode
                  ? '/images/arrow_left_dark.svg'
                  : '/images/arrow_left.svg'
              }
              alt="back"
              width={24}
              height={24}
              onClick={previousStep}
            />
          }
          nextContent={<div onClick={nextStep}>다음</div>}
        />
        {CreateContainers[step - 1]}
      </ContentWrapper>
      <CreateFooter
        text={totalStep === step ? '홈으로 돌아가기' : '다음 단계로 이동'}
        nextStep={nextStep}
      />
    </Container>
  )
}

export default Create
