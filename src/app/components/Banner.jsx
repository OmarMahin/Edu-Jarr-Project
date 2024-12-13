"use client"

import React, { useEffect, useState } from "react"
import Flex from "./Flex"
import Image from "next/image"
import Container from "./Container"
import { Rowdies } from "next/font/google"
import Typewriter from "typewriter-effect"
import Button from "./Button"
import { CiSearch } from "react-icons/ci"

const rowdies = Rowdies({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	display: "swap",
})
const Banner = () => {
	const [windowSize, setWindowSize] = useState(true)

	useEffect(() => {
		if (window.innerWidth < 1024) {
			setWindowSize(false)
		}
	}, [])
	return (
		<Flex className={"relative lg:h-[936px] h-fit w-full flex-col items-center"}>
			<Image
				src={"/images/banner_background.png"}
				width={1920}
				height={936}
				alt='Banner'
				className=' absolute top-0 left-1/2 -translate-x-1/2 h-full z-[-10]'
			></Image>
			<Container className={"w-full relative lg:pb-0 pb-[30px]"}>
				{windowSize ? (
					<>
						<Image
							src={"/images/banner_part_2.png"}
							width={1773}
							height={1223}
							alt='Banner_p2'
							className='absolute -top-7 left-1/2 -translate-x-1/2 z-0 w-full'
						></Image>
						<h1
							className={`w-[650px] h-[300px] text-7xl text-white font-regular mt-[300px] ${rowdies.className}`}
						>
							<Typewriter
								options={{
									strings: [
										`Good <span class="text-secondary">coaching</span> is good teaching & nothing else.`,
									],
									autoStart: true,
									loop: true,
									delay: 100,
									deleteSpeed: 50,
								}}
							/>
						</h1>
						<Flex className={"items-center gap-[20px] md:gap-[35px] md:mt-0 mt-10 "}>
							<Button className={"w-fit"} transparent={true}>
								View Courses
							</Button>
							<span className='font-medium text-[14px] md:text-[20px] text-white'>
								Get Free Consultation
							</span>
						</Flex>
						<Flex className={"relative md:w-[500px] w-full mt-[80px]"}>
							<input
								type='text'
								className='md:pl-[25px] pl-[10px] md:pt-[23px] pt-[15px] md:pb-[29px] pb-[14px] w-full placeholder:text-[#4F547B] placeholder:font-regular md:placeholder:text-[18px] placeholder:text-[14px] rounded-[7px] z-10'
								placeholder='What do you want to learn today?'
							></input>
							<Button className={"w-fit absolute top-1/2 -translate-y-1/2 right-2 z-20"}>
								{
									<Flex className={"gap-3 items-center"}>
										<CiSearch className='md:text-[24px] text-[16px] text-white' />{" "}
										<span>Search</span>
									</Flex>
								}
							</Button>
						</Flex>
					</>
				) : (
					<>
						<h1
							className={`w-full text-3xl text-white font-regular mt-[30px] ${rowdies.className}`}
						>
							Good <span className='text-secondary'>coaching</span> is good teaching &
							nothing else.
						</h1>
						<Flex className={"items-center gap-[20px] md:gap-[35px] md:mt-0 mt-10"}>
							<Button className={"w-fit"} transparent={true}>
								View Courses
							</Button>
							<span className='font-medium text-[14px] md:text-[20px] text-white'>
								Get Free Consultation
							</span>
						</Flex>
						<Flex className={"relative md:w-[500px] w-full mt-[80px]"}>
							<input
								type='text'
								className='md:pl-[25px] pl-[10px] md:pt-[23px] pt-[15px] md:pb-[29px] pb-[14px] w-full placeholder:text-[#4F547B] placeholder:font-regular md:placeholder:text-[18px] placeholder:text-[14px] rounded-[7px] z-10'
								placeholder='What do you want to learn today?'
							></input>
							<Button className={"w-fit absolute top-1/2 -translate-y-1/2 right-2 z-20"}>
								{
									<Flex className={"gap-3 items-center"}>
										<CiSearch className='md:text-[24px] text-[16px] text-white' />{" "}
										<span>Search</span>
									</Flex>
								}
							</Button>
						</Flex>
					</>
				)}
			</Container>
			{windowSize ? (
				<Flex className={"absolute bottom-1 translate-y-[100%] z-10"}>
					<Image src={"/images/banner_bottom.png"} width={1920} height={169}></Image>
					<Container className={"absolute top-0 left-1/2 -translate-x-1/2 z-20 w-full "}>
						<Flex className={"items-center justify-between h-[161px] gap-[130px]"}>
							<Image src={"/images/amazon.png"} width={120} height={40}></Image>
							<Image src={"/images/amd.png"} width={120} height={40}></Image>
							<Image src={"/images/cisco.png"} width={120} height={40}></Image>
							<Image src={"/images/dropcam.png"} width={120} height={40}></Image>
							<Image src={"/images/logitech.png"} width={120} height={40}></Image>
							<Image src={"/images/spotify.png"} width={120} height={40}></Image>
						</Flex>
					</Container>
				</Flex>
			):
			""}
		</Flex>
	)
}

export default Banner
