import React, { useState } from 'react'
import './AuthPage.css';
import {FaFacebookF, FaLinkedinIn, FaUserAlt} from 'react-icons/fa';
import {BsInstagram, BsYoutube} from 'react-icons/bs';
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as yup from 'yup'
import { loginUser } from '../../actions/users';
import {SiGmail} from 'react-icons/si';
import {FaLock} from 'react-icons/fa';

const AuthPage = () => {
  // navigate
  const navigate = useNavigate();
  // dispatch
  const dispatch = useDispatch();

  // signin or signup
  const [isSignIn, setIsSignIn] = useState(true);

  const validationSchema = yup.object({
    email: yup.string().email('please enter a valid email').required("the email is required"),
    password: yup.string().required('password is required'),
    
  });
 
  const onSubmit = async (values) => {
    // dispatch(loginRequest());
    console.log('email', values.email, values.password);

    try {
      const user = {
        email: values.email,
        password: values.password,
        device_name: 'userAgents',
      }

      // const user = {
      //   email: 'mahmoud.albatran.20@gmail.com',
      //   password: 'password',
      //   device_name: 'mah',
      // }
      
      dispatch(loginUser(user, navigate));
      
    }
     catch (error) {
      console.log(error);
    }
  }

 const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
    },
    validateOnBlur: true,
    onSubmit,
    validationSchema: validationSchema,
  }
);

  return (
    <div className='w-[100%] h-[100vh] m-0 flex bg-[#02263d] items-center justify-center   '>
        <div  className='container w-[85%] h-[90%] flex'>
            <div dir='rtl'  className='content backdrop-blur-sm p-[2.8rem] text-[#e4e4e4] flex flex-col gap-[1.5rem]  w-[58%] h-[100%] bg-transparent  text-start'>
                <h2 className='text-[2rem] leading-1'>اهلا وسهلا بك في<br /> <p className='text-[1.7rem]'>خدماتنا الالكترونية</p></h2>
                <p className='text-[1.1rem] my-[20px] '>من خلال تسجيل الدخول الى الموقع يمكنك التمتع بكافة الخدمات و المميزات التي يوفرها متجرنا.</p>
                <div className='flex items-center justify-start gap-[1rem]  '><FaFacebookF className='text-[1.5rem] hover:scale-[1.2] transition-all duration-500 ' /><FaLinkedinIn className='text-[1.5rem] hover:scale-[1.2] transition-all duration-500 ' /><BsInstagram className='text-[1.5rem] hover:scale-[1.2] transition-all duration-500 ' /><BsYoutube className='text-[1.5rem] hover:scale-[1.2] transition-all duration-500 ' /></div>
            </div>
            <div className='logreg-box relative w-[42%] overflow-auto'>

              {/* login  */}
              <div className='absolute form-box login flex flex-col justify-center items-center w-[100%] h-[100%] bg-transparent backdrop-blur-xl text-[#e4e4e4] '>
                    {/* <input type= /> */}
                    <h2 className='font-semibold text-3xl text-center title'>SIGN IN</h2>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col w-[100%] m-[1rem]' >

                        <div className='relative input-box h-[4rem] border-b border-[#e4e4e4] m-[15px] mb-0'>
                          <span className='icon absolute right-0 top-[1.8rem] ' ><SiGmail /></span>
                          <input  name="email" type='email'  onChange={formik.handleChange} value={formik.values.email} className={`w-[100%] h-[100%] bg-transparent border-none outline-none`} />
                          <label className='text-[16px] transition-[.5s] ease-in-out font-semibold pointer-events-none absolute top-[2rem] left-0 -translate-y-[50%]'>Email</label>
                        </div>

                        {formik.touched.email && formik?.errors?.email}
                        
                        <div className='relative input-box border-b border-[#e4e4e4] h-[4rem] m-[15px] mb-0'>
                          <span className='icon absolute right-0 top-[1.8rem] ' ><FaLock /></span>
                          <input type={'password'} name="password" onChange={formik.handleChange} value={formik.values.password} className='w-[100%] h-[100%] bg-transparent border-none outline-none' />
                          <label className='text-[16px] transition-[.5s] ease-in-out  font-semibold pointer-events-none absolute top-[2rem] left-0 -translate-y-[50%]'>Password</label>
                        </div>

                        

                        {formik.touched.password && formik?.errors?.password}
                        <button type='submit' className='flex items-center justify-center w-[100%] text-[1.2rem] h-[45px] bg-gradient-to-r from-[#044685] to-[#005bb1] hover:to-[#307cc4] font-bold transition-all duration-200 shadow-sm shadow-black rounded-[5px] text-center  mt-[2rem] ' onClick={() => setIsSignIn(false)}>Sign in</button>
                        <div className='login-register text-center font-semibold text-[1.1rem] mt-[1.5rem]'>
                          Dont have account ? <a href='#' className='register-link text-white font-bold no-underline hover:underline' onClick={() => setIsSignIn(false)}>Sign up</a>
                        </div> 
                    </form>
                  </div>
                  {/* Register    */}
                  <div className={`absolute form-box register flex flex-col transition-all duration-[.5s] justify-center ${!isSignIn ? 'translate-x-0' : 'translate-x-[30rem]'} items-center w-[100%] h-[100%] bg-transparent backdrop-blur-xl text-[#e4e4e4] `}>
                    {/* <input type= /> */}
                    <h2 className='font-semibold text-3xl text-center title'>SIGN UP</h2>
                    <form onSubmit={formik.handleSubmit} className='flex flex-col w-[100%] m-[1rem]' >

                        <div className='relative input-box border-b border-[#e4e4e4] h-[4rem] m-[15px] mb-0'>
                          <span className='icon absolute right-0 top-[1.8rem] ' ><FaUserAlt /></span>
                          <input type={'password'} name="password" onChange={formik.handleChange} value={formik.values.password} className='w-[100%] h-[100%] bg-transparent border-none outline-none' />
                          <label className='text-[16px] transition-[.5s] ease-in-out  font-semibold pointer-events-none absolute top-[2rem] left-0 -translate-y-[50%]'>Name</label>
                        </div>
                        <div className='relative input-box h-[4rem] border-b border-[#e4e4e4] m-[15px] mb-0'>
                          <span className='icon absolute right-0 top-[1.8rem] ' ><SiGmail /></span>
                          <input  name="email" type='email'  onChange={formik.handleChange} value={formik.values.email} className={`w-[100%] h-[100%] bg-transparent border-none outline-none`} />
                          <label className='text-[16px] transition-[.5s] ease-in-out font-semibold pointer-events-none absolute top-[2rem] left-0 -translate-y-[50%]'>Email</label>
                        </div>

                        {formik.touched.email && formik?.errors?.email}
                        
                        <div className='relative input-box border-b border-[#e4e4e4] h-[4rem] m-[15px] mb-0'>
                          <span className='icon absolute right-0 top-[1.8rem] ' ><FaLock /></span>
                          <input type={'password'} name="password" onChange={formik.handleChange} value={formik.values.password} className='w-[100%] h-[100%] bg-transparent border-none outline-none' />
                          <label className='text-[16px] transition-[.5s] ease-in-out  font-semibold pointer-events-none absolute top-[2rem] left-0 -translate-y-[50%]'>Password</label>
                        </div>

                        

                        {formik.touched.password && formik?.errors?.password}
                        <button type='submit' className='flex items-center justify-center w-[100%] text-[1.2rem] h-[45px] bg-gradient-to-r from-[#044685] to-[#005bb1] hover:to-[#307cc4] font-bold transition-all duration-200 shadow-sm shadow-black rounded-[5px] text-center  mt-[2rem] '>Sign up</button>
                        <div className='login-register text-center font-semibold text-[1.1rem] mt-[1.5rem]'>
                          Dont have account ? <a href='#' className='register-link text-white font-bold no-underline hover:underline' onClick={() => setIsSignIn(true)}>Sign in</a>
                        </div> 
                    </form>
                  </div>
              </div>
            </div>
        </div>
  )
}

export default AuthPage