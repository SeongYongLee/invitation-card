import { useState } from 'react'
import type { NextPage } from 'next'
import router from 'next/router'
import styled from '@emotion/styled'
import {
  CreateComplete,
  CreateFirst,
  CreateFooter,
  CreateFourth,
  CreateHeader,
  CreateSecond,
  CreateThird,
} from 'components/create'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const totalStep = 5

const Container = styled(motion.div)`
  height: 100vh;
`

const Content = styled(motion.div)`
  height: 100vh;
  margin: 17px;
`

const Create: NextPage = () => {
  const [step, setStep] = useState(1)
  const nextStep = () => {
    if (totalStep === step) {
      router.push(ROUTES.HOME)
      return
    }

    setStep(step + 1)
  }
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
    >
      <Content initial="initial" animate="animate" variants={fadeScaleVariant}>
        <CreateHeader totalStep={totalStep} step={step} />
        {CreateContainers[step - 1]}
      </Content>
      <CreateFooter
        text={totalStep === step ? '홈으로 돌아가기' : '다음 단계로 이동'}
        nextStep={nextStep}
      />
    </Container>
  )
}

export default Create
