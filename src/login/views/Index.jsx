import Button from "common/button/Button";
import Checkbox from "common/form/Checkbox";
import Input from "common/form/Input";


function Login(){
    return (
        <>
        <form class = " m-3 md:mx-8 lg:mx-12">
            <Input
           id="email"
           lable="Your Email"
           type= "email"
           placeholder= "example@gmail.com"
        //    handlechange= "email"
        //    error= "email"
        />
        <Input
           id="password"
           lable="Your password"
           type= "password"
        //    placeholder= "example@gmail.com"
        //    handlechange= "password"
        //    error= "password"
        />
        <Checkbox
        id="remember"
        purpose="remember"
        label="Remember me"
        />
        <Button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        label="Login"
        type="Submit"
        />
        </form>
        </>
        
    );

       
    

}
export default Login;