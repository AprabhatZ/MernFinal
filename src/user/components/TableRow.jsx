import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function TableRow({name,email,handler}) {

  const [books, setBooks] = useState([]);
  return (
        <>
        
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {name}
                </th>
                <td className="py-4 px-6">{email}</td>
                <td className="py-4 px-6">
                <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    onClick={handler}
                >
                    Delete
                </a>
                </td>
                </tr>
       
        </>
  );
}

export default TableRow;
