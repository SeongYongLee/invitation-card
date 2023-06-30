import Image from 'next/image'
import styled from '@emotion/styled'
import Radio from 'components/common/radio'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'
import { Swiper, SwiperSlide } from 'swiper/react'

import Title from '../common/title'

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

const cards = [
  {
    src: '/images/card_empty.svg',
  },
  {
    src: '/images/card_event_1.svg',
  },
  {
    src: '/images/card_event_2.svg',
  },
  {
    src: '/images/card_event_3.svg',
  },
  {
    src: '/images/card_gift_1.svg',
  },
  {
    src: '/images/card_gift_2.svg',
  },
  {
    src: '/images/card_gift_3.svg',
  },
  {
    src: '/images/card_homeparty_1.svg',
  },
  {
    src: '/images/card_homeparty_2.svg',
  },
  {
    src: '/images/card_homeparty_3.svg',
  },
]

const ContentWrapper = styled(motion.div)`
  position: relative;
  height: calc(100% - 94px);
`

const StyleSelectWrapper = styled(motion.div)`
  margin: 0 ${theme.margin.default}px;
`

const Divider = styled(motion.div)`
  height: 13px;
`

const HomepartyCardWrapper = styled(motion.div)`
  margin: 66px 0;

  .swiper-slide {
    width: fit-content;
  }
`

const HomepartyCard = styled(motion.div)`
  position: relative;
  flex: 0 0 auto;
  height: 50vh;
  aspect-ratio: 323 / 430;
`

export const CreateFirst = () => {
  return (
    <ContentWrapper
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
    >
      <StyleSelectWrapper>
        <Title text={'나의 초대장 스타일을 선택해 주세요'} />
        <Divider />
        <Radio
          name={'style'}
          values={values}
          defaultValueIndex={0}
          defaultValueSetColor
        />
      </StyleSelectWrapper>
      <HomepartyCardWrapper>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={12}
          slidesOffsetBefore={theme.margin.default}
          slidesOffsetAfter={theme.margin.default}
          grabCursor={true}
        >
          {cards.map(({ src }, index) => (
            <SwiperSlide key={index}>
              <HomepartyCard variants={fadeScaleVariant}>
                <Image src={src} alt={src} fill priority />
              </HomepartyCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </HomepartyCardWrapper>
    </ContentWrapper>
  )
}
