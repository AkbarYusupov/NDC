import React from 'react';
import styles from './tab.module.css'
const Card = () => {
  return (
    <div className={styles['tab_cards']}>
      <div className={styles['card_left']}>
        <div className={styles['card']}>
          <img src='/Images/port_img.png' />
          <div className={styles['img_info']}>
            <span className='gl_semibold'>Snitch</span>
            <p className='gl_regular'>Branding, 2021</p>
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