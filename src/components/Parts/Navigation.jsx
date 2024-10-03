import styles from '../../assets/Navigation.module.css'
import logo from '../../foto/lg-ssw.png'

function Navigation (){
    
    return (
        <>
      <header className="wrapper container">
        <div className={`${styles.navbar} my-3  container py-3`}>
    <nav className="flex px-12 justify-between gap-10 items-center ">
            <img className={`${styles.logossw}`}src={logo} alt="logo" />

        <div className={`${styles.navLinks} flex flex-row flex-between py-3 px-3 items-center gap-10 text-black font-bold`}>

            <h6>Key Benefits</h6>
            <h6>How it works</h6>
            <h6>FAQ</h6>

            
        </div>

        <div className={`${styles['button-join']}`}>
            <button className="sm-btn-secondary">Mulai Sekarang!</button>
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

export default Navigation