import React from "react"
import SectionTitle from "./SectionTitle"
import Container from "./Container"
import Image from "next/image"
import TestimonialItem from "./TestimonialItem"
import Flex from "./Flex"

const Testimonials = () => {
	return (
		<section className='relative'>
			<Image
				src={"/images/testimonialBg.png"}
				className='lg:w-[1920px] lg:h-auto h-full absolute lg:top-[-400px] left-0 z-[-1]'
				width={1920}
				height={1685}
			></Image>
			<Container>
				<SectionTitle
					black={""}
					green={"Testimonials"}
					description={"What our student say about us"}
				></SectionTitle>
                
                <Flex className = {"mt-[30px] lg:mt-[94px] justify-center items-center flex-wrap lg:justify-between lg:mb-[147px] gap-y-[10px] lg:pb-[0px] pb-[40px]"}>
                    <TestimonialItem image={"person1"} name = {"Ronald Richards"} description={"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "}></TestimonialItem>
                    <TestimonialItem image={"person2"} name = {"Wade Warren"} description={"Cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Reprehenderit in voluptate velit esse  "}></TestimonialItem>
                    <TestimonialItem image={"person3"} name = {"Jacob Jones"} description={"Esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit "}></TestimonialItem>
                </Flex>
			</Container>
		</section>
	)
}

export default Testimonials
