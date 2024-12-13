import React from 'react'
import Flex from './Flex'
import { Rowdies } from 'next/font/google'

const rowdies = Rowdies({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap",
})
const SectionTitle = ({black, green, description}) => {
  return (
    <Flex className='lg:mt-[120px] mt-[50px] flex-col mx-auto items-center justify-center'>
        <Flex className={`lg:gap-[10px] gap-[6px] ${rowdies.className} font-regular lg:text-[40px] text-[24px] jusify-center`}>
            <span className='text-primary'>{black}</span>
            <span className='text-secondary'>{green}</span>
        </Flex>
        <p className='text-[#4E596B] lg:w-[550px] text-center lg:mt-11 mt-7 text-[14px] lg:text-[20px]'>{description}</p>
    </Flex>
  )
}

export default SectionTitle