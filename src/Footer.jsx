const Footer = () => {
  return (
    <div className="flex flex-col text-center w-full">
      <div className="mt-3 font-thin mx-auto w-2/3 border-t-2 border-gray-300 sm:mt-10">
        <p className="text-white mt-2 mb-1">Copyright © 2023</p>
        <p className="text-white pr-1">
          Made By :
          <span className="font-bold text-xl font-serif text-gray-300 underline pl-2">
            SpecTrum
          </span>
        </p>
      </div>
    </div>
  )
}

export default Footer