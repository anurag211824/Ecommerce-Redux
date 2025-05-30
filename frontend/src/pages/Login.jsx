import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.webp";
import { loginUser } from "../redux/slices/Authslice.js";
import { useDispatch } from "react-redux";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch  = useDispatch();
  const handleSubmit =(e)=>{
    e.preventDefault();
    dispatch(loginUser({email,password}))
  }
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 md:p-12">
        <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-8 rounded-lg border shadow-sm">
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl font-bold text-center mb-6">Hey there! 👋</h2>
          <p className="text-center mb-6">
            Enter your password and username to Login
          </p>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm fnont-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm fnont-semibold mb-2"> Password </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className="w-full p-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">Sign In</button>
           <p className="mt-6 text-center text-sm">
            Do not have an account ?
            <Link  to="/register" className="text-blue-500"> Register</Link>
            </p>
        </form>
      </div>
      <div className="hidden md:block w-1/2 bg-gray-800">
      <div className="h-full flex flex-col justify-center items-center">
        <img src={login} alt="Login" className="h-[620px] w-full object-cover" />
      </div>
      </div>
    </div>
  );
};

export default Login;
