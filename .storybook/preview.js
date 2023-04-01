import '../public/fonts/pretendard/pretendard.css'
import '../public/fonts/lineseed/lineseed.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
