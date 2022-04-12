import Link from 'next/link'
import Button from '../Button/index3'
import styles from './index.module.css'
import { useTranslation } from 'next-i18next';
export default function Portfolio() {
  const { t } = useTranslation('common');
  return (
    <div className="container" id='portfolio'>
      <div className={styles["portfolio"]}>
        <div className={styles["portfolio_top"]}>
          <div className={`gl_semibold ${styles["portfolio_name"]}`}>
           {t("customsCard")}
          </div>
          <ul>
            <li className='gl_regular'>{t("development")}</li>
            <li className='gl_regular'>{t("seeOptimization")}</li>
            <li className='gl_regular'>{t("branding")}</li>
            <li>
              <Link href='/' target="_blank">
                <a className='gl_regular'>www.container.com
                  <img src='/Images/Vector.png' />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['portfolio_bottom']}>
          <img src='/Images/Portfolio.png' />
        </div>
      </div>
      <div className={styles["portfolio"]}>
        <div className={styles["portfolio_top"]}>
          <div className={`gl_semibold ${styles["portfolio_name"]}`}>
            Таможенная карта
          </div>
          <ul>
            <li className='gl_regular'>Разработка</li>
            <li className='gl_regular'>SEO оптимизация</li>
            <li className='gl_regular'>Брендинг</li>
            <li>
              <Link href='/'>
                <a className='gl_regular'>www.container.com
                  <img src='/Images/Vector.png' />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles['portfolio_bottom']}>
          <img src='/Images/Portfolio.png' />
        </div>
      </div>
     <div className={styles['btn']}>
      <Button/>
     </div>
    </div>
  )
}
