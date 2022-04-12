import PostfolioTop from '../components/main/Portfolio/index_top';
import PortfolioBottom from '../components/main/Portfolio/index_bottom';
import Tab from '../components/main/Portfolio/tap'
import MainForm from '../components/main/Main_form/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Postfolio = () => {
  return (
    <>
      <PostfolioTop />
      <PortfolioBottom />
      <Tab />
      <MainForm />

    </>
  );
}

export default Postfolio;
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})