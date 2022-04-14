import styles from './index.module.css'
import Link from 'next/dist/client/link';
export default function smallbtn() {
  return (
    <button className={styles['main_small__btn']}>
      <a>
        <svg width={70} height={44} viewBox="0 0 70 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M68.8805 3.11354L0.426346 42.6356M68.8805 3.11354C58.3831 12.5969 53.0198 19.1162 53.0907 35.0478M68.8805 3.11354C55.419 7.46286 47.0915 8.84803 33.3297 0.820759" stroke="white" strokeWidth="1.4" />
        </svg>
      </a>
  </button>
  )
}