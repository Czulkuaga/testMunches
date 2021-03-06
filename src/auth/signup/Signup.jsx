import { Link } from "react-router-dom";
import './signup.css'

function SignUp(){
    return (
        <section className="w-100 h-screen">
            <div className="w-100 h-screeen flex flex-col-reverse xl:flex xl:flex-row lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col-reverse">
                <div className="w-12/12 xl:w-4/12 lg:w-4/12 md:w-4/12 sm:w-12/12 h-screen bg-green-500">
                    <div className="container h-full">
                        <div className="grid grid-row-1 h-full">
                            <div className="grid grid-col-1">
                                <div className='flex items-center justify-center'>
                                    <div className="w-11/12">
                                        <h2 className="text-4xl text-center font-bold wellcome-typograft text-gray-100 mt-6 mb-12">Wellcome back!</h2>
                                        <p className="font-bold text-gray-100 text-center mb-8 text-lg">the keep connect with us please login with you personal info.</p>
                                        <div className='flex justify-center'>
                                            <Link to="/signin">
                                                <button className='w-44 border-2 border-solid border-gray-100 rounded-xl text-gray-100 py-1 hover:bg-green-600 hover:text-white'>Sign in</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-12/12 xl:w-8/12 lg:w-8/12 md:w-8/12 sm:w-12/12 h-screen flex justify-center items-center">
                    <div className="container">
                        <div className="grid grid-row-1">
                            <div className="grid grid-col-1 flex justify-center items-center">
                                <div className="w-96 my-14">
                                    <h2 className="text-3xl text-green-400 signin-title text-center my-6">Create account</h2>
                                    <div className='flex justify-center'>
                                        <div className='mx-2 w-12 h-12 border-solid border-2 border-gray-200 rounded-full flex justify-center items-center bg-gray-100'>
                                            <svg className='w-7 h-7' viewBox="0 0 10 20" version="1.1">
                                                <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#000000">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className='mx-2 w-12 h-12 border-solid border-2 border-gray-200 rounded-full flex justify-center items-center bg-gray-100'>
                                            <svg className='w-6 h-6' viewBox="0 0 20 20" version="1.1">
                                                <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7399.000000)" fill="#000000">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path d="M263.821537,7247.00386 L254.211298,7247.00386 C254.211298,7248.0033 254.211298,7250.00218 254.205172,7251.00161 L259.774046,7251.00161 C259.560644,7252.00105 258.804036,7253.40026 257.734984,7254.10487 C257.733963,7254.10387 257.732942,7254.11086 257.7309,7254.10986 C256.309581,7255.04834 254.43389,7255.26122 253.041161,7254.98137 C250.85813,7254.54762 249.130492,7252.96451 248.429023,7250.95364 C248.433107,7250.95064 248.43617,7250.92266 248.439233,7250.92066 C248.000176,7249.67336 248.000176,7248.0033 248.439233,7247.00386 L248.438212,7247.00386 C249.003881,7245.1669 250.783592,7243.49084 252.969687,7243.0321 C254.727956,7242.65931 256.71188,7243.06308 258.170978,7244.42831 C258.36498,7244.23842 260.856372,7241.80579 261.043226,7241.6079 C256.0584,7237.09344 248.076756,7238.68155 245.090149,7244.51127 L245.089128,7244.51127 C245.089128,7244.51127 245.090149,7244.51127 245.084023,7244.52226 L245.084023,7244.52226 C243.606545,7247.38565 243.667809,7250.75975 245.094233,7253.48622 C245.090149,7253.48921 245.087086,7253.49121 245.084023,7253.49421 C246.376687,7256.0028 248.729215,7257.92672 251.563684,7258.6593 C254.574796,7259.44886 258.406843,7258.90916 260.973794,7256.58747 C260.974815,7256.58847 260.975836,7256.58947 260.976857,7256.59047 C263.15172,7254.63157 264.505648,7251.29445 263.821537,7247.00386" id="google-[#178]"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className='mx-2 w-12 h-12 border-solid border-2 border-gray-200 rounded-full flex justify-center items-center bg-gray-100'>
                                            <svg className='w-6 h-6' viewBox="0 0 20 20" version="1.1">
                                                <g id="Dribbble-Light-Preview" transform="translate(-180.000000, -7479.000000)" fill="#000000">
                                                    <g id="icons" transform="translate(56.000000, 160.000000)">
                                                        <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#161]"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className='flex justify-center mt-5 mb-6'>
                                        <span className='text-bold text-md text-gray-400'>Or use your email for registration</span>
                                    </div>
                                    <div className='my-8'>
                                        <form action="">
                                            <div className="input-wrapper">
                                                <input type="text" className="form-input-signin w-10/12 bg-gray-100" placeholder="Name" autoFocus />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                            <div className="input-wrapper mt-4">
                                                <input type="email" className="form-input-signin w-10/12 bg-gray-100" placeholder="Email" />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className='input-wrapper mt-4'>
                                                <input type="password" className="form-input-signin w-10/12 bg-gray-100" placeholder="Password" />
                                                <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                                </svg>
                                            </div>
                                            <div className='mt-4 flex justify-center'>
                                                <span className='cursor-pointer rounded-xl text-gray-700 text-md px-2 py-1 hover:text-gray-100 hover:bg-green-400 transition-all'>Forgot your password?</span>
                                            </div>
                                            <div className='flex justify-center mt-4'>
                                                <button className='w-3/6 bg-green-400 text-white text-bold py-2 rounded-md hover:bg-green-500 transition-all'>Sign up</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    )
}

export default SignUp
