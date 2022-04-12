import React from 'react'
import AboutTop from '../components/main/About/About_top/index'
import AboutBottom from '../components/main/About/About_bottom'
import Team from '../components/main/Swiper/Team/index'
import MainPartners from '../components/main/Main_partners/index'
import MainReviews from '../components/main/Main_Reviews/index'
import MainForm from '../components/main/Main_form/index'
export default function about() {
  return (
    <>
    <AboutTop/>
    <AboutBottom/>
    <Team/>
    <MainPartners/>
    <MainReviews/>
    <MainForm/>
    </>
  )
}
