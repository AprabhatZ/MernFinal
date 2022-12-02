import Button from "common/button/Button";
import CommentInput from "common/form/CommentInput";
import Input from "common/form/Input";

function StoreBook() {
  return (
    <div className="">
      <form class="grid lg:grid-cols-2 grid-flow-row gap-x-10 m-4 md:mx-8 lg:mx-12 my-10">
        <div>
          <Input
            id="name"
            lable="Book Name"
            type="text"
            placeholder=""
            //    handlechange= "email"
            //    error= "email"
          />
        </div>
        <div>
          <Input
            id="author"
            lable="Book Author"
            type="text"
            placeholder=""
            //    handlechange= "email"
            //    error= "email"
          />
        </div>

        <div>
          <label
            for="category"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select an Category
          </label>
          <select
            id="category"
            class="mb-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a category</option>
            <option value="AD">Adventure stories</option>
            <option value="CL">Classics</option>
            <option value="CR">Crime</option>
            <option value="FT">Fairy tales, fables, and folk tales</option>
            <option value="FS">Fantasy</option>
            <option value="HF">Historical fiction</option>
            <option value="HS">Humour and satire</option>
          </select>
        </div>

        <div>
          <CommentInput
            htmlFor="message"
            label="Book Details"
            id="message"
            rows="7"
            placeholder="Something about book...."
          />
        </div>
            <Button
            label="Save"
            type="submit"
            className=" mt-16 ml-1.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        />
      </form>
 
    </div>
  );
}

export default StoreBook;

{
  /* <>
<label
  for="message"
  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
>
  Your message
</label>
<textarea
  id="message"
  rows="4"
  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  placeholder="Leave a comment..."
></textarea>
</> */
}
