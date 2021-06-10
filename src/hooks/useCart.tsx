import { createContext, ReactNode, useContext, useState } from 'react'
import { api } from '../services/api'
import { Product } from '../types'

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
  setCart: (Array: Product[]) => void;
}

const CartContext = createContext<CartContextData>({} as CartContextData)

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = typeof window !== 'undefined' ? localStorage.getItem('@Ecommerce:cart') : null

    if (storagedCart) {
      return JSON.parse(storagedCart)
    } else return []
  })

  const addProduct = async (productId: number) => {
    try {
      const response = await api.get('/products')

      // Procura o produto referente ao ID nos produtos
      const product = response.data.find((product: Product) => product.id === productId)

      // Procura o produto referente ao ID no carrinho de compras
      const cartProduct = cart.find((product: Product) => product.id === productId)

      if (!cartProduct) {
        const newCart = [...cart, { amount: 1, ...product }].sort((a, b) => {
          if (a.id > b.id) return 1
          if (a.id < b.id) return -1
          return 0
        })
        setCart(newCart)
        localStorage.setItem('@Ecommerce:cart', JSON.stringify(newCart))
      } else {
        updateProductAmount({ productId: cartProduct.id, amount: cartProduct.amount + 1 })
      }
    } catch {
      // TODO
    }
  }

  const removeProduct = (productId: number) => {
    const productsFiltered = cart.filter((product: Product) => product.id !== productId)
    try {
      const newCart = productsFiltered
      setCart(newCart)
      localStorage.setItem('@Ecommerce:cart', JSON.stringify(newCart))
    } catch {
      // TODO
    }
  }

  const updateProductAmount = async ({
    productId,
    amount
  }: UpdateProductAmount) => {
    try {
      const cartProduct = cart.find((product: Product) => product.id === productId)
      if (amount === 0) {
        removeProduct(productId)
      } else {
        const updatedProduct = { ...cartProduct, amount: Math.max(0, amount) }
        const productsFiltered = cart.filter((product: Product) => product.id !== productId)
        const newCart = [...productsFiltered, updatedProduct].sort((a, b) => {
          if (a.id > b.id) return 1
          if (a.id < b.id) return -1
          return 0
        })
        setCart(newCart)
        localStorage.setItem('@Ecommerce:cart', JSON.stringify(newCart))
      }
    } catch { }
  }

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount, setCart }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart(): CartContextData {
  const context = useContext(CartContext)

  return context
}
