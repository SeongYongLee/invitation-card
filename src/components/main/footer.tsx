import React from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import theme from 'styles/theme'

const StyledFooter = styled.footer`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${theme.colors.gray01};
  height: 106px;
  transform: translateY(-100%);
`
const Logo = styled(motion.div)`
  margin: 23px 20px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const INSTAGRAM = styled(motion.div)`
  margin: 23px 20px;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  text-decoration-line: underline;
`

const MainFooter = () => {
  return (
    <StyledFooter>
      <Logo>LOGO</Logo>
      <INSTAGRAM>인스타 링크</INSTAGRAM>
    </StyledFooter>
  )
}

export default MainFooter
