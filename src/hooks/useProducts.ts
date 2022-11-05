import { useEffect, useState } from "react"
import ProductsCollection from "../backend/db/ProductsCollection"
import Product from "../core/Product"
import ProductRepository from "../core/ProductRepository"

export default function useProducts() {
    const repo: ProductRepository = new ProductsCollection()

  const [productState, setProductState] = useState<Product>(Product.void())
  const [valueProductsState, setValueProductsState] = useState<Product[]>([])
  const [visibleState, setVisibleState] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(products => {
      console.log(`${products.length}`)
      setValueProductsState(products)
      setVisibleState('table')
    })
  }
  
  function selecteProduct(product: Product) {
    setProductState(product)
    setVisibleState('form')
  }

  async function removeProduct(product: Product) {
    await repo.remove(product)
    getAll()
  }

  async function saveProduct(product: Product) {
    await repo.save(product)
    getAll()
  }

  function newProduct() {
    setProductState(Product.void())
    setVisibleState('form')
  }

  return {
    productState,
    valueProductsState,
    visibleState,
    setVisibleState,
    selecteProduct,
    removeProduct,
    saveProduct,
    newProduct
  }
}