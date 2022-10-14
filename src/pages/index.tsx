import type { NextPage } from 'next'

import ButtonComponent from 'components/common/button'

const Home: NextPage = () => {
  return (
    <>
      <div>HOMEPARTY</div>
      <div>초대장을 만들어보세요</div>
      <ButtonComponent />
    </>
  )
}

export default Home
