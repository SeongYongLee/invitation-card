import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

import { Title } from './common/title'

const HomepartyCardWrapper = styled(motion.div)`
  display: flex;
  gap: 15px;
  flex-wrap: nowrap;
  overflow-x: auto;

  div:first-of-type {
    margin-left: calc(50% - 118px);
  }
  div:last-of-type {
    margin-right: calc(50% - 118px);
  }
`

const HomepartyCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 237px;
  height: 388px;

  background-color: #f7f8fa;
`

export const CreateFirst = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'초대장 스타일을'} secondText={'선택해 주세요'} />
      <HomepartyCardWrapper>
        <HomepartyCard variants={fadeScaleVariant}>홈파티 카드</HomepartyCard>
        <HomepartyCard variants={fadeScaleVariant}>홈파티 카드</HomepartyCard>
        <HomepartyCard variants={fadeScaleVariant}>홈파티 카드</HomepartyCard>
        <HomepartyCard variants={fadeScaleVariant}>홈파티 카드</HomepartyCard>
        <HomepartyCard variants={fadeScaleVariant}>홈파티 카드</HomepartyCard>
        <HomepartyCard variants={fadeScaleVariant}>홈파티 카드</HomepartyCard>
      </HomepartyCardWrapper>
    </motion.div>
  )
}
