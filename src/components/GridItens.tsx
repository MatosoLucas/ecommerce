import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";

export function GridItens() {
  return (
    <SimpleGrid columns={[2,4]} spacing={0} align="center" maxW="container.md" mx="auto">
      <Box p={4}>
        <Image src="./images/worldwide.png" />
        <Text mt="22px" align="center" justify="center" fontSize="18px">Shipping worldwide</Text>
      </Box>
      <Box p={4}>
        <Image mt="12px" src="./images/fastdelivery.png" />
        <Text mt="26px" align="center" justify="center" fontSize="18px">Fast Delivery</Text>
      </Box>
      <Box p={4}>
        <Image src="./images/approval.png" />
        <Text mt="22px" align="center" justify="center" fontSize="18px">High Approval rate</Text>
      </Box>
      <Box p={4}>
        <Image src="./images/eco.png" />
        <Text mt="28px" align="center" justify="center" fontSize="18px">Eco Friendly</Text>
      </Box>
    </SimpleGrid>
  )
}