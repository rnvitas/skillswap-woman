import styles from '../../assets/Landing.module.css';
import foto from '../../foto/bg-how.png'


function Howitworks () {
    return(

        <>
            <div className="wrapper container" 
                style={{ 
                    backgroundImage: `url(${foto})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }} id="howitworks">

            <div className={`${styles['howitworks-section']}`}>
                <div className="flex justify-center">
                <div className={`${styles['howitworks-heading']} flex justify-center items-center`} >
  <h1>Bagaimana Skill Swap Woman Bekerja?</h1>
                </div>

                </div>
  
            <div className="flex justify-center flex-wrap">

                <div className={`${styles['howitworks-content']} flex justify-start items-center flex-col mx-3 my-7`}>
                    <h5 className='px-3 py-3 my-3'>1. Jelajahi Keterampilan</h5>

                    <p className='px-3 py-3'>
                    Temukan berbagai keterampilan yang ditawarkan oleh sesama perempuan. Dari memasak, menjahit, hingga digital marketing, ada banyak pilihan untuk dijelajahi!
                    </p>
                </div>

                <div className={`${styles['howitworks-content']} flex justify-start items-center flex-col mx-3 my-7`}>
                    <h5 className='px-3 py-3 my-3'>2. Ajukan Pertukaran</h5>

                    <p className='px-3 py-3'>
                    Klik pada keterampilan yang Anda minati, lalu kirimkan permintaan pertukaran. Pilih metode yang paling sesuai untuk Anda—apakah itu sesi online atau tatap muka—dan tentukan jadwal yang nyaman.
                    </p>
                </div>

                <div className={`${styles['howitworks-content']} flex justify-start items-center flex-col mx-3 my-7`}>
                    <h5 className='px-3 py-3 my-3'>3. Belajar dan Bertukar</h5>

                    <p className='px-3 py-3'>
                    Setelah permintaan Anda diterima, Anda akan dapat memulai sesi pertukaran keterampilan. Akses materi pembelajaran, berbagi pengetahuan, dan nikmati pengalaman baru bersama.
                    </p>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Howitworks