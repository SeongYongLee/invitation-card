import React, { ChangeEvent, HTMLAttributes, useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Container = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 8px;
`

const RadioWrapper = styled(motion.div)`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const StyledLabel = styled(motion.label)<{ checked: boolean }>`
  position: absolute;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 130%;
  color: ${({ checked }) => (checked ? 'white' : 'black')};
`

const StyledRadio = styled(motion.input)<{ width?: number; height?: number }>`
  background-color: ${theme.colors.gray00};
  border-radius: 12px;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '50px')};
  margin: 0 16px;

  appearance: none;

  :checked {
    background-color: ${theme.colors.black};
  }
`

export interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string
  values: string[]
  defaultValueIndex?: number
  width?: number
  height?: number
}

export default function Radio({
  name,
  values,
  defaultValueIndex,
  onChange,
  width,
  height,
}: Props) {
  const [checkedValue, setCheckedValue] = useState(
    values[defaultValueIndex ?? 0]
  )

  return (
    <Container initial="initial" animate="animate" variants={fadeScaleVariant}>
      {values.map((value, index) => (
        <RadioWrapper key={index}>
          <StyledRadio
            id={value}
            name={name}
            type="radio"
            variants={fadeScaleVariant}
            width={width}
            height={height}
            value={value}
            checked={checkedValue === value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setCheckedValue(e.target.value)
              if (onChange) {
                onChange(e)
              }
            }}
          />
          <StyledLabel htmlFor={value} checked={value === checkedValue}>
            {value}
          </StyledLabel>
        </RadioWrapper>
      ))}
    </Container>
  )
}
