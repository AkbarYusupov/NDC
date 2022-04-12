import styles from './index.module.css'
import Auto from '../Swiper/Auto/index'
import { useTranslation } from 'next-i18next';
export default function Reviews() {
  const { t } = useTranslation('common');
  return (
   <div className={styles['reviews']}>
      <div className='container'>
      <h1 className='gl_semibold'>
      {t("reviews")}
      </h1>
      <Auto/>
    </div>
   </div>
  )
}
