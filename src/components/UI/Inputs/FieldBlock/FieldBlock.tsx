import styles from './FieldBlock.module.scss';
import { FC } from "react"
import Field from '@/components/UI/Inputs/TextField/Field';
import { IField } from '../../Field/IFIeld';

interface IFieldBlock extends IField {
    title: string;
}


const FieldBlock: FC<IFieldBlock> = ({ errors, name, register, rules, size = 'medium', title, type, label }) => {
    return (
        <div className={styles.main}>

            {title}

            <Field
                errors={errors}
                name={name}
                register={register}
                rules={rules}
                size={size}
                type={type}
                label={label}
            />
            
        </div>
    )
};

export default FieldBlock;
