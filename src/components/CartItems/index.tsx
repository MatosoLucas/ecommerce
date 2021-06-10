import { Flex, SimpleGrid, Text, Button } from '@chakra-ui/react'
import { DeleteIcon, AddIcon, MinusIcon } from '@chakra-ui/icons'
import { formatPrice } from '../../util/format'
import { useCart } from '../../hooks/useCart'
import { Product } from '../../types'
import Link from 'next/link'

export function CartItems() {
  const { cart, removeProduct, updateProductAmount } = useCart()

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 })
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 })
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId)
  }

  return (
        <SimpleGrid columns={1} spacing={6} align="center">
          {cart.map(product => (
            <Flex p="1" maxW="335px" borderWidth="1px" borderRadius="lg" overflow="hidden" align="stretch" key={product.id}>
              <Text mr="2" ml="0" fontSize="16px" fontWeight="bold">{product.amount}x</Text>
              <Text ml="2" align="left" fontWeight="bold">{product.title}</Text>
              <Flex mx="auto" alignItems="space-between">
                <Button bgColor="white" h="25px" w="5px" onClick={() => handleProductDecrement(product)}><MinusIcon /></Button>
                <Button bgColor="white" h="25px" w="5px" onClick={() => handleRemoveProduct(product.id)}><DeleteIcon /></Button>
                <Button bgColor="white" h="25px" w="5px" onClick={() => handleProductIncrement(product)}><AddIcon /></Button>
              </Flex>
              <Text mr="2" ml="auto" fontWeight="bold">{formatPrice(product.price * product.amount)}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      )
}
