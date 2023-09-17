import { useState } from 'react'
import './App.css'
import Header from './Header'
import Result from './Results'
import Search from './Search'
import dummyjson from '../samples.json'

function App() {
  const data = dummyjson.data
  const list = data.map(el => [el.id, el.title])
  // console.log(list)
  const [res, setRes] = useState(list)
  return (
    <>
      <Header />
      <Search setRes={setRes} list={list} />
      <Result res={res} />
    </>
  )
}

export default App
