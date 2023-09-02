import styles from './ProductItem.module.scss';
import Image from 'next/image';
import { FC } from "react"
import ProductItemCounter from './ProductItemCounter/ProductItemCounter';
import { useSelector } from 'react-redux';
import { priceFormatter } from '@/helpers/priceFormatter';
import { IFullProduct } from '@/types/IProduct';




const ProductItem: FC<{ product: IFullProduct }> = ({ product }) => {

    return (
        <div className={styles.main}>
            <div className={styles.imgBlock}>
                <Image alt={product.title} src='http://www.a-yabloko.ru/storage/catalog/goods/.thumbs/942dd6b46f560a8b118d37bfae28655e_w800.jpg' fill />
            </div>

            <div className={styles.description}>

                <div>
                    <p className={styles.description__price}>{priceFormatter(product.price)}</p>
                    <p className={styles.description__title}>{product.title}</p>
                </div>

                <p className={styles.description__weight}>
                    {product.description}г.
                </p>

            </div>

            <ProductItemCounter product={product} />
            {/* <ProductItemCounter product={{}} /> */}
        </div>
    )
};

export default ProductItem;
