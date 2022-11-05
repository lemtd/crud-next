import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Products from '../backend/db/Products'
import Button from '../components/Button'
import Forms from '../components/Forms'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Product from '../core/Product'
import ProductRepository from '../core/ProductRepository'

const Home: NextPage = () => {
  const repo: ProductRepository = new Products()

  const [productState, setProductState] = useState<Product>(Product.void())
  const [productsState, setProductsState] = useState<Product[]>([])
  const [visibleState, setVisibleState] = useState<'table' | 'form'>('table')

  useEffect(getAll, [])

  function getAll() {
    repo.getAll().then(products => {
      setProductsState(productsState)
      setVisibleState('table')
    })
  }
  
  function selectedProduct(product: Product) {
    setProductState(product)
    setVisibleState('form')
  }

  function removedProduct(product: Product) {

  }

  async function saveProduct(product: Product) {
    await repo.save(product)
    getAll()
  }

  function newProduct() {
    setProductState(Product.void())
    setVisibleState('form')
  }

  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-t from-slate-500 to-slate-400`}>
      <Layout title='Register'>
        {visibleState === 'table' ? (
        <>
          <div className='flex justify-end'>
            <Button onClick={() => newProduct()}
                    className='mb-4'>
                New Product
            </Button>
          </div>
          <Table products={productsState} 
                 selectedProduct={selectedProduct}
                 removedProduct={removedProduct}></Table>
        </>
        )
        : <Forms product={productState}
                 isCanceled={() => setVisibleState('table')}
                 productChanged={saveProduct}></Forms>} 
      </Layout>
    </div>
  )
}

export default Home
