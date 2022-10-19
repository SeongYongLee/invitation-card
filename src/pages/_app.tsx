import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import styled from '@emotion/styled'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyles } from 'styles/global'
import { MobileLayout } from 'styles/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const StyledAnimatePresence = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  `

  return (
    <MobileLayout>
      <GlobalStyles />
      <AnimatePresence>
        <StyledAnimatePresence key={pathname}>
          <Component {...pageProps} />
        </StyledAnimatePresence>
      </AnimatePresence>
    </MobileLayout>
  )
}

export default MyApp
