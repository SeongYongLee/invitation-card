import React from 'react'
import styled from '@emotion/styled'
import Button from 'components/common/button'

const StyledFooter = styled.footer`
  height: 106px;
  transform: translateY(-100%);
`

interface Props {
  text: string
  nextStep: () => void
}

export const CreateFooter = ({ text, nextStep }: Props) => {
  return (
    <StyledFooter>
      <Button onClick={nextStep} label={text} />
    </StyledFooter>
  )
}
