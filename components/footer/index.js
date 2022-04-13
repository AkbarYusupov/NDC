import styles from './index.module.css'
import { useTranslation } from 'next-i18next';
import Link from 'next/link'
export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <div className={styles['footer']}>
      <div className='container'>
        <div className={styles['footer_top']}>
          <div className={styles['footer_left']}>
          <Link href='tel:+998 97 666 66 66'>
            <a className='gl_regular'>
              +998 97 666 66 66
            </a>
          </Link>
          <Link href='/info@ndc.uz' target="_blank">
            <a className='gl_regular'>
              info@ndc.uz
            </a>
          </Link>
          <a className='gl_regular'>
           {t("adress")}
          </a>
          </div>
          <div className={styles['footer_right']}>
            <Link href=""> 
            <a className='gl_medium'>{t("UX/UI")}</a>
            </Link>
            <Link href=""> 
            <a className='gl_medium'>{t("branding")}</a>
            </Link>
            <Link href=""> 
            <a className='gl_medium'>{t("CRM")}</a>
            </Link>
            <Link href=""> 
            <a className='gl_medium'>{t("SocialMediaMarketing")}</a>
            </Link>
            <Link href=""> 
            <a className='gl_medium'>{t("naming")}</a>
            </Link>
            <Link href=""> 
            <a className='gl_medium'>{t("UX")}</a>
            </Link>
          </div>
        </div>
        </div>
        <hr/>
        <div className='container'>
        <div className={styles['footer_bottom']}>
          <span className='gl_regular'>
          ©2022 Все права защищены.
          </span>
          <div className={styles['social']}>
            <Link href="facebook:">
            <a className='gl_regular'>Facebook</a>
            </Link>
            <Link href="Instagram:">
            <a className='gl_regular'>Instagram</a>
            </Link>
            <Link href="telegram:">
            <a className='gl_regular'>Telegram</a>
            </Link>
          </div>
        </div>
      </div>
    
    </div>
  )
}
