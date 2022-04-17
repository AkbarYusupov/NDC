import React from 'react'
import styles from "./index.module.css"
import Button from '../Button/index'
import MainForm from '../Main_form/index'
import Link from 'next/link'
export default function index_inner() {
  return (
    <div className='container'>
      <div className={styles['portfolio_top']}>
        <h1 className='gl_semibold'>
          National Developers Comunity
        </h1>
      </div>
      <div className={styles['portfolio_inner']}>
        <div className={styles['portfolio_btn']}>
          <Button />
        </div>
        <div className={styles['portfolio_img']}>
          <img src='/Images/port_img.png' />
        </div>
      </div>
      <div className={styles['portfolio_text']}>
        <span className='gl_regular'>
          Понимаем, как эмоции в digital становятся впечатлениями, а рациональный результат взаимодействия превращается в потребительский опыт
        </span>
        <Link href="https://tn-ninjas.vercel.app/" > 
        <a className='gl_bold' target="_blank">
        Открыть сайт
        </a>
        </Link>
      </div>
<div className={styles['image']}>
<img src='/Images/sayt.png'/>
</div>
     <MainForm/>
    </div>
  )
}
