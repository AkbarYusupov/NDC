import React from 'react';
import ServicesInner from '../components/main/Services/services_inner';
import MainForm from '../components/main/Main_form/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const Id = () => {
  return (
    <>
    <ServicesInner/>
    <MainForm/>
    </>
  );
}

export default Id;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})