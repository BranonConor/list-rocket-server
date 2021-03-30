import Head from 'next/head'
import Layout from '../components/layout'

const Dashboard = () => {
  return (
    <Layout>
        <Head>
          <title>List Rocket</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <h1 className="title">
            My Dashboard
          </h1>

        </main>
    </Layout>
  )
}

export default Dashboard