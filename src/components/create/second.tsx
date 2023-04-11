import { useCallback } from 'react'
import * as fabric from 'fabric'
import { motion } from 'framer-motion'
import { fadeScaleVariant } from 'styles/motions'
import theme from 'styles/theme'
import { Canvas } from 'utils/canvas'

export const CreateSecond = () => {
  const onLoad = useCallback(async (canvas: fabric.Canvas) => {
    canvas.setDimensions({
      width: window.innerWidth - 34,
      height: 500,
    })
    const rect = new fabric.Rect({
      top: 100,
      left: window.innerWidth - 140,
      width: 50,
      height: 50,
      fill: theme.colors.primary,
    })
    const circle = new fabric.Circle({
      top: 170,
      left: window.innerWidth - 100,
      radius: 10,
      fill: theme.colors.secondary,
    })
    const text = new fabric.Textbox('TODO: Create Custom ImageEditor', {
      originX: 'center',
      top: 100,
      fontSize: 30,
    })
    canvas.add(rect, circle, text)
    canvas.centerObjectH(text)
  }, [])

  return (
    <motion.div initial="initial" animate="animate" variants={fadeScaleVariant}>
      <Canvas onLoad={onLoad} />
    </motion.div>
  )
}
