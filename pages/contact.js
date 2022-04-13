import React from 'react'
import Contact from '../components/main/Contact/index'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
export default function contact() {
  return (
    <>
    <Contact/>
    </>
  )
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})