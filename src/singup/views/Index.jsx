import Input from "common/form/Input";
import Button from "common/button/Button";

function Sign() {
  return (
    <form class = "m-4 md:mx-8 lg:mx-12">
      <Input
        id="name"
        lable="Your name"
        type="text"
        placeholder="Jhon Smith"
        // handelchange=""
      />

      <Input
        id="email"
        lable="Your email"
        type="email"
        placeholder="example@gmail.com"
        //    handlechange= "email"
        //    error= "email"
      />
      <Input
        id="password"
        lable="Your password"
        type="password"
        //    placeholder= "example@gmail.com"
        //    handlechange= "password"
        //    error= "password"
      />
        <Input
        id="password"
        lable="Confirm password"
        type="password"
        //    placeholder= "example@gmail.com"
        //    handlechange= "password"
        //    error= "password"
      />
    
      <Button
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        label="Sign up"
        type="Submit"
      />
    </form>
  );
}

export default Sign;
