import Input from 'components/common/Input'
import Radio from 'components/common/radio'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

import { Title } from './common/title'

const values = ['집들이', '생일', '이벤트', '직접입력']

export const CreateSecond = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'어떤 홈파티인가요?'} />
      <Radio name={'type'} values={values} defaultValueIndex={1} />
      <Title text={'게스트에게 전달할 내용'} />
      <Input placeholder="파티 전달사항을 작성해보세요." />
    </motion.div>
  )
}
