"use server";

import { db } from "@/prisma/db";
import { UserProps } from "@/types/types";


export async function createUser(data: UserProps) {

  const { email, message, fullName, phone } = data;

  try {

    const newUser = await db.user.create({
      data: { email, fullName, message, phone },
    });

    return {
      error: null,
      status: 200,
      data: newUser,
    };
  } catch (error: any) {
    console.error("Error creating user:", error?.response || error);

    return {
      error: "Something went wrong, please try again",
      status: 500,
      data: null,
    };
  }
}
