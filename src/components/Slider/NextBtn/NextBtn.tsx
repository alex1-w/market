import styles from './NextBtn.module.scss';
import { arrowIcon } from '@/components/icons/icons';
import { FC } from "react"
import { useSwiper } from 'swiper/react';

const NextBtn: FC = () => {
  const swiper = useSwiper()

  const prev = () => swiper.slidePrev()
  return (
    <button className={styles.main} onClick={() => swiper.slideNext()}>
      {arrowIcon}
    </button>
  )
};

export default NextBtn;
