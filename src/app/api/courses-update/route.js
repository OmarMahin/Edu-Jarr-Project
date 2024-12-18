import Course from "@/app/models/coursesModel"
import { NextResponse } from "next/server"

export async function POST(request) {
	try {
		const { _id, ...updateFields } = await request.json()


		if (!_id) {
			return new NextResponse(JSON.stringify({ message: "Id is required" }))
		}

		const updatedCourse = await Course.findByIdAndUpdate(
			_id,
			{ $set: updateFields },
			{ new: true } 
		)

		if (!updatedCourse) {
			return new NextResponse(JSON.stringify({ message: "Course not found" }))
		}

		return new NextResponse(JSON.stringify({ message: "Course updated" }))
	} catch (error) {
		return new NextResponse(JSON.stringify({ message: "Error updating course", error }))
	}
}
