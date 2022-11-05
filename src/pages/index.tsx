import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <div className={`flex justify-center items-center h-screen bg-gradient-to-t from-slate-500 to-slate-400`}>
      <Layout title='Register'>
        <span>Content</span>
      </Layout>
    </div>
  )
}

export default Home
