import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Header from '../components/header/index';
import Footer from '../components/footer/index'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


function MyApp({ Component, pageProps }) {
  return(
  <>
  <Head>
        <title>NDS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Header  />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
export default appWithTranslation(MyApp)
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})