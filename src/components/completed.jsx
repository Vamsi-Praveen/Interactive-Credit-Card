import React from 'react'
import icon from "/images/icon-complete.svg"

const Completed = () => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <img src={icon} />
            <h1 className='uppercase md:text-3xl text-2xl text-violet'>Thank you</h1>
            <h1 className='text-muted md:text-xl text-[16px] capitalize text-center'>We've added your card details</h1>
            <button className='bg-violet text-white w-full py-2 rounded-md' onClick={(e) => {
                window.location.reload()
            }}>Continue</button>
        </div>
    )
}

export default Completed
