
import { NextRequest, NextResponse } from "next/server";
import { ContactModel } from "../../models/contact-schema";
import { connectToMongoDB } from "../../lib/db";
export async function GET() {
    try {
        await connectToMongoDB();
        const findContactMessage = await ContactModel.find();
        return NextResponse.json({ success: true, data: findContactMessage }, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
    }
}
