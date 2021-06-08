import { Box, HStack, Text, VStack } from '@chakra-ui/react'

export function Logo () {
  return (
    <Box fontWeight="bold" position="relative">
    <HStack spacing="4px" justify="center">
        <Text
          fontSize={96}
          color='#25C0C0'
          align="center"
        >
          E</Text>
        <VStack spacing="0px" fontSize={48} align="left">
          <Text lineHeight="" as="span" h="58px" color='#FFFFFF'>commerce.</Text>
          <Text lineHeight="10" as="span" h="58px" color='#FFFFFF'>beach</Text>
        </VStack>
    </HStack>
    </Box>
  )
}
