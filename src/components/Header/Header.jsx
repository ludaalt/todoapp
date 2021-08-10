import AddTodoButton from '../AddTodoButton/AddTodoButton'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <h1>todo</h1>
            <AddTodoButton />
        </header> 
    )
}

export default Header