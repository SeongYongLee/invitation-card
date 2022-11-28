import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

import { Title } from './common/title'

export const CreateFourth = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'홈파티는 언제인가요?'} />
      <motion.div variants={fadeScaleVariant}>네번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>네번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>네번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>네번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>네번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>네번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>네번째 단계</motion.div>
    </motion.div>
  )
}
