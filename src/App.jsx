import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import './App.css'

import { data } from './data';

import Hero from './components/Hero'
import List from './components/List'

function App() {
  const lists = data.map((item, key) => {
    return (
      <div className='list' key={item[0]}>
        <List title={item[0]} items={item[1]} />
        {key !== data.length - 1 && <hr />}
      </div>
    )
  })

  return (
    <div className='App'>
      <Hero />    
      {lists}              
    </div>
  )
}

export default App
