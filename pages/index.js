import Head from 'next/head'
import Main from '../components/main/BaseMain/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export default function Home() {
  return (
    <div>
      <Head>
        <title>NDC</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main/>
    </div>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
