import styles from './index.module.css'
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Link from 'next/dist/client/link';
export default function SwiperReviews() {

  return (
    <div className={styles['news_cards']}>
      <Swiper
       slidesPerView={3}
       spaceBetween={25}
       slidesPerGroup={3}
       autoplay={{
         delay: 2500,
       }}
       modules={[Autoplay]}
     className={styles["mySwiper"]}
     breakpoints= {  
      {
        
        320: {       
          slidesPerView: 1,       
          spaceBetween: 10     
       },      
          640: {       
             slidesPerView: 2,       
             spaceBetween: 20     
          },
         1440: {       
          slidesPerView: 3,       
          spaceBetween: 25     
       }
       }
      }
      >
        <SwiperSlide>
         <Link href="/">
         <a>
         <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
                <img src='/Images/News.png' />
              </div>
              <div className={styles['info']}>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 4.23771C3 3.62857 3.4938 3.13477 4.10294 3.13477H11.8971C12.5062 3.13477 13 3.62857 13 4.23771V12.4833C13 13.0924 12.5062 13.5862 11.8971 13.5862H4.10294C3.4938 13.5862 3 13.0924 3 12.4833V4.23771Z" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6.27051H13" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='gl_regular'>14.09.2020</span>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.71484 8.21139C1.71484 8.21139 4.00056 3.43359 8.00056 3.43359C12.0006 3.43359 14.2863 8.21139 14.2863 8.21139C14.2863 8.21139 12.0006 12.9892 8.00056 12.9892C4.00056 12.9892 1.71484 8.21139 1.71484 8.21139Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99944 10.0033C8.94622 10.0033 9.71373 9.20111 9.71373 8.2116C9.71373 7.22208 8.94622 6.41992 7.99944 6.41992C7.05267 6.41992 6.28516 7.22208 6.28516 8.2116C6.28516 9.20111 7.05267 10.0033 7.99944 10.0033Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className='gl_regular'>268 473</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_medium'>
                Бугундан бирламчи тиббиёт муассасаларида ортиқча қоғозбозликка чек қўйилиб, янги тартибда иш юритилади
              </span>
              <p className='gl_regular'>
                Поликлиникаларда юритиладиган 26 турдаги тиббий ҳисоб журналларидан 14 таси қолдирилди. Қолган 14 тасидан 10 таси соддалаштирилди.
              </p>
            </div>
          </div>
         </a>
         </Link>
        </SwiperSlide>
        <SwiperSlide >
        <Link href="/">
         <a>
         <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
                <img src='/Images/News.png' />
              </div>
              <div className={styles['info']}>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 4.23771C3 3.62857 3.4938 3.13477 4.10294 3.13477H11.8971C12.5062 3.13477 13 3.62857 13 4.23771V12.4833C13 13.0924 12.5062 13.5862 11.8971 13.5862H4.10294C3.4938 13.5862 3 13.0924 3 12.4833V4.23771Z" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6.27051H13" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='gl_regular'>14.09.2020</span>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.71484 8.21139C1.71484 8.21139 4.00056 3.43359 8.00056 3.43359C12.0006 3.43359 14.2863 8.21139 14.2863 8.21139C14.2863 8.21139 12.0006 12.9892 8.00056 12.9892C4.00056 12.9892 1.71484 8.21139 1.71484 8.21139Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99944 10.0033C8.94622 10.0033 9.71373 9.20111 9.71373 8.2116C9.71373 7.22208 8.94622 6.41992 7.99944 6.41992C7.05267 6.41992 6.28516 7.22208 6.28516 8.2116C6.28516 9.20111 7.05267 10.0033 7.99944 10.0033Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className='gl_regular'>268 473</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_medium'>
                Бугундан бирламчи тиббиёт муассасаларида ортиқча қоғозбозликка чек қўйилиб, янги тартибда иш юритилади
              </span>
              <p className='gl_regular'>
                Поликлиникаларда юритиладиган 26 турдаги тиббий ҳисоб журналларидан 14 таси қолдирилди. Қолган 14 тасидан 10 таси соддалаштирилди.
              </p>
            </div>
          </div>
         </a>
         </Link>
        </SwiperSlide>
        <SwiperSlide >
        <Link href="/">
         <a>
         <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
                <img src='/Images/News.png' />
              </div>
              <div className={styles['info']}>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 4.23771C3 3.62857 3.4938 3.13477 4.10294 3.13477H11.8971C12.5062 3.13477 13 3.62857 13 4.23771V12.4833C13 13.0924 12.5062 13.5862 11.8971 13.5862H4.10294C3.4938 13.5862 3 13.0924 3 12.4833V4.23771Z" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6.27051H13" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='gl_regular'>14.09.2020</span>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.71484 8.21139C1.71484 8.21139 4.00056 3.43359 8.00056 3.43359C12.0006 3.43359 14.2863 8.21139 14.2863 8.21139C14.2863 8.21139 12.0006 12.9892 8.00056 12.9892C4.00056 12.9892 1.71484 8.21139 1.71484 8.21139Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99944 10.0033C8.94622 10.0033 9.71373 9.20111 9.71373 8.2116C9.71373 7.22208 8.94622 6.41992 7.99944 6.41992C7.05267 6.41992 6.28516 7.22208 6.28516 8.2116C6.28516 9.20111 7.05267 10.0033 7.99944 10.0033Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className='gl_regular'>268 473</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_medium'>
                Бугундан бирламчи тиббиёт муассасаларида ортиқча қоғозбозликка чек қўйилиб, янги тартибда иш юритилади
              </span>
              <p className='gl_regular'>
                Поликлиникаларда юритиладиган 26 турдаги тиббий ҳисоб журналларидан 14 таси қолдирилди. Қолган 14 тасидан 10 таси соддалаштирилди.
              </p>
            </div>
          </div>
         </a>
         </Link>
        </SwiperSlide>
        <SwiperSlide>
        <Link href="/">
         <a>
         <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
                <img src='/Images/News.png' />
              </div>
              <div className={styles['info']}>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 4.23771C3 3.62857 3.4938 3.13477 4.10294 3.13477H11.8971C12.5062 3.13477 13 3.62857 13 4.23771V12.4833C13 13.0924 12.5062 13.5862 11.8971 13.5862H4.10294C3.4938 13.5862 3 13.0924 3 12.4833V4.23771Z" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6.27051H13" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='gl_regular'>14.09.2020</span>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.71484 8.21139C1.71484 8.21139 4.00056 3.43359 8.00056 3.43359C12.0006 3.43359 14.2863 8.21139 14.2863 8.21139C14.2863 8.21139 12.0006 12.9892 8.00056 12.9892C4.00056 12.9892 1.71484 8.21139 1.71484 8.21139Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99944 10.0033C8.94622 10.0033 9.71373 9.20111 9.71373 8.2116C9.71373 7.22208 8.94622 6.41992 7.99944 6.41992C7.05267 6.41992 6.28516 7.22208 6.28516 8.2116C6.28516 9.20111 7.05267 10.0033 7.99944 10.0033Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className='gl_regular'>268 473</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_medium'>
                Бугундан бирламчи тиббиёт муассасаларида ортиқча қоғозбозликка чек қўйилиб, янги тартибда иш юритилади
              </span>
              <p className='gl_regular'>
                Поликлиникаларда юритиладиган 26 турдаги тиббий ҳисоб журналларидан 14 таси қолдирилди. Қолган 14 тасидан 10 таси соддалаштирилди.
              </p>
            </div>
          </div>
         </a>
         </Link>
        </SwiperSlide>
        <SwiperSlide >
        <Link href="/">
         <a>
         <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
                <img src='/Images/News.png' />
              </div>
              <div className={styles['info']}>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 4.23771C3 3.62857 3.4938 3.13477 4.10294 3.13477H11.8971C12.5062 3.13477 13 3.62857 13 4.23771V12.4833C13 13.0924 12.5062 13.5862 11.8971 13.5862H4.10294C3.4938 13.5862 3 13.0924 3 12.4833V4.23771Z" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6.27051H13" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='gl_regular'>14.09.2020</span>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.71484 8.21139C1.71484 8.21139 4.00056 3.43359 8.00056 3.43359C12.0006 3.43359 14.2863 8.21139 14.2863 8.21139C14.2863 8.21139 12.0006 12.9892 8.00056 12.9892C4.00056 12.9892 1.71484 8.21139 1.71484 8.21139Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99944 10.0033C8.94622 10.0033 9.71373 9.20111 9.71373 8.2116C9.71373 7.22208 8.94622 6.41992 7.99944 6.41992C7.05267 6.41992 6.28516 7.22208 6.28516 8.2116C6.28516 9.20111 7.05267 10.0033 7.99944 10.0033Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className='gl_regular'>268 473</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_medium'>
                Бугундан бирламчи тиббиёт муассасаларида ортиқча қоғозбозликка чек қўйилиб, янги тартибда иш юритилади
              </span>
              <p className='gl_regular'>
                Поликлиникаларда юритиладиган 26 турдаги тиббий ҳисоб журналларидан 14 таси қолдирилди. Қолган 14 тасидан 10 таси соддалаштирилди.
              </p>
            </div>
          </div>
         </a>
         </Link>
        </SwiperSlide>
        <SwiperSlide >
        <Link href="/">
         <a>
         <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
                <img src='/Images/News.png' />
              </div>
              <div className={styles['info']}>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M3 4.23771C3 3.62857 3.4938 3.13477 4.10294 3.13477H11.8971C12.5062 3.13477 13 3.62857 13 4.23771V12.4833C13 13.0924 12.5062 13.5862 11.8971 13.5862H4.10294C3.4938 13.5862 3 13.0924 3 12.4833V4.23771Z" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M10 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 2.07422V4.37968" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 6.27051H13" stroke="white" strokeWidth="1.10294" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className='gl_regular'>14.09.2020</span>
                <svg width={16} height={17} viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M1.71484 8.21139C1.71484 8.21139 4.00056 3.43359 8.00056 3.43359C12.0006 3.43359 14.2863 8.21139 14.2863 8.21139C14.2863 8.21139 12.0006 12.9892 8.00056 12.9892C4.00056 12.9892 1.71484 8.21139 1.71484 8.21139Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M7.99944 10.0033C8.94622 10.0033 9.71373 9.20111 9.71373 8.2116C9.71373 7.22208 8.94622 6.41992 7.99944 6.41992C7.05267 6.41992 6.28516 7.22208 6.28516 8.2116C6.28516 9.20111 7.05267 10.0033 7.99944 10.0033Z" stroke="white" strokeWidth="1.14286" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

                <p className='gl_regular'>268 473</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_medium'>
                Бугундан бирламчи тиббиёт муассасаларида ортиқча қоғозбозликка чек қўйилиб, янги тартибда иш юритилади
              </span>
              <p className='gl_regular'>
                Поликлиникаларда юритиладиган 26 турдаги тиббий ҳисоб журналларидан 14 таси қолдирилди. Қолган 14 тасидан 10 таси соддалаштирилди.
              </p>
            </div>
          </div>
         </a>
         </Link>
        </SwiperSlide>

      </Swiper>
    </div>
  )
}