import styles from './index.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
export default function SwiperReviews() {

  return (
    <div className={styles['reviews_cards']}>
      {/* <div className={styles['cursor']}></div> */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loopFillGroupWithBlank={true}
        modules={[Autoplay]}
      //   breakpoints= {  
      // {
      //     320: {       
      //        slidesPerView: 1,
      //        spaceBetween: 10     
      //     },       
      //     640: {       
      //        slidesPerView: 2,       
      //        spaceBetween: 20     
      //     },
      //     1440: {       
      //       slidesPerView: 3,       
      //       spaceBetween: 30     
      //    } }
          
      
      //  }
        className={styles["mySwiper"]}
      >
        <SwiperSlide>
          <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
              <img src='/Images/74.png' alt=''/>
              </div>
              <div className={styles['info']}>
                <span className='gl_regular'>Бахадиров Ибрагим</span>
                <p className='gl_regular'>Директор Artel Групп</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_regular'>
                Информационные технологии — отрасль, в которой хотят работать многие. Программирование, тестирование, администрирование, аналитика — эти и другие направления востребованы в сфере ИТ. В восприятии одних, работа в ИТ-компании — работа мечты, но и рутина глазами других
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
                <img src='/Images/74.png' alt=''/>
              </div>
              <div className={styles['info']}>
                <span className='gl_regular'>Бахадиров Ибрагим</span>
                <p className='gl_regular'>Директор Artel Групп</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_regular'>
                Про ИТ-сферу очень много разнородной информации. С одной стороны, положительной: про высокие зарплаты, сотрудников на бентли с несколькими квартирами и свободным графиком работы. С другой стороны, все знают, что войти в ИТ под силу не каждому: высокие требования к кандидатам и конкуренция усложняют процесс
              </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles['card']}>
            <div className={styles['card_top']}>
              <div className={styles['image']}>
              <img src='/Images/74.png' alt=''/>
              </div>
              <div className={styles['info']}>
                <span className='gl_regular'>Бахадиров Ибрагим</span>
                <p className='gl_regular'>Директор Artel Групп</p>
              </div>
            </div>
            <div className={styles['card_bottom']}>
              <span className='gl_regular'>
                Мы решили вместе с разработчиками, тестировщиками и бизнес-аналитиками ISsoft обсудить плюсы и минусы ИТ-индустрии, а еще ребята поделились своей историей прихода в сферу ИТ. Видео и текстовые отзывы читайте ниже. Для тех, кто не любит лонгриды, мы подготовили краткий обзор положительных и отрицательных моментов ИТ, о которых рассказали наши интервьюеры
              </span>
            </div>
          </div>

        </SwiperSlide>
      </Swiper> 
    </div>
  )
}






