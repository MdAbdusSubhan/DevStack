
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Nav from "./Components/Nav"
import Technologies from './Components/Technologies'
import type { StackType } from './Types/StackType'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'


const stackFetch = async (): Promise<StackType[]> => {
  const res = await fetch("/data.json");
  const data = await res.json();
  return data;
}

const stackPromise = stackFetch()

function App() {

  

  const [stackButton, setStackButton] = useState<string[]>([])


  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <Suspense fallback={<h1 className='text-3xl font-bold'>Loading Stacks....</h1>}>
        <div>
          <Technologies stackPromise={stackPromise}  stackButton={stackButton} setStackButton={setStackButton}></Technologies>
        </div>
      </Suspense>
      <Footer></Footer>


      <ToastContainer></ToastContainer>
    </>
  )
}

export default App
