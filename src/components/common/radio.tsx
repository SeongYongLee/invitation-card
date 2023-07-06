import React, { ChangeEvent, HTMLAttributes, useState } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Container = styled(motion.div)`
  display: flex;
  gap: 10px;
`

const RadioWrapper = styled(motion.div)<{
  width?: number
  height?: number
  checked: boolean
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ checked }) =>
    checked ? theme.colors.primary : theme.colors.white};
  border-radius: 29px;
  min-width: ${({ width }) => (width ? `${width}px` : '50px')};
  height: ${({ height }) => (height ? `${height}px` : '36px')};
`

const StyledRadio = styled(motion.input)`
  position: absolute;
  appearance: none;
`

const StyledLabel = styled(motion.label)<{ checked: boolean }>`
  white-space: nowrap;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  padding: 9px 16px;
  color: ${({ checked }) =>
    checked ? theme.colors.white : theme.colors.tertiary};
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
        <RadioWrapper key={index} checked={value === checkedValue}>
          <StyledRadio
            id={`${name}-${value}`}
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
          <StyledLabel
            htmlFor={`${name}-${value}`}
            checked={value === checkedValue}
          >
            {value}
          </StyledLabel>
        </RadioWrapper>
      ))}
    </Container>
  )
}
