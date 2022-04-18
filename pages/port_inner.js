import React from 'react';
import InnerPort from '../components/main/Portfolio/index_inner'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
const PortInner = () => {
  return (
    <>
    <InnerPort/>
    </>
  );
}

export default PortInner;

export const getServerSideProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})