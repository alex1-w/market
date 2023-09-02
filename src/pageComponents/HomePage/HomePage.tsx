'use client'
import styles from './HomePage.module.scss';
import ProductItem from '@/components/ProductItem/ProductItem';
import Sidebar from '@/components/Sidebar/Sidebar';
import Slider from '@/components/Slider/Slider';
import Image from 'next/image';
import { FC } from "react";
import { useAppSelector } from '@/hooks/redux';
import { BasketDrawer } from '@/components/UI/BasketDrawer/BasketDrawer';
import { useSelector } from 'react-redux';

const productData = [
    {
        name: 'чипсы сырные',
        price: 140,
        weight: 120,
        id: 1
    },
    {
        name: 'чипсы с луком',
        price: 140,
        weight: 140,
        id: 2
    },
    {
        name: 'чипсы с ребрышками',
        price: 140,
        weight: 100,
        id: 3
    },
    {
        name: 'чипсы со сметаной',
        price: 140,
        weight: 160,
        id: 4
    },
    {
        name: 'чипсы кукурузныавввввввввввввввввввввввввввввввввввввввввввввввввве',
        price: 140,
        weight: 100,
        id: 5
    },
    {
        name: 'чипсы сырные',
        price: 140,
        weight: 1000,
        id: 6
    },
    {
        name: 'чипсы крабовые',
        price: 140,
        weight: 120,
        id: 7
    },
    {
        name: 'чипсы',
        price: 140,
        weight: 120,
        id: 8
    },
]

const HomePage: FC = () => {

    // const { user } = useAppSelector(state => state.user)

// console.log(user);


    return (
        <main className={styles.main}>

            <div className={styles.main__aside}>
                <Sidebar />
            </div>

            <div className={styles.main__slidesBlock}>
                <Slider slides={productData} />
            </div>

            <BasketDrawer />

        </main>
    )
};

export default HomePage;
