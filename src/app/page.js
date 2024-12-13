import Banner from "./components/Banner";
import Categories from "./components/Categories";
import Container from "./components/Container";
import CourseInformation from "./components/CourseInformation";
import Courses from "./components/Courses";
import Flex from "./components/Flex";
import Relavence from "./components/Relavence";
import Testimonials from "./components/Testimonials";
import Video from "./components/Video";


export default function Home() {
  return (
    <main className="overflow-y-hidden">
        <Banner/>
        <Courses></Courses>
        <CourseInformation></CourseInformation>
        <Categories></Categories>
        <Relavence></Relavence>
        <Video></Video>
        <Testimonials></Testimonials>
    </main>
  )
}
