import './App.css';
import { useState } from 'react';
import Menu from './components/Menu'

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  return (
    <div className='App'>
      <h1>Restaurant Menu</h1>
      <Menu currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    </div>
  );
}

export default App;
