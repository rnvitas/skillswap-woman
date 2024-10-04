import { useDispatch, useSelector } from 'react-redux'
import styles from '../../assets/Navigation.module.css'
import logo from '../../foto/lg-ssw.png'
import { Logout } from '../../redux/userSlice';

function NavUser (){
    // const {users}=useSelector((state)=>state.users);
    const dispatch=useDispatch();
    const handleLogout = (e)=>{
        e.preventDefault();
        dispatch(Logout());
    }
    return (
        <>
         <header className="wrapper container">
        <div className={`${styles.navbar} my-3  container py-3`}>
    <nav className="flex px-12 justify-between gap-10 items-center ">
            <img className={`${styles.logossw}`}src={logo} alt="logo" />

        <div className={`${styles.navLinks} flex flex-row flex-between py-3 px-3 items-center gap-10 text-black font-bold`}>

            <h6>Beranda</h6>
            <h6>Ekspor Keterampilan</h6>
            <h6>Pertukaran Aktif</h6>

            
        </div>

        <div className={`${styles['button-join']}`}>
            <button className="sm-btn-secondary" onClick={handleLogout}>Profile</button>
        </div>

        <div className={`${styles['toggle-button']}`} id="burger-menu">
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
              <span className={`${styles.bar}`}></span>
        </div>
     </nav>
        </div>
        </header>
        </>
    )
}

export default NavUser