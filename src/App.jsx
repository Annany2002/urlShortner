import InputShortner from './InputShortner'
import Footer from './Footer'
import RecentLinks from './RecentLinks'

import { useState } from 'react'

const App = () => {
  const [ data, setData ] = useState(JSON.parse(localStorage.getItem('data')) || [])

  const handleDelete = (id) => {
    let items = data
    for (var i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items.splice(i, 1);
      }
    }
    setData([...items])
    items = JSON.stringify(items);
    localStorage.setItem("data", items);
  }

  return (
    <div className='bg-[#f6e2cd] flex flex-col justify-center h-auto min-h-screen'>
      <InputShortner
        data={data}
        setData={setData}
      />
      <RecentLinks
        data={data}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  )
}
export default App