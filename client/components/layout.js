import Footer from '../components/footer'
import Head from 'next/head'
import LogoLight from './icons/logo'
import Navbar from '../components/navbar/navbar'
import styles from './layout.module.scss'

export const siteTitle = 'A productivity tool for streamlining events'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
            />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>

        <div className={styles.flexContainer}>
            <header className={styles.header}>
                <Navbar/>
            </header>
            <main className={styles.main}>
                {children}
                <Footer />
            </main>
        </div>
    </div>
  )
}

export default Layout