import logo from '../foto/lg-ssw.png'
import foto from '../foto/bg-benefits.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Auth } from '../redux/userSlice'
import Swal from 'sweetalert2'



function Login () {
    const dispatch =useDispatch();
    const [input,setInput]=useState({
        email:"",
        password:"",
    });
    const { isLoggedIn, loggedInUser } = useSelector((state) => state.users);

    const handleInput = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value 

          });
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Dispatch action login
        dispatch(Auth(input));
      };

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
                        <input  onChange={handleInput} className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="email" name="email" value={input.email} placeholder='email' required />
                    </div>

                    <div className="py-3">
                        <input onChange={handleInput}  className="w-full rounded-[10px] p-[12px_24px] bg-[#F2F5F7] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" type="password" name="password" value={input.password} placeholder='password' required />
                    </div>

                    <div className="py-3 flex justify-center items-center">
                        <button onClick={handleLogin} className='lg-btn-primary'>Masuk</button>
                    </div>
                    </form>
                    </div>

                    <div className="login-info-bottom py-5">
                    <h6>Belum Punya Akun? <span><Link to="/register">Daftar Sekarang!</Link></span></h6>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default Login