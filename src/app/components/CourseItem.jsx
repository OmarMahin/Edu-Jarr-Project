import Image from 'next/image'
import React from 'react'
import Flex from './Flex'
import { MdOutlineShoppingCart } from "react-icons/md"

const CourseItem = ({image, heading, price, students, time}) => {
  return (
    <Flex className = "lg:w-[512px] w-[250px] overflow-hidden rounded-xl flex-col shadow-lg">
        <Image src={image} width={511} height={314} className='lg:w-[512px] w-[250px] lg:h-[314px] h-[160px]'></Image>
        <div className='mt-[29px] lg:px-[30px] px-[15px] pb-[33px]'>
            <Flex className={"font-medium text-[14px] text-[#4E596B] justify-between"}>
                <span>{students} Students</span>
                <span>{time}</span>
            </Flex>
            <h2 className='font-semibold lg:text-[25px] text-[18px] text-[#324361] mt-5'>{heading}</h2>
            <Flex className={"font-medium lg:text-[22px] text-[16px] text-[#4E596B] justify-between mt-[33px]"}>
                <span>${price}</span>
                <span><MdOutlineShoppingCart /></span>
            </Flex>
        </div>
    </Flex>
    
  )
}

export default CourseItem