import Nav from './Nav';
import Header from './Header';
import styles from '../styles/Layout.module.css';


const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1>Layout component wrapped in _app.js</h1>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
