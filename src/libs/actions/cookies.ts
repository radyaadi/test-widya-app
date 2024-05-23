"use server";

import { cookies } from "next/headers";

export const setCookies = (name: string, value: string) => {
  cookies().set(name, value, { httpOnly: true, maxAge: 60 * 60 * 1 });
};

export const deleteCookies = (name: string) => cookies().delete(name);
