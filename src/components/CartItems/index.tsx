import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";

export function CartItems() {
  return (
    <SimpleGrid columns={1} spacing={6} align="center">
        <Flex p="1" maxW="335px" borderWidth="1px" borderRadius="lg" overflow="hidden" align="stretch">
          <Text ml="2" align="left" fontSize="18px" fontWeight="bold">Item 1</Text>
          <Text mr ="2" ml="auto" fontSize="18px" fontWeight="bold">$0.00</Text>
        </Flex>
    
        <Flex p="1" maxW="335px" borderWidth="1px" borderRadius="lg" overflow="hidden" align="stretch">
          <Text ml="2" align="left" fontSize="18px" fontWeight="bold">Item 1</Text>
          <Text mr="2" ml="auto" fontSize="18px" fontWeight="bold">$0.00</Text>
        </Flex>
    
        <Flex p="1" maxW="335px" borderWidth="1px" borderRadius="lg" overflow="hidden" align="stretch">
          <Text ml="2" align="left" fontSize="18px" fontWeight="bold">Item 1</Text>
          <Text mr ="2" ml="auto" fontSize="18px" fontWeight="bold">$0.00</Text>
        </Flex>
    </SimpleGrid>
  )
}