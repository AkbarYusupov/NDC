import React from 'react';
import styles from './tab.module.css'
import Link from 'next/link'
const Card = () => {
  return (
      <div className={styles['tab_cards']} id="tab_cards">
        <div className={styles['card_left']}>
         <Link href="/port_inner">
         <a >
         <div className={styles['card']}>
            <img src='/Images/messi-1.png' />
            <div className={styles['img_info']}>
              <span className='gl_semibold'>Snitch</span>
              <p className='gl_regular'>Branding, 2021</p>
            </div>
          </div>
         </a>
         </Link>
          <div className={styles['card']}>
            <img src='/Images/messi-2.png' />
            <div className={styles['img_info']}>
              <span className='gl_semibold'>Misty</span>
              <p className='gl_regular'>Branding, Packaging 2021</p>
            </div>
          </div>
        </div>
        <div className={styles['card_right']}>
          <div className={styles['card']}>
            <img src='/Images/port_img.png' />
            <div className={styles['img_info']}>
              <span className='gl_semibold'>Misty</span>
              <p className='gl_regular'>Branding, Packaging 2021</p>
            </div>
          </div>
          <div className={styles['card']}>
            <img src='/Images/port_img.png' />
            <div className={styles['img_info']}>
              <span className='gl_semibold'>Misty</span>
              <p className='gl_regular'>Branding, Packaging 2021</p>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card;
