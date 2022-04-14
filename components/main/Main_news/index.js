import styles from './index.module.css'
import News from '../Swiper/News/index'
import Link from 'next/dist/client/link';
import { useTranslation } from 'next-i18next';
export default function SwiperNews() {
  const { t } = useTranslation('common');
  return (
   <div className={styles['news']}>
      <div className='container'>
     <div className={styles['news_top']}>
       <h1 className='gl_semibold'>
       {t("news")} 
       </h1>
       <Link href='/'>
       <a className='gl_regular'>
       {t("allNews")} 
       </a>
       </Link>
     </div>

      <News/>
    </div>
   </div>
  )
}