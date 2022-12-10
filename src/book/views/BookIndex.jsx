import Thead from "book/components/table/Thead";
import Tbody from "book/components/table/TableRow";
import axios from "axios";
import { useEffect,useState } from "react";

function BookIndex(){

    const [books,setBooks ] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/books')
          .then(res => {
            setBooks(res.data);
            console.log(res.data);
          })
          .catch(err => {
            console.log(err);
          })
      }, [])
    
      
      const delData = async(id) => {
        try{
          await axios.delete(`http://localhost:5000/api/books/${id}`);
          setBooks(books.filter((book) => book._id !== id));
        }catch(err){
          console.log(err);
        }
      }
    return(
        
<div className="mt-10 overflow-x-auto relative shadow-md sm:rounded-lg m-2 md:mx-8 lg:mx-12">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Thead items={["Book Name","Catogery","Author","Price","Action"]}/>
        {books.map((book) => {
            return (
        <tbody><Tbody key={book._id} handler={() => delData(book._id) } title={book.title} category={book.category} price={book.price} author={book.author} /></tbody>
        );
    })}
    </table>
</div>

    )
    
}
export default BookIndex;