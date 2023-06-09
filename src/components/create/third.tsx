import Input from 'components/common/Input'
import Radio from 'components/common/radio'
import Title from 'components/common/title'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const values = ['집들이', '생일', '이벤트', '직접입력']

export const CreateThird = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'어떤 홈파티인가요?'} />
      <Radio name={'type'} values={values} defaultValueIndex={1} />
      <Title text={'게스트에게 전달할 내용'} />
      <Input placeholder="파티 전달사항을 작성해보세요." />
      <Title text={'홈파티 제목을 지어주세요'} />
      <Input placeholder="예시) 불금의 파자마 파티" />
      <Title text={'장소는 어디인가요?'} />{' '}
      <Input placeholder="예시) 불금의 파자마 파티" />
    </motion.div>
  )
}
