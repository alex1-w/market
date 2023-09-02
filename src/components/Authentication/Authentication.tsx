'use client'
import styles from './Authentication.module.scss';
import { FC, useState } from "react"
import Login from './Login/Login';
import SignIn from './SignIn/SignIn';
import UserPreview from './UserPreview/UserPreview';

type Variant = 'login' | 'signin'

const Authentication: FC = () => {
    const [variant, setVariant] = useState<Variant>('login')

    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>

                <div className={styles.wrapper__usersPart}>
                    <p>
                        тут будут юзеры из LocalStorage:
                    </p>

                    <UserPreview />
                </div>

                <span className={styles.wrapper__line} />

                <div className={styles.wrapper__authPart}>
                    <h1>Аутентификация</h1>

                    <div className={styles.wrapper__variantBlock}>
                        <div onClick={() => setVariant('login')}>
                            <p>Вход</p>
                        </div>

                        <div onClick={() => setVariant('signin')}>
                            <p>Регистрация</p>
                        </div>
                    </div>

                    <div>
                        {variant === 'login'
                            ?
                            <Login />
                            :
                            <SignIn />
                        }
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Authentication;
