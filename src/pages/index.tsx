import { Box, Button, Image as ChakraImg, Text } from "@chakra-ui/react";
import { Footer } from "../components/Footer";
import { GridItens } from "../components/GridItens";
import { Logo } from "../components/Logo";
import Link from 'next/link'

export default function Home() {
  return (
    <Box>
      <Box h="537px" backgroundImage="url('/assets/vector1.svg')" bgRepeat="no-repeat" bgSize="cover">
        <Logo />
        <Box mt="12px" maxW="335px" mx="auto" align="center" justify="center" position="relative">
          <Text ml="12px" fontWeight="bold" align="left" fontSize={36} color='#FFFFFF' >Everything you've ever wanted, all in one place</Text>
        </Box>
        <ChakraImg ml="auto" src="./images/donut.png" position="relative" top="-50px" />
        <Box>
          <Text fontWeight="bold" align="center" fontSize={24}>All beach related items for you deliverd at your home</Text>
        </Box>
        <Box mt="16" mb="16">
          <GridItens />
        </Box>
        <Box  backgroundImage="url('/assets/vector2.svg')" bgRepeat="no-repeat" bgSize="100%">
          <Text fontWeight="bold" align="center" fontSize={24} mb="36px">Check it out now!</Text>
          <Box align="center" justify="center" position="relative">
            <Link href="/store">
            <Button as="a" h="57px" w="259px" bg="#FA53A0" border="10px" fontSize={24} >Go to Store</Button>
            </Link>
          </Box>
          <ChakraImg ml="auto" src="/images/unicorn.png" position="relative" />
        </Box>
        <Footer />
      </Box>
    </Box>
  )
}
