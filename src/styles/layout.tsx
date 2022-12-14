import React, { HTMLAttributes } from 'react'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'

import { GlobalStyles } from './global'

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
}

export const MobileLayout = styled.main`
  position: relative;
  min-width: 320px;
  margin: 0 auto;
  min-height: 100vh;
`

const AnimatePresenceLayout = styled.div`
  position: absolute;
  height: 100%;
  left: 0;
  right: 0;
`

const Layout = ({ children }: Props) => {
  const { pathname } = useRouter()

  return (
    <MobileLayout>
      <GlobalStyles />
      <AnimatePresence>
        <AnimatePresenceLayout key={pathname}>{children}</AnimatePresenceLayout>
      </AnimatePresence>
    </MobileLayout>
  )
}

export default Layout
