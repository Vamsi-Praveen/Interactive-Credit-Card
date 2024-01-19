import { creditContext } from '../App'
import Input from './input'
import React, { useContext, useState } from 'react'

const Form = () => {

    const { setCredit, setIsSubmited, setName, setDate, setCVV, setError, error, credit, name, date, cvv } = useContext(creditContext);
    const [exp, setExp] = useState({
        mm: '00',
        yy: '00'
    });
    const handleExp = (e) => {
        setExp((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    setDate(`${exp.mm}/${exp.yy}`)
    const handleCredit = (num) => {
        var cnumber = ''
        for (let i = 0; i < num.length; i++) {
            if (i % 4 == 0 && i > 1) {
                cnumber += " "
            }
            cnumber += num[i]
        }
        return cnumber

    }
    const handleClick = (e) => {
        e.preventDefault();
        if (name == 'jane appleseed' || date == '00/00' || cvv == '000' || credit == '0000 0000 0000 0000') {
            return setError(true)
        }
        if (!error && name != '' && date != '' && cvv != '' && credit != '') {
            setIsSubmited(true)
        }
    }
    return (
        <div className='w-[400px] p-5'>
            <form>
                <div className='flex gap-3 flex-col mb-3'>
                    <label className='tracking-wide uppercase text-[12px] font-medium'>CardHolder Name</label>
                    <Input placeholder="e.g. Jane Appleseed" type="text" onchange={(e) => { setName(e.target.value) }} />
                </div>
                <div className='flex gap-3 flex-col mb-3'>
                    <label className='tracking-wide uppercase text-[12px] font-medium'>Card Number</label>
                    <Input placeholder="e.g. 1234 5678 9123 0000" type="text"
                        length="16" onKeyPress={
                            (e) => {
                                if (!/[0-9]/.test(e.key) && e.key != "Tab ") {
                                    setError(true)
                                }
                                else {
                                    setError(false)
                                }
                            }
                        }
                        onchange={(e) => {
                            setCredit(handleCredit(e.target.value))
                        }}
                    />
                    {
                        error && <span className='capitalize text-error text-[12px] font-medium tracking-wide'>wrong format, numbers only</span>
                    }
                </div>
                <div className='mb-3'>
                    <div className='flex gap-3'>
                        <div className='flex flex-col gap-3'>
                            <label className='tracking-wide uppercase text-[12px] font-medium'>Exp.Date&nbsp;(MM/YY)</label>
                            <div className='flex gap-3'>
                                <Input placeholder="MM" type="text" className="w-[60px] pl-2 px-0" onKeyPress={
                                    (e) => {
                                        if (!/[0-9]/.test(e.key) && e.key != "Tab ") {
                                            setError(true)
                                        }
                                        else {
                                            setError(false)
                                        }
                                    }
                                }
                                    onchange={handleExp}
                                    name="mm"
                                    length="2"
                                />

                                < Input placeholder="YY" type="text" className="w-[60px] pl-2 px-0" onKeyPress={
                                    (e) => {
                                        if (!/[0-9]/.test(e.key) && e.key != "Tab ") {
                                            setError(true)
                                        }
                                        else {
                                            setError(false)
                                        }
                                    }
                                }
                                    onchange={handleExp}
                                    name="yy"
                                    length="2"
                                />
                            </div>
                            {
                                error && <span className='capitalize text-error text-[12px] font-medium tracking-wide'>can't be blank</span>
                            }
                        </div>
                        <div className='flex gap-3 flex-col'>
                            <label className='tracking-wide uppercase text-[12px] font-medium'>CVV</label>
                            < Input placeholder="e.g. 123" type="text" className="w-[120px] pl-2 px-0" onKeyPress={
                                (e) => {
                                    if (!/[0-9]/.test(e.key) && e.key != "Tab ") {
                                        setError(true)
                                    }
                                    else {
                                        setError(false)
                                    }
                                }
                            }
                                onchange={(e) => { setCVV(e.target.value) }}
                                length="3"
                            />
                             {
                                error && <span className='capitalize text-error text-[12px] font-medium tracking-wide'>can't be blank</span>
                            }
                        </div>
                    </div>
                </div>
                <div className='mt-4'>
                    <button type="submit" onClick={handleClick} className='bg-violet text-white w-full py-2 rounded-md'>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Form
