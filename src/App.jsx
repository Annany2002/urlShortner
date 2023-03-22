import InputShortner from './InputShortner'
import { useState } from 'react'
import LinkResult from './LinkResult'
import Footer from './Footer'
import { RecentLinks } from './RecentLinks'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [ data, setData ] = useState(JSON.parse(localStorage.getItem('data')) || [])
  //const [prevUrl, setPrevUrl] = useState("")

  return (
    <div className='bg-[#f5ebe0] flex flex-col justify-center h-screen'>
      <InputShortner
        setInputValue={setInputValue}
      />
      <LinkResult
        inputValue={inputValue}
        data={data}
        setData={setData}
      />
      <RecentLinks
        data={data}
      />
      <Footer />
    </div>
  )
}
export default App