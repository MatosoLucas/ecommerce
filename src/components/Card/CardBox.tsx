import { Box, Button, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import Link from 'next/link'

export function CardBox() {
  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={[10]} align="center">
      <Box borderColor="#FA53A0" maxW="335px" borderWidth="1px" overflow="hidden" align="center">
        <Flex bgColor="#FA53A0" h="200px" align="center" justify="center">
          <Image src="/images/burger.png" align="center" justify="center" />
        </Flex>
        <Box >
          <Flex p="2">
            <Text align="left" fontSize="18px" fontWeight="bold">Name</Text>
            <Text ml="auto" fontSize="18px" fontWeight="bold">$0.00</Text>
          </Flex>
        </Box>
        <Box p="4">
          <Text align="left" fontSize="18px">Description that can be a very lng one so this should have some space to fit everything.</Text>
          <Box pt="6">
            <Link href="/cart">
              <Button maxW="250px" w="100%" bgColor="#FA53A0" fontWeight="bold" fontSize="24px" color="#FFFFFF">Add to cart</Button>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box borderColor="#25C0C0" maxW="335px" borderWidth="1px" overflow="hidden" align="center">
        <Flex bgColor="#25C0C0" h="200px" align="center" justify="center">
          <Image src="/images/burger.png" align="center" justify="center" />
        </Flex>
        <Box>
          <Flex p="2">
            <Text align="left" fontSize="18px" fontWeight="bold">Name</Text>
            <Text ml="auto" fontSize="18px" fontWeight="bold">$0.00</Text>
          </Flex>
        </Box>
        <Box p="4">
          <Text align="left" fontSize="18px">Description that can be a very lng one so this should have some space to fit everything.</Text>
          <Box pt="6">
            <Link href="/cart">
              <Button maxW="250px" w="100%" bgColor="#25C0C0" fontWeight="bold" fontSize="24px" color="#FFFFFF">Add to cart</Button>
            </Link>
          </Box>
        </Box>
      </Box>

      <Box borderColor="#F3BC50" maxW="335px" borderWidth="1px" overflow="hidden" align="center">
        <Flex bgColor="#F3BC50" h="200px" align="center" justify="center">
          <Image src="/images/burger.png" align="center" justify="center" />
        </Flex>
        <Box>
          <Flex p="2">
            <Text align="left" fontSize="18px" fontWeight="bold">Name</Text>
            <Text ml="auto" fontSize="18px" fontWeight="bold">$0.00</Text>
          </Flex>

        </Box>
        <Box p="4">
          <Text align="left" fontSize="18px">Description that can be a very lng one so this should have some space to fit everything.</Text>
          <Box pt="6">
            <Link href="/cart">
              <Button maxW="250px" w="100%" bgColor="#F3BC50" fontWeight="bold" fontSize="24px" color="#FFFFFF">Add to cart</Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </SimpleGrid>
  )
}