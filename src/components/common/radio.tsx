import React, { ChangeEvent, HTMLAttributes, useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'
import { FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

const Container = styled(motion.div)`
  .swiper-slide {
    width: fit-content;
  }
`

interface RadioWrapperProps {
  checked: boolean
  width?: number
  height?: number
  defaultValueSetColor?: boolean
}

const RadioWrapper = styled(motion.div, {
  shouldForwardProp: (props) => props !== 'defaultValueSetColor',
})<RadioWrapperProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${({ checked, defaultValueSetColor }) =>
    checked
      ? theme.colors.primary
      : defaultValueSetColor
      ? theme.colors.gray04
      : theme.colors.white};
  border-radius: 29px;
  width: ${({ width }) => (width ? `${width}px` : 'fit-content')};
  height: ${({ height }) => (height ? `${height}px` : '36px')};
  border: ${({ checked, defaultValueSetColor }) =>
    `1px solid ${
      checked || defaultValueSetColor ? 'transparent' : theme.colors.gray03
    }`};

  transition: width 0.4s, height 0.4s, background-color 0.3s, border 0.3s;
`

const StyledRadio = styled(motion.input)`
  position: absolute;
  appearance: none;
`

const StyledLabel = styled(motion.label)<{ checked: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  padding: 9px 16px;
  color: ${({ checked }) =>
    checked ? theme.colors.white : theme.colors.tertiary};
  white-space: nowrap;

  transition: color 0.2s;
`

export interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string
  values: {
    text: string
    icon?: {
      default: string
      pressed: string
    }
  }[]
  defaultValueIndex?: number
  defaultValueSetColor?: boolean
  width?: number
  height?: number
}

export default function Radio({
  name,
  values,
  defaultValueIndex = 0,
  defaultValueSetColor,
  onChange,
  width,
  height,
}: Props) {
  const [checkedValue, setCheckedValue] = useState(defaultValueIndex)

  return (
    <Container initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={10}
        freeMode={true}
        modules={[FreeMode]}
      >
        {values.map(({ text, icon }, index) => (
          <SwiperSlide key={index}>
            <RadioWrapper
              defaultValueSetColor={
                defaultValueSetColor && defaultValueIndex === index
              }
              checked={index === checkedValue}
            >
              <StyledRadio
                id={`${name}-${index}`}
                name={name}
                type="radio"
                variants={fadeScaleVariant}
                width={width}
                height={height}
                value={text}
                checked={checkedValue === index}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  setCheckedValue(index)
                  if (onChange) {
                    onChange(e)
                  }
                }}
              />
              <StyledLabel
                htmlFor={`${name}-${index}`}
                checked={index === checkedValue}
              >
                {icon && (
                  <Image
                    priority
                    src={index === checkedValue ? icon.pressed : icon.default}
                    alt={text}
                    width={20}
                    height={20}
                  />
                )}
                {text}
              </StyledLabel>
            </RadioWrapper>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}
