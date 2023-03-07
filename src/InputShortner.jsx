import { useState } from "react";

const InputShortner = ({ setInputValue }) => {
	const [value, setValue] = useState("");
	
	const handleClick = () => {
		setInputValue(value);
		setValue("");
	}

	return (
		<div className="flex flex-col m-auto items-center justify-center w-full ">
			<h1 className="font-bold text-6xl text-orange-500 p-6 text-center">URL 
			<span className="text-yellow-400 mx-4">Shortner</span>
			</h1>
			<input
				type="text"
				placeholder="Place a link to shorten it"
				value={value}
				onChange={e => setValue(e.target.value)}
				className="m-2 px-3 rounded-md"
			/>
			<button
				onClick={handleClick}
				className="uppercase bg-yellow-500 text-white border-none outline-none px-3 rounded-xl mt-4 hover:bg-yellow-400 hover:text-gray-100"
			>shorten</button>
		</div>
	)
}
export default InputShortner