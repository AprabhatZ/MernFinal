import axios from "axios";
import Thead from "book/components/table/Thead";
import TableRow from "user/components/TableRow";
import { useEffect,useState } from "react";


function UserIndex(){

      const [users,setUsers ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/user')
          .then(res => {
            setUsers(res.data);
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
    
      
      const delData = async(id) => {
        try{
          await axios.delete(`http://localhost:5000/api/user/${id}`);
          setUsers(users.filter((user) => user._id !== id));
        }catch(err){
          console.log(err);
        }
      }
    return(
        
<div className="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg m-2 md:mx-8 lg:mx-12">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Thead items={["User Name","Email","Action"]}/>
        {users.map((user) => {
            return (
        <tbody><TableRow key={user._id} handler={() => delData(user._id) } name={user.name} email={user.email}/></tbody>
        );
    })}
    </table>
</div>

    )
    
}

export default UserIndex;