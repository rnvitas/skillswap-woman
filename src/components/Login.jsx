import logo from '../foto/lg-ssw.png'
import foto from '../foto/bg-benefits.png'


function Login () {
    return (
        <>
         <div className="wrapper container" style={{ 
                    backgroundImage: `url(${foto})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>

            <div className="auth-container  flex justify-center items-center">
                <div className="card-login mx-5 flex flex-col justify-center items-center px-5 py-5 my-10">
                    <div className="login-info flex justify-center items-center flex-col">
                        <img className="py-4" src={logo} alt="logo" />
                        <h1 className='py-3'>
                            Masuk Ke Akun
                        </h1>
                        <p>
                        Masuk untuk mulai bertukar keterampilan dengan komunitas perempuan inspiratf
                        </p>
                    </div>

                    <div className="login-form container my-5">
                    <form className="px-10" action="">
                    <div className="py-3">
                        <input  className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="email" placeholder='email' required />
                    </div>

                    <div className="py-3">
                        <input  className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" name="password" placeholder='password' required />
                    </div>

                    <div className="py-3 flex justify-center items-center">
                        <button className='lg-btn-primary'>Masuk</button>
                    </div>
                    </form>
                    </div>

                    <div className="login-info-bottom py-5">
                    <h6>Belum Punya Akun? <span>Daftar Sekarang!</span></h6>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Login