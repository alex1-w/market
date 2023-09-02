'use client'
import styles from './CreateBrandPage.module.scss'
import Form from '@/components/Form/Form'
import { useForm } from 'react-hook-form'
import Field from '@/components/UI/Inputs/TextField/Field'
import { useCreateBrandMutation } from '@/http/api'
import { IBrand } from '@/types/IProduct'

export const CreateBrandPage = () => {

    const { register, formState: { isValid, submitCount, errors }, watch, handleSubmit } = useForm({
        mode: 'onChange',
        reValidateMode: 'onBlur',
        defaultValues: {
            name: '',
        }
    })

    const [createBrand, { isError, isLoading, isSuccess }] = useCreateBrandMutation()

    const submit = async (body: IBrand) => {
        await createBrand(body)
    }

    console.log(isSuccess, isLoading);
    
    return (
        <main className={styles.main}>

            <div className={styles.wrapper}>
                <h1>Название бренда</h1>

                <Form handleSubmit={handleSubmit} submit={submit} isValid={isValid} submitCount={submitCount} >


                    <Field
                        errors={errors?.name?.message}
                        name='name'
                        register={register}
                        rules={{
                            minLength: {
                                value: 2,
                                message: 'min length - 2'
                            }
                        }}
                        type='text'
                        size='medium'
                    />

                </Form>

            </div>
        </main>
    )
}