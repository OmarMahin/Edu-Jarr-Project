import Course from "@/app/models/coursesModel"
import databaseConnect from "@/lib/databaseConnection"
import { NextResponse } from "next/server"

export async function DELETE(request) {
	try {
		await databaseConnect()
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
