import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../contects/AuthProvider'
import googlelogo from '../assets/google-logo.svg'
import { getAuth, updateProfile } from 'firebase/auth';

const Signup = () => {
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';

  const handleSignUp = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const username = form.username.value;

    try {
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Update profile with the username
      await updateProfile(user, {
        displayName: username,
      });

      alert('Signup Successfully!');
      navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  const handleRegister = async () => {
    try {
      const result = await loginWithGoogle();
      const user = result.user;
      alert('Signup Successfully!');
      navigate(from, { replace: true });
    } catch (error) {
      const errorMessage = error.message;
      setError(errorMessage);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-8 py-4 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Sign up Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form onSubmit={handleSignUp} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="username" name="username" type="text" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Username" required />
                </div>
                <div className="relative">
                  <input id="email" name="email" type="email" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Email address" required />
                </div>
                <div className="relative">
                  <input id="password" name="password" type="password" className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600" placeholder="Password" required />
                </div>
                <p className='px-2 py-4'>If you have an account <Link to='/login' className='text-blue-600 underline'>Login</Link> here</p>
                <div className="relative">
                  <button className="bg-blue-500 text-white rounded-md px-2 py-1">Sign up</button>
                </div>
              </form>
              <div className='flex w-full items-center flex-col gap-3'>
                <button onClick={handleRegister} className='block'>
                  <img src={googlelogo} alt='google' className='w-12 h-12 inline-block' /> Login with Google
                </button>
              </div>
              {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

