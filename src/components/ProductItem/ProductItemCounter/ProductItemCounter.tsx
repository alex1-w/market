'use client'
import styles from './ProductItemCounter.module.scss';
import { minus, plus } from '@/components/icons/icons';
import { actions } from '@/store/basket/basket';
import { IFullProduct, IProduct } from '@/types/IProduct';
import { FC, useState } from "react"
import { useDispatch, useSelector } from 'react-redux';



const ProductItemCounter: FC<{ product: IFullProduct }> = ({ product }) => {
    const basket = useSelector((state: any) => state.reducer.basket)
    const currentProduct = basket.find((item: any) => item.product.id === product.id)
    // console.log(currentProduct);

    const [productsCount, setProductsCount] = useState<number>(0)

    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(actions.addToBasket(product))
        setProductsCount(productsCount + 1)
    }

    const reduceProduct = () => {
        setProductsCount(productsCount - 1)
        dispatch(actions.reduceProductInBasket(product.id))
    }

    return (

        <div className={styles.main} >
            {productsCount === 0
                ?
                <button className={styles.main__initialStateBlock} onClick={addProduct}>
                    {plus}
                </button>
                :
                <div className={styles.counterBlock}>

                    <button className={styles.counterBlock__item} onClick={reduceProduct}>
                        {minus}
                    </button>

                    <p>{productsCount}</p>
                    {/* <p>{count}</p> */}

                    <button className={styles.counterBlock__item} onClick={addProduct}>
                        {plus}
                    </button>

                </div>
            }
        </div>

    )
};

export default ProductItemCounter;
