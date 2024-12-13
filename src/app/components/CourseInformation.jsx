import React from "react"
import Flex from "./Flex"
import Image from "next/image"
import Container from "./Container"
import { Rowdies } from 'next/font/google';

const rowdies = Rowdies({
    weight: ["300", "400", "700"],
    subsets: ["latin"],
    display: "swap",
})

const CourseInformation = () => {
	return (
		<Flex className={"relative"}>
			<Image
				className='absolute top-0 left-0 z-[-1] lg:w-[1920px] w-[100vw] h-full'
				src={"/images/learn_courses.png"}
				width={1920}
				height={776}
			></Image>
            <Container>
                <Flex className={'flex-col items-center'}>
                    <h2 className={`lg:text-[45px] text-[25px] text-white font-bold lg:mt-[113px] mt-[70px] text-center ${rowdies.className}`}>Why <span className="text-secondary">learn</span> with our courses?</h2>
                    <p className="lg:w-[798px] font-regular lg:text-[25px] text-[18px] text-white text-center mt-[29px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporidunt ut labore veniam...</p>
                    <Image src={"/images/learn_courses2.png"} width={1367} height={248} className="mt-[70px] lg:mt-[115px] mb-[76px] w-full"></Image>
                </Flex>
            </Container>
		</Flex>
	)
}

export default CourseInformation
