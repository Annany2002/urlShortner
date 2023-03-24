import { useState } from "react";
import axios from 'axios';
import { Sun, MoonStars } from "@phosphor-icons/react";

const InputShortner = ({ data, setData, darkTheme, setDarkTheme }) => {
	const [value, setValue] = useState("");
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)

	const fetchData = async (prompt) => {
		try {
			setLoading(true);
			const res = await axios(`https://api.shrtco.de/v2/shorten?url=${prompt}`);
			let obj = {};
			obj.id = res.data.result.code
			obj.full_link = res.data.result.original_link
			obj.short_link = res.data.result.short_link
			let newOBJ = [obj, ...data]
			setData(newOBJ)
			localStorage.setItem('data', JSON.stringify(newOBJ))
			setError(null)
		} catch (err) {
			setError(err)
		} finally {
			setLoading(false)
		}
	}

	const handleClick = () => {
		let prompt = value
		fetchData(prompt)
		setValue("");
	}

	return (
		<div className="flex flex-col items-center mb-3">
			<div className="flex my-4 flex-row mb-8">
				<div className="flex flex-col sm:flex-row">
					<h1 className="font-bold text-[#fca311] px-2 tracking-wide text-6xl md:text-7xl text-center dark:text-[#eae2b7]">URL</h1>
					<h1 className="text-[#14213d] dark:text-[#e5e5e5] font-bold tracking-wide text-6xl px-2 md:text-7xl">Shortner</h1>
				</div>
				<button className='ml-10 my-auto px-6 py-2 items-right'
					type="button"
					onClick={() =>
						setDarkTheme(!darkTheme)
					}>
					{darkTheme ? <Sun size={34} color={'#fff'} weight='fill' /> : <MoonStars size={34} weight="fill" />}
				</button>
			</div>
			<input
				type="text"
				placeholder="Place a link to shorten"
				value={value}
				onChange={e => {
					setValue(e.target.value)
				}}
				className="m-2 mx-auto px-3 py-2 rounded-md font-mono tracking-tighter w-3/4 text-center md:max-w-[640px]"
			/>
			<button
				onClick={handleClick}
				className="uppercase bg-[#fca311] text-[#14213d] text-lg border-none font-mono tracking-wider outline-none px-4 rounded-xl my-4 focus:bg-[#fca311] hover:bg-orange-500 hover:text-gray-100 font-bold dark:text-[#e5e5e5] sm:text-2xl sm:px-6"
			>shorten</button>
			{
				loading && <p className="font-thin text-md sm:text-2xl lg:text-3xl font-serif text-[#14213d] tracking-widest dark:text-[#e5e5e5]">
					Loading...
				</p>
			}
			{
				error && <p className="font-thin text-md sm:text-2xl lg:text-3xl font-serif tracking-widest text-[#14213d] dark:text-[#e5e5e5]">
					Error ... Enter a valid Link
				</p>
			}
		</div>
	)
}
export default InputShortner
