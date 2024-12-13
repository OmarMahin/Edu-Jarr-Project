import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Video = () => {
  return (
    <div>
        <Container>
            <Image src={"/images/video.png"} className={" w-fit lg:max-w-[1373px] mt-[100px] lg:mt-[114px] mx-auto"} width={1373} height={727} ></Image>
        </Container>
    </div>
  )
}

export default Video