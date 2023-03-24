import InputShortner from './InputShortner'
import Footer from './Footer'
import RecentLinks from './RecentLinks'

import { useState, useRef } from 'react'

const App = () => {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('data')) || []);
  const [darkTheme, setDarkTheme] = useState(localStorage.getItem('theme') === 'dark' || false);
  const parent = useRef()

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

  function toggleDarkTheme(darkTheme){
    if (darkTheme || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      parent.current.classList.add('dark')
      localStorage.setItem('theme', 'dark');
    } else {
      parent.current.classList.remove('dark')
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <div ref={parent} className={darkTheme ? 'dark' : ' '}>
      <div className='bg-[#f6e2cd] flex flex-col justify-center h-full min-h-screen dark:bg-[#14213d]'>
        <InputShortner
          data={data}
          setData={setData}
          darkTheme={darkTheme}
          setDarkTheme={setDarkTheme}
          toggleDarkTheme={toggleDarkTheme}
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