import React, { createContext, useState } from 'react'
import Form from './components/Form'
import Creditcard from './components/creditcard'
import BackCard from './components/backCard'
import Completed from "./components/completed";

export const creditContext = createContext();
const App = () => {

  const [credit, setCredit] = useState("0000 0000 0000 0000")
  const [name, setName] = useState("jane appleseed")
  const [date, setDate] = useState("00/00")
  const [cvv, setCVV] = useState("000")
  const [isSubmitted, setIsSubmited] = useState(false)
  const [error,setError] = useState(false)
  return (
    <creditContext.Provider value={{ credit, setCredit, isSubmitted, setIsSubmited,name,setName,date,setDate,cvv,setCVV,error,setError }}>
      <div className='h-screen w-full'>
        <div className='md:w-[25%] h-[220px] md:h-full md:float-left md:bg-leftBanner bg-leftMbBanner bg-cover'>
          <div className='absolute top-[120px] left-[20px] md:relative md:top-[180px] md:left-[120px] z-50'>
            <Creditcard />
          </div>
          <div className='absolute top-[20px] left-[60px] md:relative md:top-[210px] md:left-[200px]'>
            <BackCard />
          </div>
          <div className='w-[200px] h-[200px] rounded-full bg-[#b6b0b0] blur-2xl relative -z-30 top-[-80px] left-[260px] max-sm:hidden' />
        </div>
        <div className='h-[calc(100vh-220px)] md:h-full md:float-right md:w-[75%] px-[15%] pt-12 md:pt-0'>
          {
            isSubmitted ? (
              <div className='flex h-full w-full items-center md:justify-end justify-center md:pr-[100px]'>
                <Completed />
              </div>
            ) :
              (
                <div className="flex h-full w-full items-center md:justify-end justify-center">
                  <Form />
                </div>
              )
          }
        </div>
      </div>
    </creditContext.Provider>
  )
}

export default App
