import styles from './Select.module.scss';
import { FC, useState } from "react"

interface ISelect {
    options: any[]
}

const Select: FC<ISelect> = ({ options }) => {
    const [selectedOPtion, setSelectedOPtion] = useState(options[0].name)

    const getValue = (value: any) => {
        // console.log(value);
        return value ? options.find((option: any) => option.name === value) : 1;
    }

    return (
        <select className={styles.selectBlock}>
            {/* {options.map(item => (

                <option
                    key={item.id}
                    value={getValue(value)}
                    onChange={(e: any) => setSelectedOPtion(e.target.value)}
                >
                    {item.name}
                </option>

            ))} */}
        </select>
    )
};

export default Select;
