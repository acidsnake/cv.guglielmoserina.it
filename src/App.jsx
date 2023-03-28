import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/700.css';

import './App.css'

import { data } from './data';

import Hero from './components/Hero'
import List from './components/List'
import Button from './components/Button';

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
      <div className='md:hidden'>
        <Button 
          css='btn-download-cv'
          cta={'Download cv'} 
          url={'/cv-guglielmo-serina.pdf'} 
          iconType={'lucide:download'} 
          isBlank={true} />    
      </div>          
    </div>
  )
}

export default App
