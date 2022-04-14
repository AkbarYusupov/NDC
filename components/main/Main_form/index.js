import styles from './index.module.css'
import Link from 'next/dist/client/link';
import Button from '../Button/index'
import { useState } from 'react';
import { useIMask } from 'react-imask';
import { useTranslation } from 'next-i18next';
export default function Form() {
  const PhoneContactMask = '+9980 000-00-00'
  const { t } = useTranslation('common');
  const [opts, setOpts] = useState({ mask: PhoneContactMask });
  const { ref } = useIMask(opts);
  return (
    <div className='container'>
      <div className={styles['form']}>
        <div className={styles['form_left']}>
          <div className={styles['form__left-top']}>
            <h1 className='gl_semibold'>{t("submitYourApplication")} <br />
              {t("submitYourApplication-2")}
            </h1>
            <span className='gl_regular'>{t("formText")}
              {t("formText-2")}
              </span>
          </div>
          <div className={styles['form__left-bottom']}>
            <Link href="tel:+998 97 666 66 66">
              <a className='gl_medium'>+998 97 666 66 66</a>
            </Link>
            <br />
            <a className='gl_medium'>
              info@ndc.uz
            </a>
          </div>

        </div>
        <div className={styles['form_right']}>
          <form className={styles["contact__form"]}>
            <div className={styles["contact__form-top"]}>
              <input type="text" placeholder={t("name")} className="Имя" required />
              <input type="text" placeholder={t("phone")} ref={ref} className="Телефон" required />
            </div>
            <div className={styles['contact__form-bottom']}>
              <input type="email" placeholder={t("mail")} className={styles["email"]} required />
            </div>
            <h3 className='gl_semibold'>
              {t("aboutTheProject")}
            </h3>
            <div className={styles['select']}>
              <div className={styles["input-container"]}>
                <input type="radio" name="title" /><label className='gl_regular'>{t("webDevelopment")}</label>
              </div>
              <div className={styles["input-container"]}>
                <input type="radio" name="title" defaultChecked /><label className='gl_regular'>{t("advertising")}</label>
              </div>
              <div className={styles["input-container"]}>
                <input type="radio" name="title" /><label className='gl_regular'>{t("branding")}</label>
              </div>
            </div>
            <div className={styles['text']}>
              <input type="text" placeholder={t('task')} className='gl_regular' name="text" />
            </div>
          </form>
        </div>
        <div className={styles['btn']}>
          <Button />
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}
