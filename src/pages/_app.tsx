import type { AppProps } from 'next/app'
import Layout from 'styles/layout'

import '../../public/fonts/pretendard/pretendard.css'
import '../../public/fonts/lineseed/lineseed.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
