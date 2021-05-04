import { Flex } from "@chakra-ui/layout";
import { HeaderNav } from "./HeaderNav";
import { HeaderLogo } from "./HLogo";

export function Header() {
  return (
    <Flex as="header" w="100%" bgColor="#000000">
      <HeaderLogo />

      <Flex ml="auto">
        <HeaderNav />
      </Flex>
    </Flex>
  )
}