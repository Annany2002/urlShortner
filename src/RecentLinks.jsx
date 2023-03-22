export const RecentLinks = ({ data }) => {
  return (
    <div className='flex flex-col items-center justify-center'>
      {
        data.map(i =>
          <div className='w-full tracking-wide text-center sm:w-3/4'>
            <div className="border-2 border-gray-700 hover:border-gray-500 rounded-3xl my-2">
              <p className='font-serif py-0 sm:pt-1'>
                <span className="font-medium text-[#14213d]">
                  Initial Link : {' '}
                </span>
                <span className="underline underline-offset-4">{i.full_link}</span>
              </p>
              <p className='font-serif py-0 sm:pb-1 sm:pt-1'>
                <span className="font-medium text-[#14213d]">
                  Shorten Link : {' '}
                </span>
                <span className="underline hover:text-gray-600 underline-offset-2">
                {i.short_link}
                </span>
              </p>
            </div>
          </div>)
      }
    </div>
  )
}
