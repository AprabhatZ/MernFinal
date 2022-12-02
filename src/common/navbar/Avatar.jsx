import { Dropdown } from "flowbite-react";

import { Avatar } from "flowbite-react";
import { useState } from "react";

function Ava({users}){

    const [user,setuser] = useState({
        name:'Prabhat',
        email:'prabhatbshah@gmail.com'
    }
    );
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
          className={''}
        />
      }
      arrowIcon ={true}
      inline={true}
    >
      <Dropdown.Header >
        <span className="block text-sm">{user.name}</span>
        <span className="block truncate text-sm font-medium">
          {user.email}
        </span>
      </Dropdown.Header>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Sign out</Dropdown.Item>
    </Dropdown>
  );
}
export default Ava;
