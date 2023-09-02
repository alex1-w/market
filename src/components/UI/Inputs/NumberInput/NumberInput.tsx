import styles from './NumberInput.module.scss';
import { NumericFormat } from 'react-number-format';
import { FC } from "react"
import { TextField } from '@mui/material';
import Field from '../TextField/Field';
import { IField } from '../../Field/IFIeld';

const NumberInput: FC<IField> = ({ errors, name, register, rules, type, className, isMulti, label, placeholder, size, svgIcon }) => {

    return (
        <div className={styles.main}>

            <NumericFormat
                allowLeadingZeros
                maxLength={30000}
                allowNegative={false}

                customInput={Field}
                errors={errors}
                name={name}
                register={register}
                rules={rules}
                thousandSeparator=" "
                type='number'
            />
            <p>₽</p>

        </div>
    )
};

export default NumberInput;
