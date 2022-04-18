import React from 'react';
import Services from '../components/main/Services/index';
import MainForm from '../components/main/Main_form/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const index = () => {
  return (
    <>
    <Services/>
    <MainForm/>
    </>
  );
}

export default index;
export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})