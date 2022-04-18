import Main from '../components/main/BaseMain/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export default function Home() {
  return (
    <div>
      <Main/>
    </div>
  )
}
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})
