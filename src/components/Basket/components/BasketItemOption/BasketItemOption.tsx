import styles from '../BasketItemOption/BasketItemOption.module.scss'
import { minus, plus, trashIcon } from '@/components/icons/icons'
import { FC } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useDispatch } from 'react-redux'
import { useAppDispatch } from '@/hooks/redux'
import { actions } from '@/store/basket/basket'
import { IFullProduct } from '@/types/IProduct'


interface IBasketItemOption {
    isMenu: boolean
    product: IFullProduct
}

export const BasketItemOption: FC<IBasketItemOption> = ({ isMenu, product }) => {
    const dispatch = useAppDispatch()

    // const dispatch = useDispatch()

    const addToBasket = (product: IFullProduct) => {
        dispatch(actions.addToBasket(product))
    }

    const reduceInBasket = (id: number) => {
        dispatch(actions.reduceProductInBasket(id))
    }


    return (
        <AnimatePresence>
            {isMenu
                ?
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={styles.main}
                >
                    <div>
                        <button onClick={() => reduceInBasket(product.id)}>
                            {minus}
                        </button>

                        <button >
                            {plus}
                        </button>

                        <button onClick={() => addToBasket(product)}>
                            {trashIcon}
                        </button>

                    </div>
                </motion.div>
                :
                <></>
            }

        </AnimatePresence>
    )
}
