const Footer = () => {
  return (
    <div className="flex flex-col text-center w-full mb-2 pb-3">
      <div className="mt-3 font-thin mx-auto w-3/4 border-t-2 border-gray-900 sm:mt-10 md:max-w-[640px] dark:border-gray-200 dark:text-[#e5e5e5]">
        <p className="mt-2 mb-1 font-mono pt-4">Copyright © 2023</p>
        <p className="pr-1 font-serif pb-2">
          Made By :
          <a className="font-bold text-xl font-serif t0 underline pl-2 dark:text-gray-300" href="https://github.com/Annany2002">
            SpecTrum
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer