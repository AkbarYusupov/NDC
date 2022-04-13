import React from 'react'
import styles from './index.module.css'
import Link from 'next/link'
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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96030.83270508185!2d69.17078286088491!3d41.22256540184173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae610c7037c045%3A0x9b45ef98ade73983!2z0KHQtdGA0LPQtdC70Lgg0YLRg9C80LDQvdC4LCDQotC-0YjQutC10L3RgiwgT2B6YmVraXN0b24!5e0!3m2!1suz!2s!4v1649745606339!5m2!1suz!2s" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        <div className={styles['login']}>
          <div className={styles['login_top']}>
            <div className={styles['phone']}>
              <span className='gl_regular'>Телефон</span>
              <p className='gl_medium'>+998 97 571 66 66</p>
            </div>
            <div className={styles['link']}>
              <span className='gl_regular'>Общие вопросы</span>
              <Link href="/info@ndc.uz">
                <a className='gl_medium'>info@ndc.uz</a>
              </Link>
            </div>
            <div className={styles['adress']}>
              <span className='gl_regular'>Адрес</span>
              <p className='gl_medium'>Узбекистан, Ташкентский
                Сергелийский район</p>
            </div>
            <div className={styles['link_2']}>
              <span className='gl_regular'>PR и мероприятия</span>
              <Link href='/pr@buroburo.ru'>
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
