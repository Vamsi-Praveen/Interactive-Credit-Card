import React, { useContext } from 'react'
import { creditContext } from '../App'

const BackCard = () => {
    const { cvv } = useContext(creditContext);
    return (
        <div>
            <img src='/images/bg-card-back.png' className='relative md:w-full w-[80%]' alt="Credit Back"/>
            <div className='absolute md:right-[40px] top-[44%] max-sm:left-[180px]'>
                <h1 className='uppercase text-white tracking-wider text-[12px]'>{cvv}</h1>
            </div>
        </div>
    )
}

export default BackCard
