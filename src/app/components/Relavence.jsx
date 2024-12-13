import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { Rowdies } from 'next/font/google';
import Image from 'next/image';
import Button from './Button';


const rowdies = Rowdies({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
})
const Relavence = () => {
  return (
    <section>
        <Container>
          <Flex className={"lg:flex-nowrap flex-wrap gap-x-[150px] mt-[100px] lg:mt-[300px]"}>
            <Image src={"/images/relavence.png"} width={664} height={666} className='h-full'></Image>
            <div>
              <h2 className={`text-[25px] lg:text-[45px] text-primary font-bold lg:mt-[130px] mt-[50px] ${rowdies.className}`}>The number one factor in  </h2>
              <h2 className={`text-[25px] lg:text-[45px] text-secondary font-bold ${rowdies.className}`}>relevance drives out resistance. </h2>
              <p className='font-regular mt-[30px] lg:mt-[52px] text-[#4E596B] text-[16px] lg:text-[18px]'> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <Button className={"mt-[48px]"}>Learn More</Button>
              </div>
          </Flex>
        </Container>
    </section>
  )
}

export default Relavence