import React from 'react'
import styles from './index.module.css'
function index() {
  return (
    <>
     <div className={styles['update']}>
        <button>
          <svg width={36} height={34} viewBox="0 0 36 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.68068 5.99841C14.7567 -0.0775938 24.6057 -0.0775938 30.6817 5.99841C36.7577 12.0744 36.7577 21.9234 30.6817 27.9994C24.6057 34.0754 14.7544 34.0754 8.68068 27.9994L0.761353 20.0801M0.761353 20.0801V31.3221M0.761353 20.0801H12.0034" stroke="white" strokeWidth="1.5" strokeMiterlimit={10} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      </>
  )
}

export default index