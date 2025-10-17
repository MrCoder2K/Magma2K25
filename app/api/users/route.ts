import { NextResponse } from "next/server";
import { db } from "@/prisma/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const existingUser = await db.user.findUnique({
      where: { email: body.email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email already exists" },
        { status: 409 }
      );
    }

    await db.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        phone: body.phone,
        message: body.message,
      },
    });

    return NextResponse.json(
      { message: "Message Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
