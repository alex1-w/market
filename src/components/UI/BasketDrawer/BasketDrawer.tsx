import styles from './BasketDrawer.module.scss'
import { useState } from 'react'
import { basketIcon } from '@/components/icons/icons'
import Basket from '@/components/Basket/Basket'

export const BasketDrawer = () => {
    const [isBasket, setIsBasket] = useState<boolean>(false)

    const showBasket = () => setIsBasket(true)

    const closeBasket = () => setIsBasket(false)

    return (

        <div className={styles.main}>
            <div className={styles.content} onClick={showBasket}>
                {!isBasket && basketIcon}

                {isBasket
                    &&
                    <Basket isBasket={isBasket} closeBasket={closeBasket} />
                }
            </div>
        </div>
    )
}
