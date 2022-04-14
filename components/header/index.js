import Link from 'next/dist/client/link';
import styles from './index.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
function Header() {
  const { t } = useTranslation('common');
  const [menu, setMenu] = useState(false);
  const router = useRouter()
  return (
      <div className={styles['header']}>
        <div className="container">
        <div className={styles['header__inner']}>
          <Link href="/">
            <a className={styles['header__logo']}>
              <img src='/Images/brand.png' alt="" />
            </a>
          </Link>
          <div className={styles['header__right']}>
            <div className={styles['header__lang']}>
              <Link href={{
                      pathname: router.pathname,
                      query: router.query
                    }}
                    locale="ru"
                    scroll={false}>
                <a className={` gl_regular ${router.pathname == "/blog" ? styles['header__link-active'] : ""}`}>Rus</a>
              </Link>
              <Link  href={{
                      pathname: router.pathname,
                      query: router.query
                    }}
                    locale="en"
                    scroll={false}>
                <a className="gl_regular">Eng</a>
              </Link>
              <Link  href={{
                      pathname: router.pathname,
                      query: router.query
                    }}
                    locale="uz"
                    scroll={false}>
                <a className="gl_regular">Uzb</a>
              </Link>
            </div>
            <div onClick={() => {
              setMenu(!menu);
              document.querySelector('body').classList.toggle('lock');
            }}
              className={`${styles.header__burger} ${menu ? styles['header__burger-active'] : ''}`}>
              <span></span>

            </div>
        
          </div>
          <nav className={` ${styles.header__menu} ${menu ? styles['header__menu-active'] : 'header__menu'}`}>
            <div className={styles['header__list']}>
              <ul>
                <li>
                  <Link href="/" >
                    <a onClick={() => {
                      setMenu(false);
                      document.querySelector('body').classList.toggle('lock');
                    }

                    } className={`gl_regular ${styles['header__link']}`} >
                     
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="services"  >
                    <a onClick={() => {
                      setMenu(false)
                      document.querySelector('body').classList.toggle('lock');
                    }} className={`gl_regular ${styles['header__link']}`}>{t('services')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="portfolio" >
                    <a onClick={() => {
                      setMenu(false)
                      document.querySelector('body').classList.toggle('lock');
                    }} className={`gl_regular ${styles['header__link']} `}>{t('portfolio')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="about" >
                    <a onClick={() => {
                      setMenu(false)
                      document.querySelector('body').classList.toggle('lock');
                    }} className={`gl_regular ${styles['header__link']} `}>{t('aboutUs')}</a>
                  </Link>
                </li>
                <li>
                  <Link href="contact" >
                    <a onClick={() => {
                      setMenu(false)
                      document.querySelector('body').classList.toggle('lock');
                    }} className={`gl_regular ${styles['header__link']} `}>{t('contact')}</a>
                  </Link>
                </li>
                <div className={styles['header__lang-mobile']}>
              <Link href="/">
                <a className="gl_regular">Rus</a>
              </Link>
              <Link href="/">
                <a className="gl_regular">Eng</a>
              </Link>
              <Link href="/">
                <a className="gl_regular">Uzb</a>
              </Link>
            </div>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}
export default Header;