import { Navbar } from "flowbite-react";
import Ava from "./Avatar";
// const name = "pranhat";
// const email = "prabhatbShahh@gmail.com"
import { Link } from "react-router-dom";

function Try() {


  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2702/2702154.png"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          BookME
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="/" active={false}>
          Home
        </Navbar.Link>
        <Navbar.Link href="/books"
        className="active:text-blue-600">Book</Navbar.Link>
        <Navbar.Link href="/">Services</Navbar.Link>
        <Navbar.Link href="/">Pricing</Navbar.Link>
        <Navbar.Link href="/">Contact</Navbar.Link>
        <div className=" ml-2 pt-2 md:pt-0">< Ava/></div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Try;
