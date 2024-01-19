import React, { useContext, useState } from 'react'
import { creditContext } from '../App'

const Creditcard = () => {
    const { credit, name, date } = useContext(creditContext)
    return (
        <div>
            <img src='/images/bg-card-front.png' className='relative md:w-full w-[80%]' alt='Credit Card front' />
            <div className='absolute top-[15px] left-[20px]'>
                <img src='/images/card-logo.svg' className='w-[80%]' alt='creditcard logo' />
            </div>
            <div className='absolute bottom-[50px] px-5'>
                <h1 className='text-white md:text-2xl tracking-wider uppercase'>{credit}</h1>
            </div>
            <div className='absolute bottom-[20px] px-5'>
                <div className='flex justify-between md:min-w-[290px] min-w-[250px]'>
                    <h1 className='uppercase font-light text-white tracking-wider text-[12px]'>{name}</h1>
                    <h1 className='uppercase font-light text-white tracking-wider text-[12px]'>{date}</h1>
                </div>
            </div>
        </div>
    )
}

export default Creditcard
