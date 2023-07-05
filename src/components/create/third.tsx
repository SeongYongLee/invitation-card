import { useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import Input from 'components/common/Input'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'

const values = [
  {
    text: '집들이',
    icon: {
      default: '/images/radio_homeparty.svg',
      pressed: '/images/radio_homeparty_pressed.svg',
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
    text: '이벤트',
    icon: {
      default: '/images/radio_event.svg',
      pressed: '/images/radio_event_pressed.svg',
    },
  },
  {
    text: '직접입력',
    icon: {
      default: '/images/button_text.svg',
      pressed: '/images/button_text_active.svg',
    },
    rightIcon: {
      default: '/images/icon/caret_right.svg',
      pressed: '/images/icon/caret_right.svg',
    },
  },
]

const ContentWrapper = styled(motion.div)`
  height: calc(100% - 94px);
  margin: 0 ${theme.margin.default}px;
  overflow: auto;
`

const SubTitle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  margin: 17px 0 12px;
  color: ${theme.colors.gray00};
  font-size: 16px;
  font-weight: 600;
`

// TODO: opacity 제거
const NameSize = styled(motion.div)`
  color: ${theme.colors.black};
  font-size: 12px;
  opacity: 0.5;
  letter-spacing: -0.36px;
`

const Divider = styled(motion.div)`
  border: 1px solid ${theme.colors.cta01};
  margin: 22px 0 32px;
`

const PartyConceptWrapper = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 48%;
    border: 1px solid ${theme.colors.gray04};
    height: 72px;
    border-radius: 7px;
  }
`

const PartyConcept = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

const ExpandedTitle = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 12px;
`

const ExpandedLabel = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

const BottomMargin = styled(motion.div)`
  height: 100px;
`

export const CreateThird = () => {
  const [name, setName] = useState('')

  return (
    <ContentWrapper
      initial="initial"
      animate="animate"
      variants={fadeScaleVariant}
    >
      <SubTitle>
        {/* TODO: 여기만 색깔 313232 */}
        파티 제목
        <NameSize>{name.length > 20 ? 20 : name.length}/20</NameSize>
      </SubTitle>
      {/* TODO: 투명 input */}
      <Input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        size={20}
        maxLength={20}
        placeholder="파티 제목을 알려주세요!"
      />
      <Divider />
      <SubTitle>파티 컨셉</SubTitle>
      {/* TODO: radio */}
      <PartyConceptWrapper>
        {values.map(({ text, icon, rightIcon }, index) => (
          <PartyConcept key={text}>
            {icon && (
              <Image
                priority
                src={icon.default}
                alt={text}
                width={20}
                height={20}
              />
            )}
            {text}
            {rightIcon && (
              <Image
                priority
                src={rightIcon.default}
                alt={text}
                width={20}
                height={20}
              />
            )}
          </PartyConcept>
        ))}
      </PartyConceptWrapper>
      {/* TODO: date picker */}
      <SubTitle>일시</SubTitle>
      <Input disabled placeholder="TBD" />
      <SubTitle>장소</SubTitle>
      <Input placeholder="파티 장소를 알려주세요." />
      <SubTitle>파티장 메세지</SubTitle>
      {/* TODO: textarea */}
      <Input placeholder="최대 50자까지 입력 가능합니다." />
      <Divider />
      <ExpandedTitle>
        <ExpandedLabel>
          <Image
            priority
            src={'/images/icon/dress.svg'}
            alt={'dress'}
            width={20}
            height={20}
          />
          {'드레스코드 추가'}
        </ExpandedLabel>
        <Image
          priority
          src={'/images/icon/caret_right.svg'}
          alt={'food'}
          width={20}
          height={20}
        />
      </ExpandedTitle>
      <ExpandedTitle>
        <ExpandedLabel>
          <Image
            priority
            src={'/images/icon/food.svg'}
            alt={'food'}
            width={20}
            height={20}
          />
          {'음식정보 추가'}
        </ExpandedLabel>
        <Image
          priority
          src={'/images/icon/caret_right.svg'}
          alt={'food'}
          width={20}
          height={20}
        />
      </ExpandedTitle>
      <BottomMargin />
    </ContentWrapper>
  )
}
