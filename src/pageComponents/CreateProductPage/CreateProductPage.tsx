'use client'
import styles from './CreateProductPage.module.scss';
import Form from '@/components/Form/Form';
import { ChangeEvent, FC, useEffect, useState } from "react"
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import FieldBlock from '@/components/UI/Inputs/FieldBlock/FieldBlock';
import Select from '@/components/UI/Select/Select';
import productIcon from '../../components/icons/productIcon.svg'
import Image from 'next/image';
import stall from '../../components/icons/stall.jpg'
import { cart2Icon } from '@/components/icons/icons';
import icon from '../../components/icons/farm-milk-farm-product-fresh-svgrepo-com.svg'
import { priceFormatter } from '@/helpers/priceFormatter';
import NumberFormat, { NumericFormat } from 'react-number-format';
import Field from '@/components/UI/Inputs/TextField/Field';
import { TextField } from '@mui/material';
import NumberInput from '@/components/UI/Inputs/NumberInput/NumberInput';
import { SelectBlock } from '@/components/UI/SelectBlock/SelectBlock';
import { useCreateProductMutation, useGetBrandsQuery } from '@/http/api';
import { IProduct } from '@/types/IProduct';



const options = [
    {
        name: 'lays',
        id: 1
    },
    {
        name: 'cola',
        id: 2
    },
    {
        name: 'twix',
        id: 3
    },
    {
        name: 'greenfield',
        id: 4
    },
]

const CreateProductPage: FC = () => {

    const { register, control, reset, handleSubmit, formState: { errors, isValid, submitCount, }, watch } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            title: '',
            price: 0,
            description: '',
            image: '',
            brand: ''
        }
    })

    const { data } = useGetBrandsQuery()

    console.log(data);


    const [createProduct, { isError, isSuccess }] = useCreateProductMutation()

    const submit: SubmitHandler<IProduct> = (body) => createProduct(body)

    return (
        <main className={styles.main}>
            <div className={styles.wrapper}>
                <div>
                    {cart2Icon}
                    <h1>Новый продукт</h1>
                </div>

                <div className={styles.content}>

                    <div className={styles.leftPart} >
                        <Image src={stall} alt='few' fill />
                    </div>

                    <Form handleSubmit={handleSubmit} isValid={isValid} submit={submit} submitCount={submitCount} >

                        <FieldBlock type='text' errors={errors?.title?.message} name='title' register={register} rules={{}} size='medium' title='Название продукта' />

                        <FieldBlock type='text' errors={errors?.description?.message} name='description' register={register} rules={{}} size='medium' title='Описание продукта' />

                        <SelectBlock
                            control={control}
                            errors={errors?.brand?.message}
                            name='brand'
                            options={options}
                            rules={{}}
                            register={register}
                        />

                        <NumberInput
                            errors={errors?.price?.message}
                            name='price'
                            register={register}
                            rules={{}}
                            type='number'
                        />

                        <FieldBlock type='text' title='Фото продукта' errors={errors?.image?.message} name='image' register={register} rules={{}} size='medium' />

                    </Form>

                </div>
            </div>
        </main>
    )
};

export default CreateProductPage;
