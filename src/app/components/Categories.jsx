import Image from 'next/image'
import React from 'react'
import Container from './Container'
import SectionTitle from './SectionTitle'
import CategoriesItem from './CategoriesItem'
import Flex from './Flex'

const Categories = () => {
  return (
    <section className='relative'>
        <Image src={"/images/categories.png"} width={1920} height={837} className='lg:w-[1920px] lg:h-auto h-full absolute top-0 left-0 z-[-1]'></Image>
        <Container>
            <SectionTitle black={"Top"} green={"Categories"} description={"12,000+ unique online course list designs"}></SectionTitle>
            <Flex className='lg:mt-[100px] mt-[50px] flex-wrap lg:justify-between items-center justify-center mb-[200px] gap-y-[20px] gap-x-[10px] lg:pb-0 pb-[150px]'>
              <CategoriesItem iconImage={"category1"} heading = {"Digital Marketing"} coursesNumber={"25"}></CategoriesItem>
              <CategoriesItem iconImage={"category2"} heading = {"Web Development"} coursesNumber={"16"}></CategoriesItem>
              <CategoriesItem iconImage={"category3"} heading = {"Art & Humanities"} coursesNumber={"76"}></CategoriesItem>
              <CategoriesItem iconImage={"category4"} heading = {"Personal Development"} coursesNumber={"22"}></CategoriesItem>
              <CategoriesItem iconImage={"category5"} heading = {"IT and Software"} coursesNumber={"110"}></CategoriesItem>
              <CategoriesItem iconImage={"category6"} heading = {"Graphic Design"} coursesNumber={"85"}></CategoriesItem>
              
            </Flex>
        </Container>
    </section>
  )
}

export default Categories