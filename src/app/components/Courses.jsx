import React from "react"
import Flex from "./Flex"
import SectionTitle from "./SectionTitle"
import CourseContent from "./CourseContent"
import Button from "./Button"
import Image from "next/image"
import Container from "./Container"

const Courses = () => {
	return (
		<section className='relative'>
			<Image
				src={"/images/courses_bg.png"}
				width={1920}
				height={1845}
				alt='Courses_background'
				className=' -translate-x-1/2 w-full max-w-[1920px] z-[-1] absolute left-1/2 bottom-0'
			></Image>
			<Container>
				<Flex className={"lg:mt-[160px] mt-[110px] flex-col items-center"}>
					<SectionTitle black={"Featured"} green={"Courses"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam..."}></SectionTitle>
					<CourseContent></CourseContent>
					<Button className={"w-fit lg:mt-[90px] mt-[60px] mb-[90px] lg:mb-[130px]"}>Explore courses</Button>
				</Flex>
			</Container>
		</section>
	)
}

export default Courses
