import { Box, Button, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { CreditCardBox } from "../../components/Card/CreditCardBox";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default function Checkout() {
  return (
    <Flex minHeight="100vh" flexDirection="column" >
      <Header />

      <Box pt="16" maxW="335px" w="100%" display="inline-block" mx="auto" boxShadow="inset 0 -32px 0 #25C0C0">
        <Text align="center" lineHeight="1.2" fontWeight="bold" fontSize={64}>Checkout</Text>
      </Box>
      <Text pt="12" fontWeight="bold" fontSize={48} align="center" justify="center">$00.00</Text>
      <Flex align="center" justify="center" flexDirection="column" flex="1">
        <Flex maxW="335px" w="100%" flexDirection="column">
          <CreditCardBox />
          <Flex pt="16" pb="4" >
            <Link href="/checkout/success">
              <Button h="70px" bgColor="#25C0C0" color="#FFFFFF" maxW="335px" w="100%" align="center" justify="center" fontWeight="bold" fontSize="24px">Pay</Button>
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Footer />
    </Flex>
  )
}