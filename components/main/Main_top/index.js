import styles from './index.module.css'
import Link from 'next/dist/client/link';
import Button from '../Button/index'
import { useTranslation } from 'next-i18next';
export default function MainTop() {
  const { t } = useTranslation('common');
  return (
    <div className={styles["main_top"]}>
      <div className={`container ${styles['main_inner']}`}>
        <div className={styles['main_content']}>
          <h1 className={`gl_bold ${styles['content_title']}`}>
          {t("mainTop")}
            <p className='gl_bold'>{t("mainTop-2")}</p>
          </h1>
          <p className={`gl_regular ${styles['content_text']}`}>
            {t("mainTop-3")}
          </p>
        </div>
      <div className={styles['btn']}>
      <Button/>
      </div>
      </div>
      <div className={styles['main_btn-bottom']}>
      <Link href="#portfolio">
       
          
          <a> <button>  </button>     </a>
        
      
        </Link>
        </div>
    </div>
  )
}
