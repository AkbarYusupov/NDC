import React from 'react'
import styles from './index.module.css'
function index() {
  return (
    <div className={styles['about_bottom']}>
      <div className='container'>
        <div className={styles['about_bottom-inner']}>
          <div className={styles['about_title']}>
            <span className='gl_medium'> 
              Мы являемся комплексным партнером по дизайну и технологиям в эпоху цифровых технологий. Мы помогаем предприятиям внедрять инновации и оставаться актуальными для своих клиентов, разрабатывая передовые цифровые продукты и осуществляя интеллектуальную и ценную коммуникацию.
            </span>
          </div>
          <div className={styles['box_top']}>
           <div className= {styles["box_card"]}>
           <span className='gl_regular'>20+</span>
           <hr className={styles['line']}/>
            <p className='gl_regular'>Лет в бизнесе</p>
           </div>
           <div className={styles['box_card']}>
           <span className='gl_regular'>30</span>
           <hr className={styles['line']}/>
            <p className='gl_regular'>Члены команды</p>
           </div>
          </div>
          <div className={styles['box_bottom']}>
           <div className={styles['box_card']}>
           <span className='gl_regular'>350+</span>
           <hr className={styles['line']}/>
            <p className='gl_regular'>Реализованные проекты</p>
           </div>
            <div className={styles['box_card']}>
            <span className='gl_regular'>05</span>
            <hr className={styles['line']}/>
            <p className='gl_regular'>Сотрудничество с более чем странами</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index