import ButtonInner from '../Button/index2'
import ButtonUpdated from '../Button//index3'
import styles from './index.module.css'
import Link from 'next/link'
function Services() {
  return (
    <div className='container'>
      <div className={styles['services_top']}>
        <h1 className='gl_semibold'>
        Услуги
        </h1>
        <span className='gl_regular'>
        Понимаем, как эмоции в digital становятся впечатлениями, а рациональный результат взаимодействия превращается в потребительский опыт
        </span>
      </div>
      <div className={styles['services_bottom']}>
        <div className={styles['cards']}>
          <div className={styles['card']}>
            <span className={` gl_semibold ${styles['card_top']}`}>UX&UI design</span>
            <p className={`gl_regular ${styles['card_text']}`}>Понимаем, как эмоции в digital становятся впечатлениями, а рациональный результат взаимодействия превращается в потребительский опыт</p>
            <div className={styles['card_bottom']}>
            <p className={` gl_regular ${styles['card_price']}`}>от 1000$</p>
            <Link href={'inner'}>
            <a className={styles['btn']}>
            <ButtonInner/>
            </a>
            </Link>
            </div>
          </div>
          <div className={styles['card']}>
            <span className={` gl_semibold ${styles['card_top']}`}>UX&UI design</span>
            <p className={`gl_regular ${styles['card_text']}`}>Понимаем, как эмоции в digital становятся впечатлениями, а рациональный результат взаимодействия превращается в потребительский опыт</p>
            <div className={styles['card_bottom']}>
            <p className={` gl_regular ${styles['card_price']}`}>от 1000$</p>
            <Link href={'inner'}>
            <a className={styles['btn']}>
            <ButtonInner/>
            </a>
            </Link>
            </div>
           
          </div>
          <div className={styles['card']}>
            <span className={` gl_semibold ${styles['card_top']}`}>UX&UI design</span>
            <p className={`gl_regular ${styles['card_text']}`}>Понимаем, как эмоции в digital становятся впечатлениями, а рациональный результат взаимодействия превращается в потребительский опыт</p>
            <div className={styles['card_bottom']}>
            <p className={` gl_regular ${styles['card_price']}`}>от 1000$</p>
            <Link href={'inner'}>
            <a className={styles['btn']}>
            <ButtonInner/>
            </a>
            </Link>
            </div>
          </div>
        </div>
        <div className={styles['updated_btn']}>
          <ButtonUpdated/>
        </div>
      </div>
    </div>
  )
}

export default Services