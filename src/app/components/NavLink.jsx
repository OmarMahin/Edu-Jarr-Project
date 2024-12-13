import React from "react"
import Flex from "./Flex"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io"

const NavLink = ({route, label}) => {
	return (
		<Flex className={"gap-[22px] items-center"}>
			<Link
				href={route}
				className='text-primary hover:text-secondary duration-300 font-medium text-[20px]'
			>
				{label}
			</Link>
			<IoIosArrowDown className='text-secondary w-[20px]' />
		</Flex>
        
	)
}

export default NavLink
