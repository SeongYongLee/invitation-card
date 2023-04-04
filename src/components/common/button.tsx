import React, { HTMLAttributes } from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

type Kind = 'primary' | 'outline' | 'text' | 'special'

const ColorSet = {
  primary: css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};

    :enabled:active {
      background-color: ${theme.colors.button.primary.active};
    }

    :disabled {
      background-color: ${theme.colors.button.common.disabled};
    }
  `,
  outline: css`
    border: 1px solid ${theme.colors.primary};
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary};

    :enabled:active {
      background-color: ${theme.colors.button.outline.active};
    }

    :disabled {
      border: 1px solid ${theme.colors.gray03};
      background-color: ${theme.colors.button.common.disabled};
      color: ${theme.colors.white};
    }
  `,
  text: css`
    font-weight: 500;
    font-size: 15px;
    background-color: ${theme.colors.white};
    color: ${theme.colors.gray00};

    & div:first-child {
      background: url(${'/images/button_text.svg'});
      transition: background 0.3s;
    }

    :enabled:active {
      color: ${theme.colors.ctasp};

      & div:first-child {
        background: url(${'/images/button_text_active.svg'});
      }
    }

    :disabled {
      color: ${theme.colors.button.common.disabled};

      & div:first-child {
        background: url(${'/images/button_text_disabled.svg'});
      }
    }
  `,
  special: css`
    border-radius: 36px;
    background-color: ${theme.colors.ctasp};
    color: ${theme.colors.white};

    :enabled:active {
      background-color: ${theme.colors.tertiary};
    }

    :disabled {
      background-color: ${theme.colors.button.common.disabled};
    }
  `,
}

interface StyledButtonProps {
  kind: Kind
  width?: number
  height?: number
}

const StyledButton = styled(motion.button)<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '54px')};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  border: 0;
  border-radius: 12px;

  transition: width 0.4s, height 0.4s, color 0.2s, background-color 0.3s,
    border 0.3s;

  ${({ kind }) => ColorSet[kind]};
`

const TextIcon = styled.div`
  height: 16px;
  width: 16px;
`

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  kind?: Kind
  disabled?: boolean
  label?: string
  width?: number
  height?: number
}

export default function Button({
  kind = 'primary',
  disabled = false,
  label,
  onClick,
  width,
  height,
}: Props) {
  return (
    <StyledButton
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
      kind={kind}
      disabled={disabled}
      width={width}
      height={height}
      onClick={onClick}
    >
      {kind === 'text' && <TextIcon />}
      {label}
    </StyledButton>
  )
}
