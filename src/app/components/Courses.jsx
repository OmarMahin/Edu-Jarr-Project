import React from "react";
import Flex from "./Flex";
import SectionTitle from "./SectionTitle";
import CourseContent from "./CourseContent";
import Button from "./Button";
import Image from "next/image";
import Container from "./Container";

const Courses = () => {
  return (
    <section className="relative bg-container">
      <Image
        src="/images/courses_bg.png"
        fill
        alt="Courses_background"
        className="object-cover object-center z-[-1]"
      />
      <Container>
        <Flex className="lg:mt-[160px] mt-[0px] flex-col items-center">
          <SectionTitle
            black="Featured"
            green="Courses"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam..."
          ></SectionTitle>
          <CourseContent></CourseContent>
          <Button className="w-fit lg:mt-[90px] mt-[60px] mb-[90px] lg:mb-[130px]">
            Explore courses
          </Button>
        </Flex>
      </Container>
    </section>
  );
};

export default Courses;
