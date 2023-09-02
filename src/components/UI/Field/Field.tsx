import styles from './Field.module.scss';
import { searchIcon } from '@/components/icons/icons';
import { FC, forwardRef } from "react"
import { IField } from './IFIeld';

const Field = forwardRef<HTMLInputElement, IField>(({svgIcon, placeholder, type = 'text', ...rest }) => {
    return (
        <div className={styles.main}>
            {/* {searchIcon} */}
            {svgIcon}
            <input type="text" placeholder={placeholder} />
        </div>
    )
})
Field.displayName = 'Filed'

export default Field;
