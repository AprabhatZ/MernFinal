function Tbody() {
  const books = [
    {
      bookName: "The Jungle Book",
      category: "Story",
      author: ["Jhon Smit",", Prabhat Shah"],
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
    },
  ];
  return (
        <>
        {books.map((book) => {
            return (
                <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                {book.bookName}
                </th>
                <td class="py-4 px-6">{book.category}</td>
                <td class="py-4 px-6">{book.author}</td>
                <td class="py-4 px-6">{book.price}</td>
                <td class="py-4 px-6">
                <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    {book.action}
                </a>
                </td>
                </tr>
            );
        })}
        </>
  );
}

export default Tbody;
