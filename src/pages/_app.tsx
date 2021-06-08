import { ChakraProvider } from '@chakra-ui/react'
import { CartProvider } from '../hooks/useCart'
import { theme } from '../styles/theme'

function MyApp ({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </CartProvider>
  )
}

export default MyApp
