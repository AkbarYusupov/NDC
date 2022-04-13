import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import styles from './index.module.css'
export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        className="mySwiper"
           breakpoints= {  
      {
          320: {       
             slidesPerView: 1,
            
          },       
          640: {       
             slidesPerView: 2,       
           
          },
          1024: {       
            slidesPerView: 3,       
              
         },
         1440: {       
          slidesPerView: 5,           
       } }
       }
      >
        <SwiperSlide>
          <div className={styles["swiper"]}>
           <div className={styles["swiper_img"]}>
           <img src="/Images/messi-1.png" />
           </div>
            <div className={styles["swiper_info"]}>
             <span className="gl_semibold">
               Lionel Messi
             </span>
             <p className="gl_regular">Barcelona</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["swiper"]}>
          <div className={styles["swiper_img"]}>
           <img src="/Images/messi-2.png" />
           </div>
            <div className={styles["swiper_info"]}>
             <span className="gl_semibold">
               Lionel Messi
             </span>
             <p className="gl_regular">Barcelona</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["swiper"]}>
           <div className={styles["swiper_img"]}>
           <img src="/Images/messi-3.png" />
           </div>
           <div className={styles["swiper_info"]}>
             <span className="gl_semibold">
               Lionel Messi
             </span>
             <p className="gl_regular">Barcelona</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["swiper"]}>
          <div className={styles["swiper_img"]}>
           <img src="/Images/messi-4.png" />
           </div>
           <div className={styles["swiper_info"]}>
             <span className="gl_semibold">
               Lionel Messi
             </span>
             <p className="gl_regular">Barcelona</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["swiper"]}>
          <div className={styles["swiper_img"]}>
           <img src="/Images/messi-5.png" />
           </div>
           <div className={styles["swiper_info"]}>
             <span className="gl_semibold">
               Lionel Messi
             </span>
             <p className="gl_regular">Barcelona</p>
           </div>   
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["swiper"]}>
          <div className={styles["swiper_img"]}>
           <img src="/Images/messi-6.png" />
           </div>
           <div className={styles["swiper_info"]}>
             <span className="gl_semibold">
               Lionel Messi
             </span>
             <p className="gl_regular">Barcelona</p>
           </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["swiper"]}>
          <div className={styles["swiper_img"]}>
           <img src="/Images/messi-1.png" />
           </div>
           <div className={styles["swiper_info"]}>
             <span className="gl_semibold">
               Lionel Messi
             </span>
             <p className="gl_regular">Barcelona</p>
           </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
