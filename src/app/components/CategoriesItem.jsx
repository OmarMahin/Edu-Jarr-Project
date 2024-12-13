import React from 'react'
import Flex from './Flex'
import Image from 'next/image'

const CategoriesItem = ({iconImage, heading, coursesNumber}) => {
  return (
    <Flex className={"lg:w-[250px] w-[120px] lg:p-[37px] p-[10px] rounded-lg flex-col items-center shadow-lg bg-white"}>
        <Image className='"lg:w-[90px] lg:h-[90px] w-fit' src={`/images/${iconImage}.png`} width={90} height={90}></Image>
        <h2 className='max-w-[160px] font-semibold text-[16px] lg:text-[25px] text-primary mt-[30px] lg:mt-[50px] text-center'>{heading}</h2>
        <span className='mt-[30px] lg:mt-[45px] font-medium text-[14px] lg:text-[18px] text-[#4F547B]'>{coursesNumber} Courses</span>
    </Flex>
  )
}

export default CategoriesItem