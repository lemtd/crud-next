import type { NextPage } from 'next'
import Button from '../components/Button'
import Forms from '../components/Forms'
import Layout from '../components/Layout'
import Table from '../components/Table'
import useProducts from '../hooks/useProducts'

const Home: NextPage = () => {
  const {
    productState,
    valueProductsState,
    visibleState,
    setVisibleState,
    selecteProduct,
    removeProduct,
    saveProduct,
    newProduct
  } = useProducts()

  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-t from-slate-500 to-slate-400`}>
      <Layout title='Register'>
        {visibleState === 'table' ? (
        <>
          <div className='flex justify-end'>
            <Button onClick={newProduct}
                    className='mb-4'>
                New Product {console.log(valueProductsState.length)}
            </Button>
          </div>
          <Table products={valueProductsState} 
                 selectedProduct={selecteProduct}
                 removedProduct={removeProduct}></Table>
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
