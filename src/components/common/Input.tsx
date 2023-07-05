import React, { InputHTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const Wrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledInput = styled(motion.input)<{ width?: number; height?: number }>`
  background-color: ${theme.colors.cta01};
  border-radius: 12px;
  border: 0;
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '50px')};
  color: ${theme.colors.black};
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  padding: 0 14px;

  ::placeholder {
    color: ${theme.colors.gray02};
  }
`

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode
  width?: number
  height?: number
}

export default function Input({
  children,
  placeholder,
  width,
  height,
  type,
  onChange,
  value,
  size,
  maxLength,
  disabled,
}: Props) {
  return (
    <Wrapper initial="initial" animate="animate" variants={fadeScaleVariant}>
      <StyledInput
        disabled={disabled}
        variants={fadeScaleVariant}
        placeholder={placeholder}
        width={width}
        height={height}
        onChange={onChange}
        type={type}
        value={value}
        size={size}
        maxLength={maxLength}
      >
        {children}
      </StyledInput>
    </Wrapper>
  )
}
