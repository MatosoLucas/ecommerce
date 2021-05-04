import { Box, HStack, Text, VStack } from "@chakra-ui/react";

export function Footer() {
  return (
    <Box h="100px" bgColor="#262626">
      <HStack spacing="4px" justify="center" fontWeight="bold">
        <Text
          fontSize={57}
          color='#25C0C0'
          align="center"
        >
          E</Text>
        <VStack spacing="0px" fontSize={28.5} align="left">
          <Text lineHeight="0.8" as="span" color='#FFFFFF'>commerce.</Text>
          <Text lineHeight="1" as="span" color='#FFFFFF'>beach</Text>
        </VStack>
    </HStack>
    </Box>
  )
}