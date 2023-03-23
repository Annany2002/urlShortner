import InputShortner from './InputShortner'
import { useState } from 'react'
import LinkResult from './LinkResult'
import Footer from './Footer'
import { RecentLinks } from './RecentLinks'

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [ data, setData ] = useState(JSON.parse(localStorage.getItem('data')) || [])

  return (
    <div className='bg-[#f8e5d1] flex flex-col justify-center h-auto min-h-screen'>
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