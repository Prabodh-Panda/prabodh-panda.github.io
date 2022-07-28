import styles from './styles.module.css'

interface ButtonProps {
    label: React.ReactNode,
    vairant?: 'primary' | 'secondary',
    onClick?: () => void, 
}

const Button = ({label, vairant = 'primary', onClick}: ButtonProps) => {
    return (
        <button onClick={onClick} className={vairant === 'primary' ? styles.button : `${styles.button} ${styles.buttonSecondary}`}>
            {label}
        </button>
    )
}

export default Button