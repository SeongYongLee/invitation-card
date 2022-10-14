import styled from '@emotion/styled'
import React from 'react'
import theme from 'styles/theme'

const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 62px 54px;

  & p {
    font-family: SBAggroB;
    font-weight: normal;
    padding-top: 18px;
    font-size: 32px;
    line-height: 140%;
    color: ${theme.colors.black};

    & span {
      font-family: SBAggroB;
      font-size: 26px;
    }
  }
`

const ButtonComponent = ({}) => {
  return <Button />
}

export default ButtonComponent
