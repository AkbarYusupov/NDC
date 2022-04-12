import ButtonSmall from '../Button/index2'
import styles from './index.module.css'
import Infinite from '../Swiper/Infinite/index'
import { useTranslation } from 'next-i18next';
export default function Partners() {
  const { t } = useTranslation('common');
  return (
    <>
      <div className='container'>
        <div className={styles['partners_top']}>
          <h1 className='gl_semibold'>
          {t("texno")}
          </h1>
          <div className={styles['btn']}>
            <ButtonSmall />
          </div>
        </div>
      </div>
      <div className={styles['partners_bottom']}>
        <Infinite />
      </div>
    </>
  )
}
