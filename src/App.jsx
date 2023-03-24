import InputShortner from './InputShortner'
import Footer from './Footer'
import RecentLinks from './RecentLinks'

import { useState } from 'react'

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
  const [darkTheme, setDarkTheme] = useState(false);

  function cn(...classes) {
    return classes.filter(Boolean).join(' ')
  }

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
    <div className={darkTheme ? 'dark' : ' '}>
      <div className='bg-[#f6e2cd] flex flex-col justify-center h-auto min-h-screen dark:bg-[#14213d]'>
        <InputShortner
          data={data}
          setData={setData}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
        />
        <RecentLinks
          data={data}
          handleDelete={handleDelete}
        />
        <Footer />
      </div>
    </div>
  )
}
export default App