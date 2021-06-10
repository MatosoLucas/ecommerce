import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { CartItems } from '../../components/CartItems'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import Link from 'next/link'
import { useCart } from '../../hooks/useCart'

export default function Cart() {
  const { cart } = useCart()

  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Header />

      <Box pt="16" maxW="335px" w="100%" display="inline-block" mx="auto" boxShadow="inset 0 -32px 0 #F3BC50">
        <Text align="center" lineHeight="1.2" fontWeight="bold" fontSize={64}>Cart</Text>
      </Box>

      { !cart.length
        ?
        (
          <Flex height="100%" alignItems="center" justify="center" justifyContent="flex-start" py="30px" flexDirection="column" flex="auto">
            <Flex align="center" flexDirection="column" alignItems="center" justify="center">
              <Text align="center" justify="center" maxW="335px" fontSize="40px">You don&apos;t have itens on your cart, go check our store to buy something!</Text>
              <Flex pt="16" w="100%">
                <Link href="/store">
                  <Button h="70px" bgColor="#F3BC50" color="#FFFFFF" maxW="335px" w="100%" align="center" justify="center" fontWeight="bold" fontSize="24px">Go to store</Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        )
        :
        (
          <Flex height="100%" alignItems="center" justify="center" justifyContent="flex-start" py="30px" flexDirection="column" flex="auto">
            <CartItems />
            <Flex maxW="335px" w="100%" flexDirection="column">
              <Flex pt="16" >
                <Link href="/checkout">
                  <Button h="70px" bgColor="#F3BC50" color="#FFFFFF" maxW="335px" w="100%" align="center" justify="center" fontWeight="bold" fontSize="24px">Go to checkout</Button>
                </Link>
              </Flex>
            </Flex>
          </Flex>
        )
      }


      <Footer />
    </Flex>
  )
}
