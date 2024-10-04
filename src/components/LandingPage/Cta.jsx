import { Link } from 'react-router-dom';
import styles from '../../assets/Landing.module.css';
import foto from '../../foto/lg-ssw.png'

function Cta (){
    return (
        <>
        <div className="wrapper container ">
        <div className={`${styles['cta-section']} my-10 flex-col flex justify-center items-center`}>
            <div className={`${styles['cta-logo']}`}>
            <img src={foto} alt="" />
            </div>
            <div className={`${styles['cta-info']} flex justify-center items-center flex-col gap-6`}>
        <h1 className=''>Siap Untuk Memulai?</h1>
        <p className=''>Jadilah bagian dari komunitas perempuan yang saling menginspirasi dan mendukung satu sama lain. Tukar keterampilan dan tumbuh bersama!</p>
           
           <Link to="/register"><button className='lg-btn-secondary'>Mulai Sekarang!</button></Link>
           </div>
        </div>
        </div>
        </>
    )
}

export default Cta;