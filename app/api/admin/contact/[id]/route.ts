import { NextRequest, NextResponse } from "next/server";
import { ContactModel } from "@/app/api/models/contact-schema";
import { connectToMongoDB } from "@/app/api/lib/db";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    await connectToMongoDB();

    const { id } = await params;

    const message = await ContactModel.findByIdAndDelete(id);

    if (!message) {
      return NextResponse.json(
        {
          success: false,
          message: "Message not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Message has been deleted successfully",
        data: message,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("DELETE CONTACT ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}