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
  const valueProducts = [
    new Product('1', 'Coffee', 2),
    new Product('2', 'Milk', 2),
    new Product('3', 'Meat', 15),
    new Product('4', 'Candy', 0.5),
    new Product('5', 'Snack', 1.5),
  ]

  const [visible, setVisible] = useState<'table' | 'form'>('table')

  function selectedProduct(product: Product) {
    
  }

  function removedProduct(product: Product) {

  }

  function saveProduct(product: Product) {
    console.log(`Salvar cliente ${product.getProduct}`)
  }

  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-t from-slate-500 to-slate-400`}>
      <Layout title='Register'>
        {visible === 'table' ? (
        <>
          <div className='flex justify-end'>
            <Button onClick={() => setVisible('form')} className='mb-4'>New Product</Button>
          </div>
          <Table products={valueProducts} selectedProduct={selectedProduct} removedProduct={removedProduct}></Table>
        </>
        )
        : <Forms product={valueProducts[2]} isCanceled={() => setVisible('table')} productChanged={saveProduct}></Forms>} 
      </Layout>
    </div>
  )
}

export default Home
