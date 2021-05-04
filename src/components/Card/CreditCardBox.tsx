import { Box, HStack, Input, Text, VStack } from "@chakra-ui/react";

export function CreditCardBox() {
  return (
    <Box borderColor="#000000" maxW="335px" maxHeight="240px" borderWidth="1px" overflow="hidden" align="center">
      <VStack p="4">
        <Text pb="2" fontWeight="bold" fontSize={24}>Card Information</Text>
      <Input name="Credit Card Number" placeholder="0000 0000 0000 0000" 
      />
      <HStack>
        <Input name="Expiration Date" placeholder="00/00" />
        <Input name="Security Number" placeholder="000"/>
      </HStack>
      <Input name="Name" placeholder="Lucas Matoso Ferreira de Castro"/>
      </VStack>
    </Box>
  )
}