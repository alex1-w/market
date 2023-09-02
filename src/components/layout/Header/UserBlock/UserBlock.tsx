'use client'
import styles from './UserBlock.module.scss';
import { profileIcon } from '@/components/icons/icons';
import { FC, useState } from "react"
import UserBlockDropdown from './UserBlockDropdown/UserBlockDropdown';

const UserBlock: FC = () => {
    const [isDropdownShow, setIsDropdownShow] = useState<boolean>(false)
    const showDropdown = () => setIsDropdownShow(!isDropdownShow)   

    return (

        <div className={styles.main}>

            <div className={styles.userBlock} onClick={showDropdown}>
                <p>name</p>

                {profileIcon}
            </div>

            {isDropdownShow
                &&
                <UserBlockDropdown
                    setIsDropdownShow={setIsDropdownShow}
                    isDropdownShow={isDropdownShow}
                />
            }
        </div >
    )
};

export default UserBlock;
