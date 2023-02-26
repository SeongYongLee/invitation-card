import React from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import Title from 'components/common/title'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const StyledFooter = styled(motion.footer)`
  position: relative;
  display: flex;
  justify-content: space-between;
  background: ${theme.colors.tertiary};
  height: 133px;
  transform: translateY(-100%);
  padding: 10px 25px;
`

const Address = styled(motion.div)`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 130%;

  text-align: center;
  letter-spacing: -0.03em;

  color: ${theme.colors.white};

  opacity: 0.6;
`

const ImageWrapper = styled(motion.div)`
  margin-top: 20px;
`

const MainFooter = () => {
  return (
    <StyledFooter initial="initial" animate="animate" exit="exit">
      <div>
        <Title />
        <Address variants={fadeScaleVariant}>
          관악구 신림동길 무한 행복 하우스
        </Address>
      </div>
      <ImageWrapper variants={fadeScaleVariant}>
        <Image
          src="/images/instagram.svg"
          alt="instagram"
          width={40}
          height={40}
        />
      </ImageWrapper>
    </StyledFooter>
  )
}

export default MainFooter
