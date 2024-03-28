import styles from './style.module.css'

export default function Button({name, event}) {

    return (
        <>
            <button onClick={event}>{name}</button>
        </>
    )
}