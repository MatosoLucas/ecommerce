import { Box, Flex, Text } from '@chakra-ui/react'
import { CardBox } from '../../components/Card/CardBox'
import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'

export default function Items () {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Header />

      <Box pt="16" maxW="335px" w="100%" display="inline-block" mx="auto" boxShadow="inset 0 -32px 0 #FA53A0">
        <Text align="center" lineHeight="1.2" fontWeight="bold" fontSize={64}>Items</Text>
      </Box>
      <Flex align="center" justify="center" flex="1" pt="16" pb="16">
        <CardBox />
      </Flex>

      <Footer />
    </Flex>
  )
}
