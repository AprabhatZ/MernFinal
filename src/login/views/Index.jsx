import Input from "common/form/Input";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const image = require('../../images/login.png');

function Login() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email:"",
    password:"",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(data);

    try {
      const res = await axios.post("http://localhost:5000/api/login", data);
      console.log(res.data);
      localStorage.setItem(
        "access-token",
        JSON.stringify(res.data.accessToken)
      );
      console.log(res.data.accessToken);
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="">
      <form className="relative m-3 md:mx-8 lg:w-1/2 lg:mx-12">
      {/* <form className="grid lg:grid-cols-2 grid-flow-row gap-x-10 m-4 md:mx-8 lg:mx-12"> */}
       <div>
       <Input
          id="email"
          lable="Your Email"
          type="email"
          value={data.email}
          placeholder="example@gmail.com"
          handleChange={handleChange}
          //    error= "email"
        />

       </div>

        <div>
        <Input
          id="password"
          lable="Your password"
          type="password"
          value={data.password}
          handleChange={handleChange}
          //    error= "password"
        />

        </div>
       
        {/* <Checkbox id="remember" purpose="remember" label="Remember me" /> */}
        
      </form>
      <img  className=" absolute   xl:mr-24 scale-90 top-20 right-0 hidden lg:block "src={image} alt="" />


      <div className="  pr-8 lg:pl-8 md:pl-4">
      <button
          className=" ml-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-28 w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
          onClick = {handleLogin}
        >
          Login
        </button>

      </div>
      
    </div>
    // <p className="dark:text-white  ">test:{data.password}</p>
    // <p className="dark:text-white  ">test:{data.email}</p>

  );
}
export default Login;
