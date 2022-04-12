import styles from './index.module.css';

const IndexTop = () => {
  return (
    <div className='container'>
      <div className={styles['portfolio_top']}>
        <h1 className='gl_semibold'>
        Портфолио
        </h1>
        <span className='gl_regular'>
        Понимаем, как эмоции в digital становятся впечатлениями, а рациональный результат взаимодействия превращается в потребительский опыт
        </span>
      </div>
    </div>
  );
}

export default IndexTop;
