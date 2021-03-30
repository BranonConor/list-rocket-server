import styles from './icons.module.scss'

const RocketPlainIcon = () => {
    return (
        <svg viewBox="0 0 73 125" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.logo}>
            <path d="M57.7499 36.0938C57.7499 36.0938 52.3358 0 36.0936 0C19.8514 0 14.4374 36.0938 14.4374 36.0938H57.7499Z" fill="#56CCF2"/>
            <path d="M57.7498 108.281L57.7499 36.0938H14.4374L14.4373 108.281H57.7498Z" fill="#56CCF2"/>
            <path d="M0 86.6251C0 78.6515 6.4639 72.1876 14.4375 72.1876V72.1876L14.4375 111.891C14.4375 115.878 11.2056 119.11 7.21875 119.11V119.11C3.23195 119.11 0 115.878 0 111.891L0 86.6251Z" fill="url(#rocketplain)"/>
            <path d="M57.75 72.1876V72.1876C65.7237 72.1876 72.1875 78.6515 72.1875 86.6251L72.1875 111.891C72.1875 115.878 68.9556 119.11 64.9688 119.11V119.11C60.982 119.11 57.75 115.878 57.75 111.891L57.75 72.1876Z" fill="url(#rocketplain1)"/>
            <path d="M28.875 86.6251C28.875 82.6383 32.107 79.4064 36.0938 79.4064V79.4064C40.0806 79.4064 43.3125 82.6383 43.3125 86.6251L43.3125 117.305C43.3125 121.292 40.0806 124.524 36.0938 124.524V124.524C32.107 124.524 28.875 121.292 28.875 117.305L28.875 86.6251Z" fill="url(#rocketplain2)"/>
            <circle cx="36.0939" cy="46.9219" r="10.8281" fill="url(#rocketplain3)"/>
            <defs>
                <linearGradient id="rocketplain" x1="0" y1="98.3556" x2="72.1875" y2="98.3556" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EB5757"/>
                    <stop offset="0.515625" stopColor="#FF00A8"/>
                    <stop offset="0.947917" stopColor="#FF9900"/>
                </linearGradient>
                <linearGradient id="rocketplain1" x1="0" y1="98.3556" x2="72.1875" y2="98.3556" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EB5757"/>
                    <stop offset="0.515625" stopColor="#FF00A8"/>
                    <stop offset="0.947917" stopColor="#FF9900"/>
                </linearGradient>
                <linearGradient id="rocketplain2" x1="0" y1="98.3556" x2="72.1875" y2="98.3556" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EB5757"/>
                    <stop offset="0.515625" stopColor="#FF00A8"/>
                    <stop offset="0.947917" stopColor="#FF9900"/>
                </linearGradient>
                <linearGradient id="rocketplain3" x1="25.2657" y1="46.9219" x2="46.922" y2="46.9219" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#EB5757"/>
                    <stop offset="0.515625" stopColor="#FF00A8"/>
                    <stop offset="0.947917" stopColor="#FF9900"/>
                </linearGradient>
            </defs>
        </svg>

    )
}

export default RocketPlainIcon;