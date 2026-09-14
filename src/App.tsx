
import { use } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from "./Components/Nav"
import Technologies from './Components/Technologies'
import type { StackType } from './Types/StackType'

const stackFetch = async (): Promise<StackType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

function App() {

  const stackPromise = use(stackFetch())


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Technologies stackPromise={stackPromise}></Technologies>
    </>
  )
}

export default App
