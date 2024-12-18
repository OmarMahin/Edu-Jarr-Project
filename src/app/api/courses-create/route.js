import Course from "@/app/models/coursesModel";
import { NextResponse } from "next/server";


export async function POST(request) {
  try {

    const {courseName, price, courseTime, totalStudents, imageLink} = await request.json();
    const course = new Course({
      courseName,
      price,
      courseTime,
      totalStudents,
      imageLink
    })

    const new_course = await course.save();

    return new NextResponse(JSON.stringify("Coursed added"))

  } catch (error) {
    return new NextResponse(JSON.stringify({"message": "Error occured", error}))
  }
}

