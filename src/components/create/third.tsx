import Input from 'components/common/Input'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

import { Title } from './common/title'

export const CreateThird = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'홈파티 제목을 지어주세요'} />
      <Input placeholder="예시) 불금의 파자마 파티" />
      <Title text={'장소는 어디인가요?'} />{' '}
      <Input placeholder="예시) 불금의 파자마 파티" />
    </motion.div>
  )
}
