import InputShortner from './InputShortner'
import { useState } from 'react'
import LinkResult from './LinkResult'

const App = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col w-full h-screen bg-blue-600">
      <InputShortner
        setInputValue={setInputValue} 
        />
      <LinkResult 
      inputValue={inputValue}
      />
    </div>
  )
}
export default App