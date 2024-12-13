import React from 'react'
import Flex from './Flex'
import CourseItem from './CourseItem'

const CourseContent = () => {
  return (
    <Flex className={'flex-wrap mt-[90px] lg:justify-between justify-center gap-y-12 items-center'}>
        <CourseItem image={"course_1"} heading={"Motion Graphics: Create a Nice Typography Animation"} price={"33.99"}></CourseItem>
        <CourseItem image={"course_2"} heading={"The Complete Financial Analyst Training & Investing"} price={"45.99"}></CourseItem>
        <CourseItem image={"course_3"} heading={"Education Software and PHP and JS System Script"} price={"33.99"}></CourseItem>
        <CourseItem image={"course_4"} heading={"Marketing 2023: Complete Guide To Instagram Growth"} price={"33.99"}></CourseItem>
        <CourseItem image={"course_5"} heading={"Advance PHP knowledge with JS to make smart web"} price={"33.99"}></CourseItem>
        <CourseItem image={"course_6"} heading={"Learn 3D Modelling and Design for Beginners"} price={"33.99"}></CourseItem>
    </Flex>
  )
}

export default CourseContent