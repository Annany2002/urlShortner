import { useState } from "react";

const InputShortner = ({ setInputValue }) => {
	const [value, setValue] = useState("");

	const handleClick = () => {
		setInputValue(value);
		setValue("");
	}

	return (
		<div className="flex flex-col items-center -mt-4 mb-3">
			<div className="flex flex-col my-4 sm:flex-row">
				<h1 className="font-bold text-5xl text-orange-500 tracking-widest  px-2 sm:text-6xl md:text-7xl text-center">URL</h1>
				<h1 className="text-yellow-500 font-bold text-5xl tracking-wide sm:text-6xl px-2 md:text-7xl">Shortner</h1>
			</div>
			<input
				type="text"
				placeholder="Place a link to shorten it"
				value={value}
				onChange={e => setValue(e.target.value)}
				className="m-2 mx-auto px-3 rounded-xl font-serif"
			/>
			<button
				onClick={handleClick}
				className="uppercase bg-yellow-500 text-white border-none outline-none px-3 rounded-xl my-4 hover:bg-yellow-400 hover:text-gray-100 font-thin"
			>shorten</button>
		</div>
	)
}
export default InputShortner