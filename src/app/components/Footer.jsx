import Image from "next/image"
import React from "react"
import Container from "./Container"
import Flex from "./Flex"
import { Rowdies } from "next/font/google"
import { FiPhone } from "react-icons/fi"
import { CiMail } from "react-icons/ci"
import { IoLocationOutline } from "react-icons/io5"
import { TiSocialFacebookCircular } from "react-icons/ti"
import { CiTwitter } from "react-icons/ci"
import { CiInstagram } from "react-icons/ci"
import { PiBehanceLogo } from "react-icons/pi"
import { FaDribbble } from "react-icons/fa"

const rowdies = Rowdies({
	weight: ["300", "400", "700"],
	subsets: ["latin"],
	display: "swap",
})
const Footer = () => {
	return (
		<footer className='relative'>
			<Image
				src={"/images/footer.png"}
				className={"lg:w-[1920px] lg:h-auto h-full absolute top-0 left-0 z-[-1]"}
				width={1920}
				height={541}
			></Image>
			<Container>
				<Flex className={"lg:flex-row flex-col justify-between lg:pt-[118px] pt-[60px] pb-[40px] lg:pb-[90px] border-b-[1px] border-white items-center gap-y-[40px]"}>
					<div>
						<Image src={"/images/footerLogo.png"} width={193} height={60}></Image>
						<p className='text-[16px] lg:text-[18px] lg:w-[450px] mt-[40px] lg:mt-[74px] text-white font-regular'>
							Veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur.{" "}
						</p>
					</div>
					<div>
						<h3 className={`text-[20px] lg:text-start text-center lg:text-[25px] text-white font-bold ${rowdies.className}`}>
							Quick Links
						</h3>
						<Flex className={"mt-[40px] lg:mt-[84px] gap-[70px]"}>
							<ul className='font-medium text-[16px] lg:text-[18px] text-white flex flex-col gap-y-[20px]'>
								<li>About</li>
								<li>Course</li>
							</ul>
							<ul className='font-medium text-[16px] lg:text-[18px] text-white flex flex-col gap-y-[20px]'>
								<li>Blog</li>
								<li>Contact</li>
							</ul>
						</Flex>
					</div>
					<div>
						<h3 className={`text-[20px] lg:text-start text-center lg:text-[25px] text-white font-bold ${rowdies.className}`}>
							Contact us
						</h3>
						<Flex className={"mt-[40px] lg:mt-[84px] gap-x-[70px] gap-y-[20px] lg:flex-row flex-col items-center"}>
							<ul className='font-medium text-[16px] lg:text-[18px] text-white flex flex-col gap-y-[20px]'>
								<li>
									<Flex className={"gap-[25px] items-center"}>
										<FiPhone />
										<span>(209) 555-0104</span>
									</Flex>
								</li>
								<li>
									<Flex className={"gap-[25px] items-center"}>
										<CiMail />
										<span>michelle.rivera@example.com</span>
									</Flex>
								</li>
							</ul>
							<ul className='font-medium text-[16px] lg:text-[18px] text-white flex flex-col gap-y-[20px]'>
								<li>
									<Flex className={"gap-[25px] items-center"}>
										<IoLocationOutline />
										<span className='lg:w-[250px]'>
											2715 Ash Dr. San Jose, South Dakota 83475
										</span>
									</Flex>
								</li>
							</ul>
						</Flex>
					</div>
				</Flex>
				<Flex className={"lg:flex-row flex-col items-center mt-4 justify-between gap-y-[20px] lg:pb-0 pb-[20px]"}>
					<span className='text-[14px] lg:text-[18px] text-white font-regular'>
						Copyright 2023 | All Rights Reserved
					</span>
					<Flex className={"text-[22px] text-white items-center gap-[30px]"}>
						<TiSocialFacebookCircular />
						<CiTwitter />
						<CiInstagram />
						<PiBehanceLogo />
						<FaDribbble />
					</Flex>
				</Flex>
			</Container>
		</footer>
	)
}

export default Footer
