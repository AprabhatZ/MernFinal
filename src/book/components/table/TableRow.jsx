import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios';

function Tbody({title,author,category,price,handler}) {

  const [books, setBooks] = useState([]);
  return (
        <>
        
                <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                scope="row"
                className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {title}
                </th>
                <td className="py-4 px-6">{category}</td>
                <td className="py-4 px-6">{author}</td>
                <td className="py-4 px-6">{price}</td>
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

export default Tbody;
