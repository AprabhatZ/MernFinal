import { useState } from "react";

function Card() {
  const [books, setBook] = useState(
    {
      bookName: "The Jungle Book",
      category: "Story",
      author: ["Jhon Smit", ", Prabhat Shah"],
      price: "Rs.3000",
      action: "Edit",
    },
    {
      bookName: "Muna Madan",
      category: "Story",
      author: "Laxmi Prashad Devkota",
      price: "Rs.1999",
      action: "Edit",
    },
    {
      bookName: "The Jungle Book",
      category: "Story",
      author: "Jhon Smit",
      price: "Rs.3000",
      action: "Edit",
    }
  );

  return (
    // <div className=" w-60 h-80 bg-slate-700  backdrop-blur-sm hover:scale-100 rounded-md   border border-solid border-stone-100 ">
    //     <img className=" w-56 mx-auto h-60 bg-slate-300" src="" alt="" />

    // </div>
    <div className="  bg-slate-100 dark:bg-slate-500 m-4 lg:m-8 rounded-lg py-20 px-8 mt-32 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-flow-row gap-y-16 sm:gap-y-2 md:gap-y-0">
      <div className="hover:scale-105 sm:scale-90 sm:hover:scale-95 lg:scale-90 xl:scale-90 xl:hover:scale-95 transition ease-in-out relative mx-auto max-w-xs p-6 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-50 sm:px-auto">
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-500">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
      <div className="hover:scale-105 sm:scale-90 sm:hover:scale-95 lg:scale-90 xl:scale-90 xl:hover:scale-95 transition ease-in-out relative mx-auto max-w-xs p-6 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-50 sm:px-auto">
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-500">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
      <div className="hover:scale-105 sm:scale-90 sm:hover:scale-95 lg:scale-90 xl:scale-90 xl:hover:scale-95 transition ease-in-out relative mx-auto max-w-xs p-6 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-50 sm:px-auto">
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-500">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
      <div className="hover:scale-105 sm:scale-90 sm:hover:scale-95 lg:scale-90 xl:scale-90 xl:hover:scale-95 transition ease-in-out relative mx-auto max-w-xs p-6 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-50 sm:px-auto">
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-500">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
      <div className="hover:scale-105 sm:scale-90 sm:hover:scale-95 lg:scale-90 xl:scale-90 xl:hover:scale-95 transition ease-in-out relative mx-auto max-w-xs p-6 rounded-md shadow-md dark:bg-gray-700 dark:text-gray-50 sm:px-auto">
        <img
          src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          alt=""
          className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-widest uppercase dark:text-blue-500">
            Quisque
          </span>
          <h2 className="text-xl font-semibold tracking-wide">
            Nam maximus purus
          </h2>
        </div>
        <p className="dark:text-gray-100">
          Mauris et lorem at elit tristique dignissim et ullamcorper elit. In
          sed feugiat mi. Etiam ut lacinia dui.
        </p>
      </div>
    </div>
 
  );
}
export default Card;

// its for card container
{/* <div className=" bg-slate-500 m-4 lg:m-8 rounded-lg py-20 px-8 mt-32 grid grid-cols-1  lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 grid-flow-row gap-y-6">
</div> */}

