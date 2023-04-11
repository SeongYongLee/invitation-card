import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'
import { Swiper, SwiperSlide } from 'swiper/react'

import Title from '../common/title'

const HomepartyCardWrapper = styled(motion.div)`
  margin: 20px 0;

  .swiper-slide {
    width: 237px;
  }
`

const HomepartyCard = styled(motion.div)`
  flex: 0 0 auto;
  width: 237px;
  height: 388px;

  background-color: ${theme.colors.cta01};
`

export const CreateFirst = () => {
  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Title text={'초대장 스타일을'} secondLineText={'선택해 주세요'} />
      <HomepartyCardWrapper>
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={12}
          slidesOffsetBefore={25}
          slidesOffsetAfter={25}
          grabCursor={true}
        >
          <SwiperSlide>
            <HomepartyCard variants={fadeScaleVariant}>
              홈파티 카드
            </HomepartyCard>
          </SwiperSlide>
          <SwiperSlide>
            <HomepartyCard variants={fadeScaleVariant}>
              홈파티 카드
            </HomepartyCard>
          </SwiperSlide>
          <SwiperSlide>
            <HomepartyCard variants={fadeScaleVariant}>
              홈파티 카드
            </HomepartyCard>
          </SwiperSlide>
          <SwiperSlide>
            <HomepartyCard variants={fadeScaleVariant}>
              홈파티 카드
            </HomepartyCard>
          </SwiperSlide>
          <SwiperSlide>
            <HomepartyCard variants={fadeScaleVariant}>
              홈파티 카드
            </HomepartyCard>
          </SwiperSlide>
          <SwiperSlide>
            <HomepartyCard variants={fadeScaleVariant}>
              홈파티 카드
            </HomepartyCard>
          </SwiperSlide>
        </Swiper>
      </HomepartyCardWrapper>
    </motion.div>
  )
}
