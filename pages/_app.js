import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next';
import Header from '../components/header/index';
import Footer from '../components/footer/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


function MyApp({ Component, pageProps }) {
  return(
  <>
    <Header  />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
export default appWithTranslation(MyApp)
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})