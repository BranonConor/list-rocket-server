import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout>
        <Head>
          <title>List Rocket</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className="title">
            Welcome to ListRocket!
          </h1>

        </main>
    </Layout>
  )
}

export default Home
