import Course from "@/app/models/coursesModel"
import { NextResponse } from "next/server"

export async function DELETE(request) {
	try {
		const { _id } = await request.json()

		const deleteCourse = await Course.findByIdAndDelete(_id)

		if (!deleteCourse) {
			return new NextResponse(JSON.stringify({ message: "Course not found" }))
		}

		return new NextResponse(JSON.stringify({ message: "Course deleted" }))
	} catch (error) {
		return new NextResponse(JSON.stringify({ message: "Error deleting course", error }))
	}
}
