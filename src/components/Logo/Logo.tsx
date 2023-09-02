import styles from './Logo.module.scss';
import { cartIcon } from '../icons/icons';
import { FC } from "react"
import { useRouter } from 'next/router';
import Link from 'next/link';

const Logo: FC = () => {
    // const { push } = useRouter()
    // const redirectOnHomePage = ()=> push('/')

    return (
        <Link href={'/'} className={styles.main}>
            {cartIcon}

            <span />

            <h1>Market</h1>
        </Link>
    )
};

export default Logo;