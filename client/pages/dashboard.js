import Head from 'next/head'
import Layout from '../components/layout'
import LogoLight from '../components/icons/logo'

const Dashboard = () => {
  return (
    <Layout>
        <Head>
          <title>List Rocket</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <LogoLight />
          <h1 className="title">
            My Dashboard
          </h1>

        </main>
    </Layout>
  )
}

export default Dashboard