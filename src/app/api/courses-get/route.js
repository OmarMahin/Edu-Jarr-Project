import Course from "@/app/models/coursesModel"
import { NextResponse } from "next/server"

export async function GET(request) {
	try {
        const allCourses = await Course.find()

        if (!allCourses || allCourses.length === 0) {
            return new NextResponse(JSON.stringify({ message: "Course not found" }))
        }

        return new NextResponse(JSON.stringify({ message: "Course found", allCourses }))
	} catch (error) {
		return new NextResponse(JSON.stringify({ message: "Error getting courses", error }))
	}
}
