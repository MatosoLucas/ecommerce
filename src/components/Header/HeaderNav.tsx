import { HStack, Icon } from "@chakra-ui/react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export function HeaderNav() {
  return (
    <HStack
      spacing="6"
      mr="4"
    >
      <Icon as={AiOutlineShoppingCart} fontSize="24" color="white" />
      <Icon as={GiHamburgerMenu} fontSize="24" color="white" />
    </HStack>
  )
}