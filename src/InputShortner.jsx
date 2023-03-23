import { useState } from "react";

const InputShortner = ({ setInputValue }) => {
	const [value, setValue] = useState("");

	const handleClick = () => {
		setInputValue(value);
		setValue("");
	}


	return (
		<div className="flex flex-col items-center mb-3">
			<div className="flex flex-col my-4 sm:flex-row">
				<h1 className="font-bold text-[#fca311] px-2 tracking-wide text-6xl md:text-7xl text-center">URL</h1>
				<h1 className="text-[#14213d] font-bold tracking-wide text-6xl px-2 md:text-7xl">Shortner</h1>
			</div>
			<input
				type="text"
				placeholder="Place a link to shorten"
				value={value}
				onChange={e => {
					setValue(e.target.value)
				}}
				className="m-2 mx-auto px-3 py-2 rounded-sm font-mono tracking-tighter w-3/4 text-center"
			/>
			<button
				onClick={handleClick}
				className="uppercase bg-[#fca311] text-white border-none outline-none px-3 rounded-xl my-4 focus:bg-[#fca311] hover:bg-orange-500 hover:text-gray-100 font-thin"
			>shorten</button>
		</div>
	)
}
export default InputShortner
