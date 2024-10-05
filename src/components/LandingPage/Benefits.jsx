import styles from '../../assets/Landing.module.css';
import foto from '../../foto/bg-benefits.png'


function Benefits(){
    return(
        <>
        <div className="wrapper container" style={{ backgroundImage: `url(${foto})` }} id="benefit-skillswap">
            <div className={`${styles['benefits-section']}`}>
                <div className='flex justify-center'>
                    <div className={`${styles['benefits-heading']} flex justify-center items-center`}>
                    <h1>Mengapa Skill Swap Woman?</h1>
                    </div>
                    </div>

              <div className="">    
            <div className="flex justify-start">
                <div className={`${styles['benefits-content']} my-10 flex gap-5`}>
                <h6>1</h6>
                <div className={`${styles['benefits-card']}`} >
                    <h4>Belajar Keterampilan Baru</h4>
                    <p className='py-5'>Tingkatkan keahlian Kamu dalam berbagai bidang, dari keterampilan teknis hingga hobi kreatif.</p>
                </div>

                </div>
                <div>

                </div>
            </div>

            <div className="flex justify-center">
                <div className={`${styles['benefits-content']} my-10 flex gap-5`}>
                <h6>2</h6>
                <div className={`${styles['benefits-card']}`} >
                    <h4>Bagi Keahlian Kamu</h4>
                    <p className='py-5'>Ajarkan keterampilan Anda kepada perempuan lain dan jadilah bagian dari komunitas yang saling mendukung.</p>
                </div>

                </div>
                <div>

                </div>
            </div>

            <div className="flex justify-end">
                <div className={`${styles['benefits-content']} my-10 flex gap-5`}>
                <h6>3</h6>
                <div className={`${styles['benefits-card']}`} >
                    <h4>Fleksibel dan Aman</h4>
                    <p className='py-5'>Pilih cara bertukar keterampilan, baik secara online, offline, atau melalui materi</p>
                </div>

                </div>
                <div>

                </div>
            </div>
            </div>  

                </div>
            </div>
        
        </>
    )
}

export  default Benefits