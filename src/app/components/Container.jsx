import React from 'react'

const Container = ({children, className, ...props}) => {
  return (
    <div className={`max-w-[1626px] mx-auto lg:px-0 md:px-3 px-5 ${className}`} {...props}>{children}</div>
  )
}


export default Container