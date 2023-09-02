import styles from './Field.module.scss';
import { FC, forwardRef } from "react"
import { IField } from '../../Field/IFIeld';
import { TextField } from "@mui/material";
import { AnimatePresence, motion } from 'framer-motion';

const Field = forwardRef<HTMLInputElement, IField>(({ svgIcon, placeholder, type = 'text', size, errors, name, register, rules, className, label, ...rest }) => {

    return (

        <div className={styles.main}>
            <>
                {svgIcon}
                <TextField
                    variant='outlined'
                    color='secondary'
                    className={styles.inp}
                    size={size}
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    {...(register && register(name, { ...rules }))}
                />
            </>
            <AnimatePresence>
                {errors && (
                    <motion.p
                        initial={{ height: 0, y: "-100" }}
                        animate={{ height: "auto", y: 0 }}
                        exit={{ height: 0, y: "-100" }}
                    >
                        {errors}
                    </motion.p>
                )}
            </AnimatePresence>
        </div>
    )
})
Field.displayName = 'Filed'

export default Field;
