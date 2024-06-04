"use client";
import { useContext, useState } from "react";
import { toast,Toaster } from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/src/context/AuthContext";


const LoginPage = () => {
  var [showPassword, setShowPassword] = useState(false);
  var [loading, setLoading] = useState(false);
  var [loginError,setLoginError] = useState(false)

  var {refetch} = useContext(AuthContext)

  var router = useRouter()

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
    setLoginError("")
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      var res = await axios.post(`/api/auth/login`, formData);
      if (res.data.success) {
        toast.success(res.data.message);
        refetch()
        router.push('/home')
      }
    } catch (error) {
      if (error?.response?.data?.message) {
        setLoginError(error.response.data.message);
      }
    } finally {
      setLoading(false);
      setTimeout(()=>{
        setLoginError("")
      },5000)
    }
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-tr from-white to-blue-200 justify-center p-4 items-center">
      <div className="grid max-w-xl md:max-w-5xl relative w-full md:w-auto grid-cols-1 md:grid-cols-2">

        <div style={{animationDuration:"20s"}} className="absolute animate-spin bottom-full left-0 grid grid-cols-6 gap-1">
          {
            Array.from(Array(36).keys()).map(v=><div key={v} className="w-2 rounded-full h-2 bg-blue-800/20"></div>)
          }
        </div>

        <div style={{animationDuration:"20s"}} className="absolute top-full right-0 grid animate-spin grid-cols-6 gap-1">
          {
            Array.from(Array(36).keys()).map(v=><div key={v} className="w-2 h-2 rounded-full bg-blue-800/20"></div>)
          }
        </div>

        <div className="hidden md:flex justify-center">
          <img src="/images/com.svg" className="w-[60vw]" alt="" />
        </div>
        <form
          onSubmit={loginHandler}
          disabled={true}
          className="w-full px-4 py-8  md:px-8 md:py-12 flex bg-white/70 rounded-lg backdrop-blur-md shadow-lg flex-col justify-center"
        >
          <img className="w-10 mx-auto mb-4" src="/images/elogo.webp" alt="" />
          <h2 className="text-2xl text-center font-semibold ">
            Sign in your Account!
          </h2>
          <p className="text-center mb-4 text-sm text-gray-700">
            Welcome to Eworkspace Dashboard
          </p>

          <input
            disabled={loading}
            onChange={changeHandler}
            value={formData.username}
            name="username"
            required
            type="text"
            className={`${loginError ? "border-red-600 text-red-600" : ""} autofill:bg-white block border-gray-400 placeholder:text-gray-400 placeholder:text-sm border w-full rounded-md mb-4`}
            placeholder="Username"
          />

          <div className="relative mb-2">
            <input
              disabled={loading}
              onChange={changeHandler}
              value={formData.password}
              name="password"
              required
              type={showPassword ? "text" : "password"}
              className={`${loginError ? "border-red-600 text-red-600" : ""} block border-gray-400 placeholder:text-gray-400 placeholder:text-sm border w-full rounded-md`}
              placeholder="Password"
            />
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={`bx cursor-pointer absolute right-3 text-xl top-1/2 -translate-y-1/2 bx-${
                showPassword ? "show" : "hide"
              } text-gray-500`}
            ></i>
          </div>

          <a className="text-right block text-xs mb-4 text-gray-700" href="#">
            Forgot Password?
          </a>

          <button
            disabled={loading}
            className={`${
              loading ? "opacity-70" : ""
            } disabled:cursor-not-allowed block mb-3 rounded-md w-full bg-blue-800 text-white py-2 px-3`}
          >
            {loading ? (
              <i className="bx animate-spin bx-loader-circle"></i>
            ) : (
              "Sign in"
            )}
          </button>
          
          <p className="text-center text-red-600 text-sm" >{loginError}</p>

        </form>
      </div>
    </div>
  );
};

export default LoginPage;
