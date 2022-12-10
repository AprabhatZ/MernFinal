import { useState,useEffect } from "react";
import Input from "common/form/Input";
import { toast } from 'react-toastify';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import image from "images/login.png"


function Sign() {
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [verifiedpassword,setPass] = useState("");
  const handlePass  = (e)=>{
    setPass(e.target.value);
  }

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  };


  const addUser = async (e) => {
    e.preventDefault();
    if (data?.password !== verifiedpassword) {
      setErrors({ ...errors, password: "password not matched" });
    } else 
    
    {
      try {
        await axios.post("http://localhost:5000/api/user", data);
        setMsg("User Added Successfully");

        toast.success("Signin Successfully", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        navigate("/books");
      } catch (err) {
        setMsg("('Error Occured')");
      }
    }
  };

  return (
    <>
      <form className="relative m-3 md:mx-8 lg:w-1/2 lg:mx-12">
    {/* <form className="grid lg:grid-cols-2 grid-flow-row gap-x-10 m-4 md:mx-8 lg:mx-12"> */}
      <div>
      <Input
          id="name"
          lable="Your name"
          type="name"
          value={data.name}
          placeholder="Jhon Smith"
          handleChange={handleChange}
        />

      </div>
    
      <div>
        <Input
          id="email"
          lable="Your email"
          value={data.email}
          type="email"
          placeholder="example@gmail.com"
          handleChange={handleChange}
        />
      </div>
      <div>
        <Input
          id="password"
          lable="Your password"
          value={data.password}
          type="password"
          handleChange={handleChange}
          // error= {errors.password}
        />
      </div>
      <div>
        <Input
          id="verifiedpassword"
          lable="Confirm password"
          type="password"
          value={verifiedpassword}
          handleChange={handlePass}
          error={errors.password}
        />
      </div>
    </form>
    <img  className=" absolute   xl:mr-24 scale-90 top-20 right-0 hidden lg:block "src={image} alt="" />

     <div className="  pr-8 lg:pl-8 md:pl-4">
     <button
         className=" ml-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-28 w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
         type="submit"
         onClick = {addUser}
       >
         Sign up
       </button>

     </div>
    </>
  );
}

export default Sign;
