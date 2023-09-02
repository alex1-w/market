import styles from './Basket.module.scss';
import { FC } from "react"
import { useDispatch, useSelector } from 'react-redux';
import { AnimatePresence, motion } from 'framer-motion';
import { basketIcon } from '@/components/icons/icons';
import { AiOutlineClear } from "react-icons/ai";
import { actions } from '@/store/basket/basket';
import { useProductsInBasket } from '@/hooks/useProductsInBasket';
import BasketItem from './components/Baskettem/BasketItem';

interface IBasket {
    isBasket: boolean,
    closeBasket: () => void
}

const Basket: FC<IBasket> = ({ isBasket, closeBasket }) => {
    const products = useProductsInBasket()

    const dispatch = useDispatch()
    const cleanBasket = () => dispatch(actions.cleanBasket())

    return (
        <AnimatePresence>

            {isBasket &&
                <motion.div
                    className={styles.main}
                    initial={{ y: '1000px', opacity: 0 }}
                    animate={isBasket ? { y: 0, opacity: 1 } : { y: '1000px', opacity: 0 }}
                    exit={{ y: '1000px', opacity: 0 }}
                >
                    <div className={styles.head}>

                        <h3>Корзина</h3>

                        <div onClick={cleanBasket}>
                            <AiOutlineClear />
                        </div>

                    </div>

                    <div className={styles.productBlock}>

                        {products.map((product: any) => (
                            <BasketItem product={product} key={product.id} />
                        ))}

                    </div>

                    <div className={styles.basketBlock} onClick={closeBasket}>
                        {basketIcon}
                    </div>

                </motion.div>
            }
        </AnimatePresence>
    )
};

export default Basket;
