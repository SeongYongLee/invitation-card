import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

import { Title } from './common/title'

export const CreateThird = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'홈파티 제목을 지어주세요'} />
      <motion.div variants={fadeScaleVariant}>세번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>세번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>세번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>세번째 단계</motion.div>
      <Title text={'장소는 어디인가요?'} />
      <motion.div variants={fadeScaleVariant}>세번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>세번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>세번째 단계</motion.div>
    </motion.div>
  )
}
