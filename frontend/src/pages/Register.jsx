import { useState } from 'react';
import { Link } from 'react-router';
import toast, {} from "react-hot-toast"
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle registration logic

    if(username===""||password===""){
      toast.error("all fields are required");
      return 
    }

    if(username.length<4||username.length>20){
      toast.error("username  length should be between 4-20");
      return 
    }

    const regex=/^(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])[A-Za-z\d!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]{8,}$/

    if(!regex.test(password)){
      toast.error("password not strong enough");
      return
    }

  try{
      const isRegistered=await axios.post(import.meta.env.VITE_API_URL+"/user/register",{
      username,
      password
    })
    console.log(isRegistered)

    if(isRegistered){

      toast.success(isRegistered.data.msg);
    }
    
  }catch(err){
    toast.error(err.response.data.msg)
    console.log(err.response.data.msg)
  }


    // const isRegistered=
  };

  return (
    <div className=" bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Register</h2>
          <p className="text-gray-500 mt-2">Create your account</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Choose a username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="Choose a password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Account
          </button>

          <div className="text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/" className="text-indigo-600 hover:text-indigo-500 font-medium">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;