import styles from './UserBlockDropdown.module.scss';
import Link from 'next/link';
import { FC, useRef } from "react"
import { useOnClickOutside } from '@/hooks/useClickOutside';
import { AnimatePresence, motion } from 'framer-motion'

const userLinks = [
    {
        link: '/',
        name: 'мой кабинет'
    },
    {
        link: '/',
        name: 'пуупк'
    },
    {
        link: '/',
        name: 'купку уца'
    },
    {
        link: '/',
        name: 'выйти'
    },

]
interface IUserBlockDropdown {
    setIsDropdownShow: (active: boolean) => void
    isDropdownShow: boolean;
}

const UserBlockDropdown: FC<IUserBlockDropdown> = ({ setIsDropdownShow, isDropdownShow }) => {
    const userDropdownRef = useRef<HTMLDivElement>(null)

    const closeDropdown = () => setIsDropdownShow(false)

    useOnClickOutside(userDropdownRef, closeDropdown)

    return (
        <AnimatePresence>
            {isDropdownShow &&

                <motion.div
                    className={styles.main}
                    ref={userDropdownRef}
                    initial={{ height: 0, opacity: 0 }}
                    animate={isDropdownShow ? { height: '155px', opacity: 1 } : { height: 0, opacity: 0 }}
                    exit={{ height: 0, opacity: 0 }}
                >

                    <nav>
                        <ul>
                            {userLinks.map(item => (
                                <Link href={item.link} key={item.name} onClick={closeDropdown}>
                                    <p> {item.name}</p>
                                </Link>
                            ))}
                        </ul>
                    </nav>

                </motion.div>

            }
        </AnimatePresence>
    )
};

export default UserBlockDropdown;
