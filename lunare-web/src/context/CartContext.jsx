import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const addItem = (product, shade) => {
    setItems((prev) => {
      const key = `${product.slug}-${shade}`
      const existing = prev.find((i) => i.key === key)
      if (existing) {
        return prev.map((i) => i.key === key ? { ...i, quantity: Math.min(99, i.quantity + 1) } : i)
      }
      return [
        ...prev,
        {
          key,
          id: product.slug,
          name: product.name,
          nameKo: product.nameKo,
          type: product.type,
          shade,
          price: typeof product.priceKRW === 'number' ? product.priceKRW : parseInt((product.price ?? '0').replace(/[^0-9]/g, ''), 10),
          quantity: 1,
          image: product.cardImage,
          imageClass: product.relatedImageClass ?? '',
        },
      ]
    })
  }

  const removeItem = (key) => {
    setItems((prev) => prev.filter((i) => i.key !== key))
  }

  const restoreItem = (item, index) => {
    setItems((prev) => {
      if (prev.some((i) => i.key === item.key)) return prev
      const next = [...prev]
      next.splice(Math.min(index, next.length), 0, item)
      return next
    })
  }

  const updateQuantity = (key, direction) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.key !== key) return item
        if (direction === 'increase') return { ...item, quantity: Math.min(99, item.quantity + 1) }
        if (item.quantity <= 1) return item
        return { ...item, quantity: item.quantity - 1 }
      })
    )
  }

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, restoreItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
