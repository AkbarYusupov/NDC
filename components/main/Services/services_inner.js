import Link from 'next/link';
import React from 'react';
import Button from '../Button/index';
import styles from './index.module.css'
import Card_2 from '../Portfolio/Card-2'
const ServicesInner = () => {
  return (
    <div className='container'>
      <div className={styles['services_top']}>
        <h1 className='gl_semibold'>
          UX&UI design
        </h1>
        <span className='gl_regular'>
          Понимаем, как эмоции в digital становятся впечатлениями, а рациональный результат взаимодействия превращается в потребительский опыт
        </span>
      </div>
      <div className={styles['services_inner-img']}>
        <img src='/Images/ser-inner.png' />
      </div>
      <div className={styles['services_info']}>
        <div className={styles['info_text']}>
          <span className='gl_regular'>Если у вас есть опыт работы в области дизайна, интерес к цифровым продуктам и желание работать в сфере технологий, то вам может подойти работа дизайнером UX или UI. Но вы не совсем понимаете: что требуется для работы дизайнера UX/UI и как им стать?</span>
          <span className='gl_regular'>Перво-наперво: дизайн UX и UI — это два разных элемента единого потребительского опыта. UX относится к пользовательскому опыту, который фокусируется на том, как что-то работает и как люди взаимодействуют с этим. Пользовательский интерфейс или пользовательский интерфейс фокусируется на внешнем виде и макете.</span>
        </div>
        <Link href={'/'}>
          <a className={styles['inner-btn']}>
            <Button />
          </a>
        </Link>
      </div>
      <div className={styles['services_inner-bottom']}>
        <ul>
          <li className='gl_regular'>Brand design</li>
          <li className='gl_regular'>Logo making</li>
          <li className='gl_regular'>Naming</li>
        </ul>
        <ul>
          <li className='gl_regular'>Brand design</li>
          <li className='gl_regular'>Brand design</li>
          <li className='gl_regular'>Naming</li>
        </ul>
        <ul>
          <li className='gl_regular'>Brand design</li>
          <li className='gl_regular'>Brand design</li>
          <li className='gl_regular'>Naming</li>
        </ul>
      </div>
      <div className={styles['inner-cards']}>
        <Card_2 />
      </div>
    </div>
  );
}

export default ServicesInner;
