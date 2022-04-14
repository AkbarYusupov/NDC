import styles from './index.module.css'
import Link from 'next/dist/client/link';
import { useTranslation } from 'next-i18next';
export default function Initiators() {
  const { t } = useTranslation('common');
  return (
    <div className={styles['initiators']}>
    <div className='container'>
        <h1 className='gl_semibold'>
          {t("initiators")}
        <span>{t("initiators-2")}
        </span>
        </h1>
        <div className={styles['initiators_desc']}>
          <span className='gl_regular'>
         {t("mainTop-3")}
          </span>
          <br className={styles['br']}/>
        <div className={styles['initiators_desc-text']}>
        <span className='gl_regular'>
            {t("mainTop-3")}
          </span>
          <span className='gl_regular'>
            {t("mainTop-3")}
            </span>
        </div>
        </div>
        <div className={styles['initiators_cards']}>
          <Link href='/'>
          <a className={styles['card']}>
            <img src='/Images/about.jpg'/>
          </a>
          </Link>
          <Link href='/'>
          <a className={styles['card']}>
            <img src='/Images/about2.jpg'/>
          </a>
          </Link>
          <Link href='/'>
          <a className={styles['card']}>
            <img src='/Images/about3.jpg'/>
          </a>
          </Link>
          <Link href='/'>
          <a className={styles['card']}>
            <img src='/Images/about4.jpg'/>
          </a>
          </Link>
        </div>
      </div>
    </div>
  )
}
