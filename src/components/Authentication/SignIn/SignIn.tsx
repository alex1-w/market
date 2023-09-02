import styles from './SignIn.module.scss';
import { Button } from '@mui/material';
import { FC } from "react"
import Field from '@/components/UI/Inputs/TextField/Field';
import { useForm, SubmitHandler } from 'react-hook-form'
import { ISignInForm } from '../IForm';
import { useRegistrationMutation } from '@/http/api';
import { enqueueSnackbar } from 'notistack';
import Form from '@/components/Form/Form';
// import { userService } from '@/services/userService/userService';



const SignIn: FC = () => {
    const { control, reset, register, handleSubmit, formState: { isValid, submitCount, errors } } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onChange',
        defaultValues: {
            login: '',
            password: '',
            repeatPassword: ''
        }
    })

    const [registration, { isError, isLoading, isSuccess }] = useRegistrationMutation()

    const submit: SubmitHandler<ISignInForm> = async (data) => {
        if (data.password !== data.repeatPassword) return enqueueSnackbar('пароли не совпадают', { variant: 'error' })

        try {
            await registration(data)

            if (isSuccess) {
                console.log('success');
            }
        } catch (err) {
            if (isError) {
                console.log('error');
            }
        }
    }

    return (
        <div className={styles.main}>

            <Form handleSubmit={handleSubmit} isValid={isValid} submit={submit} submitCount={submitCount} >

                <Field
                    errors={errors?.login?.message}
                    placeholder='Введите логин'
                    name='login'
                    register={register}
                    size='medium'
                    type='text'
                    rules={{
                        minLength: { value: 3, message: 'gtrfegtrw' }
                    }}
                />

                <Field
                    errors={errors?.password?.message}
                    placeholder='Введите пароль'
                    name='password'
                    register={register}
                    size='medium'
                    type='text'
                    rules={{}}
                />

                <Field
                    errors={errors?.repeatPassword?.message}
                    placeholder='Повторите пароль'
                    name='repeatPassword'
                    register={register}
                    size='medium'
                    type='text'
                    rules={{}}
                />
            </Form>
        </div>
    )
};

export default SignIn;
