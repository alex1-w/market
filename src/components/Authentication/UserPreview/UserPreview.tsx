import { profileIcon } from '@/components/icons/icons';
import styles from './UserPreview.module.scss';
import { FC } from "react"

const UserPreview: FC = () => {
    return (
        <div className={styles.main}>
            {profileIcon}
            
            <div className={styles.name}>
                <p>name</p>
            </div>
        </div>
    )
};

export default UserPreview;
