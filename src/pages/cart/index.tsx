import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { CartItems } from '../../components/CartItems'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import Link from 'next/link'

export default function Cart () {
  return (
    <Flex minHeight="100vh" flexDirection="column" >
      <Header />

      <Box pt="16" maxW="335px" w="100%" display="inline-block" mx="auto" boxShadow="inset 0 -32px 0 #F3BC50">
        <Text align="center" lineHeight="1.2" fontWeight="bold" fontSize={64}>Cart</Text>
      </Box>
      <Flex align="center" justify="center" flexDirection="column" flex="1">
        <Flex maxW="335px" w="100%" flexDirection="column">
          <CartItems />
          <Flex pt="16" >
            <Link href="/checkout">
              <Button h="70px" bgColor="#F3BC50" color="#FFFFFF" maxW="335px" w="100%" align="center" justify="center" fontWeight="bold" fontSize="24px">Go to checkout</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}
