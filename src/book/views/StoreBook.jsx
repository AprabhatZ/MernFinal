import CommentInput from "common/form/CommentInput";
import Input from "common/form/Input";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function StoreBook() {
  const options = [
    { value: "", category: "--Choose an option--" },
    { value: "Adventure stories", category: "Adventure stories" },
    { value: "Classics", category: "Classics" },
    { value: "Crime", category: "Crime" },
    { value: "Fairy tales", category: "Fairy tales" },
    { value: "Historical fiction", category: "Historical fiction" },
    { value: "Humour and satire", category: "Humour and satire" },
  ];
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: "",
    author: [""],
    category: options[0].value,
    description: "",
    price: "",
  });
  const [msg, setMsg] = useState("");

  const [errors, setErrors] = useState({});



  const handleChange = (e) => {
    setBook({
      ...book,
      [e.target.id]: e.target.value,
    });
  };
  const bookStore = async (e) => {
    e.preventDefault();
    if (book?.category == null) {
      setErrors({ ...errors, category: "Atleast choose a option!!" });
    } else 
    
    {
      try {
        await axios.post("http://localhost:5000/api/books", book);
        setMsg("Book Stored Successfully");

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
      <form className="grid lg:grid-cols-2 grid-flow-row gap-x-10 m-4 md:mx-8 lg:mx-12 my-10">
        <div>
          <Input
          
            id="title"
            lable="Book Title"
            type="name"
            placeholder="--Book title here--"
            value={book.title}
            handleChange={handleChange}
            //    error= "email"
          />
        </div>
        <div>
          <Input
            id="author"
            lable="Book Authors"
            type="text"
            value={book.author}
            placeholder="Lewis Wallace, Coleridge"
            handleChange={handleChange}
            //    error= "email"
          />
        </div>

        <div>
          <label
            for="category"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an Category
          </label>
          <select
            id="category"
            value={book.category}
            onChange={handleChange}
            className="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.category}
              </option>
            ))}
          </select>
          <p>{errors.category}</p>
        </div>
      <div>
        <Input
            id="price"
            lable="Price in Rs."
            type="number"
            min="50"
            max="10000"
            step="20"
            value={book.price}
            placeholder="--Minimum cost Rs.50 & Maximum cost Rs.10000--"
            handleChange={handleChange}
            //    error= "email"
          />
        </div>

        <div>
          <CommentInput
            id="description"
            htmlFor="description"
            label="Book Details"
            rows="7"
            placeholder="Something about book...."
            handleChange={handleChange}
            value={book.description}

          />
        </div>
      </form>
      <div className="  pr-8 lg:pl-8 md:pl-4">
      <button
          className=" ml-4  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-28 w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="submit"
          onClick = {bookStore}
        >
          Save
        </button>

      </div>
     
    </>
  );
}

export default StoreBook;