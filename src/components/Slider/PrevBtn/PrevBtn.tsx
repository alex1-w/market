import styles from './PrevBtn.module.scss';
import { arrowIcon } from '@/components/icons/icons';
import { FC } from "react"
import { useSwiper } from 'swiper/react';


const PrevBtn: FC = () => {
    const swiper = useSwiper()


    return (
        <button type='button' className={styles.main} onClick={() => swiper.slidePrev()}>
            <div>
                {arrowIcon}
            </div>
        </button>
    )
};

export default PrevBtn;
