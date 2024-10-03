import { Link } from 'react-router-dom'
import styles from '../../assets/Navigation.module.css'
import logo from '../../foto/lg-ssw.png'

function NavLogin (){
    
    return (
        <>
      <header className="wrapper container">
        <div className={`${styles.navbar} my-3  container py-3`}>
    <nav className="flex px-12 justify-between gap-10 items-center ">
        <Link to="/">            <img className={`${styles.logossw}`}src={logo} alt="logo" />
        </Link>


       


       
     </nav>
        </div>
        </header>
        
        </>
    )
}

export default NavLogin