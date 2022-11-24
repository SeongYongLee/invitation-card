import Button from 'components/common/button'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

interface Props {
  nextStep: () => void
}

export const CreateSecond = ({ nextStep }: Props) => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <Button onClick={nextStep}>다음 단계로 이동</Button>
      <motion.div variants={fadeScaleVariant}>초대장 생성 페이지</motion.div>
      <motion.div variants={fadeScaleVariant}>두번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>두번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>두번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>두번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>두번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>두번째 단계</motion.div>
      <motion.div variants={fadeScaleVariant}>두번째 단계</motion.div>
    </motion.div>
  )
}
