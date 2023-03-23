import CopyToClipboard from "react-copy-to-clipboard"

export const RecentLinks = ({ data }) => {
  return (
    <div className='flex flex-col items-center mt-0 justify-center md:grid md:grid-cols-2 lg:grid-cols-3'>
      {
        data.map((i, index) =>
          <div key={index + 'link'} className='w-2/3 tracking-wide text-center py-2 mx-auto border-2 my-2 break-words border-gray-900 hover:border-gray-600 rounded-3xl sm:w-3/4'>
            <p className='py-1 font-serif px-1 sm:px-3'>
              <span className="font-semibold text-[#14213d]">
                Original Link : {' '}
              </span>
              <span className="px-2 font-light font-mono hover:text-gray-600 hover:underline hover:underline-offset-4">{i.full_link}</span>
            </p>
            <p className='font-serif px-1 sm:px-2 py-1'>
              <span className="font-semibold text-[#14213d]">
                Shorten Link : {' '}
              </span>
              <span className="font-mono px-1 hover:underline hover:text-gray-600 hover:underline-offset-2">
                {i.short_link}
              </span>
            </p>
            <CopyToClipboard
              text={i.short_link}
              // onCopy={() => {
              //   console.log('copied')
              // }}
            >
              <button className="border-2 border-gray-600 px-2 rounded-md">
                Copy
              </button>
            </CopyToClipboard>
          </div>
        )
      }
    </div>
  )
}
