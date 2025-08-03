import { NextRequest, NextResponse } from "next/server";
import { connectToMongoDB } from "../lib/db";
import { ContactModel } from "../models/contact-schema";
import { contactSchema } from "../validate-schema/contact-validate";


export async function POST(request:NextRequest) {
    try {
        await connectToMongoDB();
        const req = await request.json();
        const fields = await contactSchema.parseAsync(req);
        const application = new ContactModel(fields);
        await application.save();
        return NextResponse.json({ success: true, data: application });
    } catch (error) {
        console.log("Internal Server Error...", error);
        return NextResponse.json({ success: false, error });
    }
}