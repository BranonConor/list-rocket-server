import HomeIcon from '../icons/home'
import Link from 'next/link'
import ListIcon from '../icons/list'
import RocketPlainIcon from '../icons/rocket-plain'
import styles from './navbar.module.scss'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.brand}>
                <RocketPlainIcon />
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
                <div className={styles.flame}></div>
            </div>

            <div className={styles.menu}>
                <ul>
                    <li>
                        <Link href='/'>
                            <a><HomeIcon /></a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/dashboard'>
                            <a><ListIcon /></a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar