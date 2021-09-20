import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>Header component</h1>
            <p className={headerStyles.description}>Updated Data goes here....</p>
        </div>
        )
}

export default Header
