import React from 'react'
import Flex from './Flex'
import Image from 'next/image'
import { IoStar } from "react-icons/io5"

const TestimonialItem = ({image, name, description}) => {
  return (
    <Flex className={"lg:p-[50px] p-[20px] lg:w-[520px] w-[300px] rounded-xl flex-col bg-white shadow-lg"}>
        <Flex className={"justify-start gap-[20px] lg:gap-[33px] items-center"}>
            <Image src={`/images/${image}.png`} width={65} height={65}></Image>
            <h3 className='font-bold text-[20px] lg:text-[25px] text-primary'>{name}</h3>
        </Flex>
        <p className='mt-[30px] lg:mt-[42px] font-regular text-[16px] lg:text-[18px] text-[#7E7EAA]'>{description}</p>
        <Flex className={"gap-[6px] mt-[20px] lg:mt-[50px]"}>
        <IoStar className='text-[#FAB437]'/>
        <IoStar className='text-[#FAB437]'/>
        <IoStar className='text-[#FAB437]'/>
        <IoStar className='text-[#FAB437]'/>
        <IoStar className='text-[#CBC2FF]'/>
        </Flex>
    </Flex>
  )
}

export default TestimonialItem