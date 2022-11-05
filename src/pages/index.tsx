import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import Button from '../components/Button'
import Forms from '../components/Forms'
import Layout from '../components/Layout'
import Table from '../components/Table'
import Product from '../core/Product'

const Home: NextPage = () => {
  const [producState, setProductState] = useState<Product>(Product.void())
  const [visibleState, setVisibleState] = useState<'table' | 'form'>('table')

  const valueProducts = [
    new Product('1', 'Coffee', 2),
    new Product('2', 'Milk', 2),
    new Product('3', 'Meat', 15),
    new Product('4', 'Candy', 0.5),
    new Product('5', 'Snack', 1.5),
  ]
  
  function selectedProduct(product: Product) {
    setProductState(product)
    setVisibleState('form')
  }

  function removedProduct(product: Product) {

  }

  function saveProduct(product: Product) {
    console.log(`Salvar produto ${product.getProduct}`)
    setVisibleState('table')
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
          <Table products={valueProducts} 
                 selectedProduct={selectedProduct}
                 removedProduct={removedProduct}></Table>
        </>
        )
        : <Forms product={producState}
                 isCanceled={() => setVisibleState('table')}
                 productChanged={saveProduct}></Forms>} 
      </Layout>
    </div>
  )
}

export default Home
