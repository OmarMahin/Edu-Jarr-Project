import React from 'react'

const Button = ({children, transparent, className}, props) => {
  return (
    <button className={`font-medium text-[12px] md:text-[20px] text-white ${transparent ? 'bg-transparent border border-white' : 'from-button_blue to-button_purple bg-gradient-to-br '} py-[12px] md:py-[18px] px-[17px] md:px-[36px] rounded-[10px] ${className}`} {...props}>{children}</button>
  )
}

export default Button