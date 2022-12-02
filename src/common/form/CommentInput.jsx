function CommentInput({htmlFor,label,id,rows,placeholder}) {
  return (
    <>
      <label
        htmlFor={htmlFor}
        class="block lg:mt-0.5 mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      ></textarea>
    </>
  );
}

export default CommentInput;

{/* <>
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
</> */}
