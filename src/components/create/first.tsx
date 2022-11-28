import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

import { Title } from './common/title'

export const CreateFirst = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'초대장 스타일을'} secondText={'선택해 주세요'} />
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>첫번째 단계</motion.div>
    </motion.div>
  )
}
