import Button from '../Button/index';
import styles from './index.module.css';

const IndexBottom = () => {
  return (
    <div className='container'>
      <div className={styles['portfolio']}>
        <div className={styles['portfolio_btn']}>
          <Button/>
        </div>
        <div className={styles['portfolio_img']}>
          <img src='/Images/port_img.png'/>
        </div>
      </div>
    </div>
  );
}

export default IndexBottom;
