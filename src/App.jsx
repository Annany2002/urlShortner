import InputShortner from './InputShortner'
import { useState } from 'react'
import LinkResult from './LinkResult'
import Footer from './Footer'

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className='bg-blue-600 flex flex-col justify-center h-screen'>
      <InputShortner
        setInputValue={setInputValue} 
        />
      <LinkResult 
      inputValue={inputValue}
      />
      <Footer/>
    </div>
  )
}
export default App