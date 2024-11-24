// import { useState } from 'react'
import './App.css'
// import { FaHeart } from 'react-icons/fa';
import { Ue_dep, Ue_none, Ue_one } from './components'

function App() {
  // const [count, setCount] = useState(0)
  // const [liked, setLiked] = useState(false);

  // function toggleHeart() {
  //   setLiked((prevLiked) => !prevLiked);
  // }

  // function aplymore() {
  //   setCount((c) => c + 1)
  // }
  return (
    <>
    <div className='button-container'>
      <Ue_none/>
      <Ue_one/>
      <Ue_dep/>
    </div>
    </>
  )
}

export default App
