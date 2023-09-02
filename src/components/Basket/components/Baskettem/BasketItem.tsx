import styles from './BasketItem.module.scss';
import Image from 'next/image';
import { FC, useState } from "react"
import { changeIcon, trashIcon } from '@/components/icons/icons';
import { priceFormatter } from '@/helpers/priceFormatter';
import { IFullProduct } from '@/types/IProduct';
import { BasketItemOption } from '../BasketItemOption/BasketItemOption'


interface IBasketItem {
    product: IFullProduct
}

const BasketItem: FC<IBasketItem> = ({ product }) => {
    const [isMenu, setIsMenu] = useState<boolean>(false)

    const showMenu = () => setIsMenu(true)
    const hideMenu = () => setIsMenu(false)

    // console.log(id);

    return (
        <div className={styles.main} >

            <div className={styles.imgBlock}>
                <Image src='http://www.a-yabloko.ru/storage/catalog/goods/.thumbs/942dd6b46f560a8b118d37bfae28655e_w800.jpg' alt={product.title} fill />
            </div>

            <div className={styles.description}>

                <div>
                    <p>{product.title}</p>

                    <div>
                        <p>{priceFormatter(product.price)}</p>
                        <p>{product.count}шт.</p>
                    </div>
                </div>


                <div>
                    <p>140г.</p>

                    <div
                        className={styles.menu}
                        onMouseEnter={showMenu}
                        onMouseLeave={hideMenu}
                    >
                        {changeIcon}

                        {isMenu
                            &&
                            <BasketItemOption product={product} isMenu={isMenu} />
                        }
                    </div>


                </div>
            </div>

        </div>
    )
};

export default BasketItem;
