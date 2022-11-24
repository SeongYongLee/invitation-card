import router from 'next/router'
import Button from 'components/common/button'
import { ROUTES } from 'constants/routes'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

export const CreateComplete = () => {
  const pushHome = () => {
    router.push(ROUTES.HOME)
  }

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeScaleVariant}
    >
      <Button onClick={pushHome}>홈으로 돌아가기</Button>
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
