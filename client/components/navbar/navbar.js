import AsteroidIcon from '../icons/asteroids'
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

            <div className={styles.planet}>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
                <div className={styles.star}></div>
            </div>

            <div className={styles.asteroids}>
                <AsteroidIcon/>
                <AsteroidIcon/>
            </div>
        </div>
    )
}

export default Navbar