import styles from './Form.module.scss';
import { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { FC } from "react"
import { Button } from '@mui/material';

interface IForm {
    children: React.ReactNode
    handleSubmit: UseFormHandleSubmit<any>
    submit: SubmitHandler<any>
    isValid: boolean
    submitCount: number
}

const Form: FC<IForm> = ({ children, handleSubmit, isValid, submit, submitCount }) => {


    return (
        <form onSubmit={handleSubmit(submit)} noValidate className={styles.main}>

            {children}

            <Button
                type='submit'
                variant='contained'
                color='success'
                disabled={!isValid}
            >
                Отправить
            </Button>
        </form>
    )
};

export default Form;
