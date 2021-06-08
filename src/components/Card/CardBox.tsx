import { Box, Button, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { formatPrice } from '../../util/format'
import { api } from '../../services/api'
import type { Product } from '../../types'
import Link from 'next/link'
import { useCart } from '../../hooks/useCart'

interface ProductFormatted extends Product {
  priceFormatted: string;
}

export function CardBox () {
  const [products, setProducts] = useState<ProductFormatted[]>([])
  const { addProduct } = useCart()

  useEffect(() => {
    async function loadProducts () {
      const response = await api.get('/products')
      setProducts(response.data)
    }
    loadProducts()
  }, [])

  function handleAddProduct (id: number) {
    addProduct(id)
  }

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} spacing={[10]} align="center">
      { products.map(product => (
      <Box borderColor="#FA53A0" maxW="335px" borderWidth="1px" overflow="hidden" align="center" key={product.id}>
        <Flex bgColor="#FA53A0" h="200px" align="center" justify="center">
          <Image src="/images/burger.png" align="center" justify="center" />
        </Flex>
        <Box >
          <Flex p="2">
            <Text align="left" fontSize="18px" fontWeight="bold">{product.title}</Text>
            <Text ml="auto" fontSize="18px" fontWeight="bold">{formatPrice(product.price)}</Text>
          </Flex>
        </Box>
        <Box p="4">
          <Text align="left" fontSize="18px">{product.description}</Text>
          <Box pt="6">
            <Link href="/cart">
              <Button maxW="250px" w="100%" bgColor="#FA53A0" fontWeight="bold" fontSize="24px" color="#FFFFFF" onClick={() => handleAddProduct(product.id)}>Add to cart</Button>
            </Link>
          </Box>
        </Box>
      </Box>
      ))}
    </SimpleGrid>
  )
}
