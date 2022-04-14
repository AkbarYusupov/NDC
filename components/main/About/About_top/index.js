import React from 'react'
import styles from './index.module.css'
export default function index() {
  return (
    <div className='container'>
      <div className={styles['about']}>
        <h1 className='gl_semibold'>Мы cоздаем продукт, помогающий
          развивать бизнес</h1>
        <div className={styles['about_img']}>
          <img src='/Images/about.png' />
        </div>
        <div className={styles['competencies']}>
          <div className={styles['competencies_left']}>
            <h3 className='gl_medium'>Наши компетенции</h3>
            <span className='gl_regular'>Мы разрабатываем и интегрируем сложные высоконагруженные проекты для крупного бизнеса. Наши проекты повышают продажи и упрощают жизнь людей.</span>
            <span className='gl_regular'>Мы не любим тяжеловесные интерфейсы и ядовитый дизайн, в проектах используем понятие «нетоксичности». Для нас важно, чтобы сайты говорили на одном языке с пользователем, поэтому день за днем мы создаем новую комфортную модель поведения пользователя.</span>
          </div>
          <div className={styles['competencies_right']}>
            <ul>
              <li className='gl_medium'>личные кабинеты</li>
              <li className='gl_medium'>support 24/7</li>
              <li className='gl_medium'>финансовый сектор</li>
              <li className='gl_medium'>mobile</li>
              <li className='gl_medium'>порталы</li>
              <li className='gl_medium'>дизайн-системы</li>
              <li className='gl_medium'>единая платформа</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
