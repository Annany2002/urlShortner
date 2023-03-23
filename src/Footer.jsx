const Footer = () => {
  return (
    <div className="flex flex-col text-center w-full mb-2">
      <div className="mt-3 font-thin mx-auto w-3/4 border-t-2 border-gray-900 sm:mt-10 md:max-w-[640px]">
        <p className="mt-2 mb-1 font-serif">Copyright © 2023</p>
        <p className="pr-1 font-serif">
          Made By :
          <a className="font-bold text-xl font-serif t0 underline pl-2" href="https://github.com/Annany2002">
            SpecTrum
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer