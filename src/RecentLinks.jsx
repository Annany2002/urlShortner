import CopyToClipboard from "react-copy-to-clipboard"

export default function RecentLinks({ data, handleDelete}){

  return (
    <div className='flex flex-col items-center mt-0 justify-center md:grid md:grid-cols-2 lg:grid-cols-3'>
      {
        data.map((i, index) =>
          <div key={index + 'link'} className='w-2/3 tracking-wide text-center py-2 mx-auto border-2 my-2 break-words border-gray-900 hover:border-gray-600 rounded-3xl sm:w-3/4 dark:border-gray-100 dark:hover:border-gray-500'>
            <p className='py-1 font-serif px-1 sm:px-3'>
              <span className="font-semibold text-[#14213d] dark:text-[#e5e5e5] font-mono">
                Original Link : {' '}
              </span>
              <span className="px-2 font-light font-mono hover:text-gray-600 hover:underline hover:underline-offset-4 dark:text-[#e5e5e5] dark:hover:text-[#f2e9e4]">{i.full_link}</span>
            </p>
            <p className='font-serif px-1 sm:px-2 py-1'>
              <span className="font-semibold text-[#14213d] dark:text-[#e5e5e5] font-mono">
                Shorten Link : {' '}
              </span>
              <span className="font-mono px-1 hover:underline hover:text-gray-600 hover:underline-offset-2 dark:text-[#e5e5e5] dark:hover:text-[#f2e9e4]">
                {i.short_link}
              </span>
            </p>
            <CopyToClipboard
              text={i.short_link}
            >
              <button className="border-2 border-gray-900 font-mono tracking-wider bg-[#fca311] mx-2 px-6 my-1 font-bold rounded-md dark:text-[#e5e5e5]">
                Copy
              </button>
            </CopyToClipboard>
            <button
              onClick={(e) => handleDelete(i.id)}
              className="border-2 border-gray-900 font-mono px-4 font-bold rounded-md bg-[#fca311] hover:bg-[#ffb133] my-1 mx-2 dark:text-[#e5e5e5]">Remove</button>
          </div>
        )
      }
    </div>
  )
}
