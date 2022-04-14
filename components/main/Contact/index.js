import React from 'react'
import styles from './index.module.css'
import Link from 'next/dist/client/link';
import Button from '../Button/index4'
export default function index() {
  return (
    <div className='container'>
      <div className={styles['map_top']}>
        <h1 className='gl_semibold'>
          Будем рады быть с вами на связи!
        </h1>
      </div>
      <div className={styles['map_bottom']}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d77010.93951973168!2d69.287936!3d41.3401088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1suz!2s!4v1649928974892!5m2!1suz!2s"  style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className={styles['login']}>
          <div className={styles['login_top']}>
            <div className={styles['phone']}>
              <span className='gl_regular'>Телефон</span>
              <span className='gl_medium'>+998 97 571 66 66</span>
            </div>
            <div className={styles['link']}>
              <span className='gl_regular'>Общие вопросы</span>
              <Link href="info@ndc.uz">
                <a className='gl_medium'>info@ndc.uz</a>
              </Link>
            </div>
            <div className={styles['adress']}>
              <span className='gl_regular'>Адрес</span>
              <span className='gl_medium'>Узбекистан, Ташкентский
                Сергелийский район</span>
            </div>
            <div className={styles['link_2']}>
              <span className='gl_regular'>PR и мероприятия</span>
              <Link href='pr@buroburo.ru'>
                <a className='gl_medium'>pr@buroburo.ru</a>
              </Link>
            </div>
          </div>
          <div className={styles['login_center']}>
            <input type="text" placeholder="Имя" className="Имя" required />
            <input type="text" placeholder="Телефон" className="Телефон" required />
            <input type="text" placeholder="Почта" className="Почта" required />
            <input type="text" placeholder="Сообщения" className="Сообщения" required />
          </div>
          <div className={styles['login_bottom']}>
            <div className={styles['checkbox']}>
              <input type="radio" id="horns" name="horns" />
              <label htmlFor="horns" className='gl_regular'>
                Настоящим подтверждаю, что я ознакомлен и согласен с политикой
                <span className='gl_regular'> обработки персональных данных</span>
              </label>
            </div>
            <div className={styles['btn']}>
              <Button/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
