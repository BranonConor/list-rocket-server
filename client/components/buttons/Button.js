import styles from './button.module.scss';

const Button = (props) => {
    return (
        <a  
        href={props.link}
        className={props.isDisabled ? styles.disabled : styles.button}
        download={props.download === true} 
        >
            {/* if an icon prop is passed, display it */}
            {props.icon && <img src={props.icon} alt='Button Icon' width='30' height='30'/>}
            {/* display the content passed as a prop i.e. - what goes inside the button? */}
            {props.content}
        </a>
    )
}

export default Button;