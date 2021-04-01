import Head from 'next/head'
import Layout from '../components/layout'
import LogoLight from '../components/icons/logo'

const Home = () => {
  return (
    <Layout>
        <Head>
          <title>List Rocket</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <LogoLight />
          <h1 className="title">
            Welcome to ListRocket!
          </h1>

        </main>
    </Layout>
  )
}

export default Home
