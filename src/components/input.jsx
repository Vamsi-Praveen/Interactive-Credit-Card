import React, { useContext } from 'react'
import { creditContext } from '../App'

const Input = ({ placeholder, type, className, onKeyPress, length, onchange, name }) => {
  const { error } = useContext(creditContext)
  return (
    <input
      placeholder={placeholder}
      type={type}
      required
      className={`border ${error === true ? "border-error" : "border-gray-300"} rounded-md outline-none px-4 py-1.5 placeholder:text-[14px] tracking-wide ` + className}
      minLength={length}
      maxLength={length}
      onKeyDown={onKeyPress}
      onChange={onchange}
      name={name}
    />
  )
}

export default Input
