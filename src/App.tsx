
import { Suspense, use, useState } from 'react'
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

const stackPromise = stackFetch()

function App() {

  const stackData = use(stackPromise)

  const [stackButton, setStackButton] = useState<string[]>([])


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback="loading Stacks...">
        <div>
          <Technologies stackButton={stackButton} setStackButton={setStackButton}  stackData={stackData}></Technologies>
        </div>
      </Suspense>
    </>
  )
}

export default App
