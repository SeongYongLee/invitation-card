import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

import { Title } from './common/title'

export const CreateComplete = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'초대장 생성 완료 :tada:'} />
      <motion.div variants={fadeScaleVariant}>
        초대장 생성 완료 :tada:
      </motion.div>
      <motion.div variants={fadeScaleVariant}>
        초대장 생성 완료 :tada:
      </motion.div>
      <motion.div variants={fadeScaleVariant}>
        초대장 생성 완료 :tada:
      </motion.div>
      <motion.div variants={fadeScaleVariant}>
        초대장 생성 완료 :tada:
      </motion.div>
      <motion.div variants={fadeScaleVariant}>
        초대장 생성 완료 :tada:
      </motion.div>
    </motion.div>
  )
}
