import Input from 'components/common/Input'
import Radio from 'components/common/radio'
import Title from 'components/common/title'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'

const values = [
  {
    text: '나만의 초대장',
    icon: {
      default: '/images/radio_card.svg',
      pressed: '/images/radio_card_pressed.svg',
    },
  },
  {
    text: '생일',
    icon: {
      default: '/images/radio_gift.svg',
      pressed: '/images/radio_gift_pressed.svg',
    },
  },
  {
    text: '집들이',
    icon: {
      default: '/images/radio_homeparty.svg',
      pressed: '/images/radio_homeparty_pressed.svg',
    },
  },
  {
    text: '이벤트',
    icon: {
      default: '/images/radio_event.svg',
      pressed: '/images/radio_event_pressed.svg',
    },
  },
]

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
