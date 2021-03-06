import { Box, Flex, Text, Button, Image as ChakraImg } from '@chakra-ui/react'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import Link from 'next/link'
import { useContext } from 'react'
import { useCart } from '../../hooks/useCart'

export default function Success() {
  const { setCart } = useCart();
  
  const clearStorage = () => {
    
    localStorage.removeItem('@Ecommerce:cart')
    setCart([])
  }

  return (
    <Flex minHeight="100vh" flexDirection="column" >
      <Header />

      <Box maxW="335px" pt="16" display="inline-block" mx="auto">
        <ChakraImg mx="auto" src="/assets/ok.svg" position="relative" />
        <Text pt="12" fontSize={36} align="center" justify="center">Thank you for your purchase!</Text>
      </Box>

      <Flex align="center" justify="center" flexDirection="column" flex="1">
        <Flex maxW="335px" w="100%" flexDirection="column">
          <Link href="/store">
            <Button h="70px" bgColor="#FA53A0" color="#FFFFFF" maxW="335px" w="100%" align="center" justify="center" fontWeight="bold" fontSize="24px" onClick={clearStorage}>Go back to store</Button>
          </Link>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}
