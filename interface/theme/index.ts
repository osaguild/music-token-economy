import { extendTheme } from '@chakra-ui/react'

const theme: any = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  colors: {
    bg: '#9DECF9',
    primary: '#0BC5EA',
    secondary: '#CBD5E0',
  },
})

export default theme
